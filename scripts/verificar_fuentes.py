#!/usr/bin/env python3
"""Vuelve a descargar cada fuente oficial del sitio y comprueba que la cita guardada sigue en el texto.

Uso : python3 scripts/verificar_fuentes.py [--salida research/verificacion.json]

Lee las URL de src/data/params-2026.json (sources), src/data/zbe/*.json (fuentes, ordenanza) y
src/data/ivtm-2026.json (fuentes, ordenanza). Para cada una : código HTTP, huella SHA-256 del
documento y, si la entrada lleva « cita », si esa frase sigue en el texto (HTML sin etiquetas o
PDF extraído con pypdf cuando está instalado). Una huella distinta de la última ejecución indica
que el ayuntamiento ha cambiado la página : hay que releerla (RECETTE §17.4, §22).

Código de salida 1 si una cita ya no aparece en una página que sí responde. Las páginas que
rechazan la descarga automática (403, CAPTCHA, servidor caído) se anotan como « bloqueada » sin
fallar : se comprueban a mano en un navegador.
"""
import glob, hashlib, html, io, json, os, re, sys, urllib.request, datetime

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36"


def entradas():
    p = json.load(open(os.path.join(RAIZ, "src/data/params-2026.json")))
    for k, s in p["sources"].items():
        yield {"origen": f"params:{k}", "url": s["url"], "cita": s.get("cita")}
    for f in sorted(glob.glob(os.path.join(RAIZ, "src/data/zbe/*.json"))):
        c = json.load(open(f))
        for s in c.get("fuentes", []):
            yield {"origen": f"zbe:{c['slug']}", "url": s["url"], "cita": s.get("cita")}
        if c.get("ordenanza"):
            yield {"origen": f"zbe:{c['slug']}:ordenanza", "url": c["ordenanza"]["url"], "cita": None}
    iv = json.load(open(os.path.join(RAIZ, "src/data/ivtm-2026.json")))
    for m in iv["municipios"]:
        for s in m.get("fuentes", []):
            yield {"origen": f"ivtm:{m['slug']}", "url": s["url"], "cita": s.get("cita")}


def texto(data: bytes) -> str:
    if data[:4] == b"%PDF":
        try:
            import pypdf  # type: ignore
            r = pypdf.PdfReader(io.BytesIO(data))
            return "\n".join((pg.extract_text() or "") for pg in r.pages)
        except Exception:
            return ""
    s = data.decode("utf-8", "ignore")
    s = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", s)
    s = re.sub(r"(?s)<[^>]+>", " ", s)
    return html.unescape(s)


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.replace("\xa0", " ")).strip().lower()


def main():
    salida = os.path.join(RAIZ, "research", "verificacion-fuentes.json")
    if "--salida" in sys.argv:
        salida = sys.argv[sys.argv.index("--salida") + 1]
    anterior = {}
    if os.path.exists(salida):
        anterior = {r["url"]: r for r in json.load(open(salida)).get("resultados", [])}
    manual = {}
    pm = os.path.join(RAIZ, "research", "verificacion-manual.json")
    if os.path.exists(pm):  # fuentes que rechazan al robot, releídas a mano (fecha, método, URL leída)
        manual = {x["url"]: x for x in json.load(open(pm))["entradas"] if x.get("resultado") != "retirada"}
    vistos, res, fallos = {}, [], 0
    for e in entradas():
        u = e["url"]
        if u not in vistos:
            try:
                req = urllib.request.Request(u, headers={"User-Agent": UA, "Accept-Language": "es-ES,es;q=0.9"})
                with urllib.request.urlopen(req, timeout=40) as r:
                    data = r.read(); code = r.status
            except urllib.error.HTTPError as err:
                data, code = b"", err.code
            except Exception:
                data, code = b"", 0
            vistos[u] = (code, data, norm(texto(data)) if data else "")
        code, data, txt = vistos[u]
        r = {"origen": e["origen"], "url": u, "http": code, "sha256": hashlib.sha256(data).hexdigest() if data else None}
        if (code != 200 or not data) and u in manual:
            m = manual[u]
            r["estado"] = "verificada_a_mano"; r["manual"] = {k: m.get(k) for k in ("fecha", "metodo", "url_leida", "resultado")}
        elif code != 200 or not data:
            r["estado"] = "bloqueada"
        elif e["cita"]:
            ok = norm(e["cita"]) in txt
            r["cita"] = e["cita"]; r["estado"] = "ok" if ok else "cita_ausente"
            if not ok and txt:
                fallos += 1
        else:
            r["estado"] = "ok"
        prev = anterior.get(u)
        r["cambiada"] = bool(prev and prev.get("sha256") and r["sha256"] and prev["sha256"] != r["sha256"])
        res.append(r)
    os.makedirs(os.path.dirname(salida), exist_ok=True)
    json.dump({"fecha": datetime.date.today().isoformat(), "resultados": res}, open(salida, "w"), ensure_ascii=False, indent=1)
    n = {k: sum(1 for x in res if x["estado"] == k) for k in ("ok", "bloqueada", "verificada_a_mano", "cita_ausente")}
    print(f"{len(res)} fuentes · {n['ok']} ok · {n['verificada_a_mano']} verificadas a mano · {n['bloqueada']} bloqueadas para el robot · {n['cita_ausente']} cita ausente · {sum(1 for x in res if x['cambiada'])} cambiadas desde la última vez")
    for x in res:
        if x["estado"] != "ok" or x["cambiada"]:
            print(f"  {x['estado']:<13} {'CAMBIADA ' if x['cambiada'] else ''}{x['origen']}  {x['url'][:110]}")
    sys.exit(1 if fallos else 0)


if __name__ == "__main__":
    main()
