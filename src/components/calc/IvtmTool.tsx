/**
 * Impuesto de circulación (IVTM) 2026 : cuota de la ordenanza fiscal del municipio (o horquilla del artículo 95
 * TRLHL), bonificación por etiqueta o tecnología, prorrateo por trimestres en el año de alta, y caballos
 * fiscales calculados desde la cilindrada o la potencia eléctrica si no se conocen (anexo V RGV).
 */
import { useEffect, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { MUNICIPIOS, municipio as getMunicipio, cuotaTurismo, cvfCombustion, cvfElectrico, prorrateo, tramo, TRAMOS_ESTADO } from '../../lib/engine/ivtm';
import type { Etiqueta } from '../../lib/engine/etiqueta';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import { ETIQUETA_NOMBRE, MESES } from '../../lib/textos';
import { Filas, Pasos, Acciones, Cabecera, Aviso, caja, marco, rejilla, tx, fm, type L } from './kit';

declare const __BUILD_DAY__: string;
interface Props { lang?: L; methodHref?: string; preset?: { municipio?: string; modo?: string }; municipioHrefs?: Record<string, string> }
type Modo = 'cvf' | 'cc' | 'kw';
type Tec = 'combustion' | 'hibrido' | 'hibrido_diesel' | 'electrico' | 'gas';

export default function IvtmTool({ lang = 'es', methodHref, preset = {}, municipioHrefs = {} }: Props) {
  const f = fm(lang);
  const [mu, setMu] = useState(preset.municipio ?? 'madrid');
  const [modo, setModo] = useState<Modo>((preset.modo as Modo) ?? 'cvf');
  const [cvfIn, setCvfIn] = useState(11.5);
  const [cc, setCc] = useState(1598);
  const [cil, setCil] = useState(4);
  const [kw, setKw] = useState(100);
  const [tec, setTec] = useState<Tec>('combustion');
  const [et, setEt] = useState<Etiqueta>('C');
  const [anio, setAnio] = useState(2020);
  const [alta, setAlta] = useState('0');
  const [mes, setMes] = useState('6');
  const [hoy, setHoy] = useState(__BUILD_DAY__);
  useEffect(() => {
    setHoy(new Date().toISOString().slice(0, 10));
    const u = readParams(window.location.search); if (![...u.keys()].length) return;
    if (!preset.municipio) setMu(str(u, 'mu', mu)); setModo(str(u, 'mo', modo) as Modo); setCvfIn(num(u, 'cv', 11.5)); setCc(num(u, 'cc', 1598)); setCil(num(u, 'ci', 4)); setKw(num(u, 'kw', 100));
    setTec(str(u, 't', 'combustion') as Tec); setEt(str(u, 'et', 'C') as Etiqueta); setAnio(num(u, 'a', 2020)); setAlta(str(u, 'al', '0')); setMes(str(u, 'mm', '6'));
  }, []);
  useEffect(() => { updateURL({ ...(preset.municipio ? {} : { mu }), mo: modo, cv: modo === 'cvf' ? cvfIn : undefined, cc: modo === 'cc' ? cc : undefined, ci: modo === 'cc' ? cil : undefined, kw: modo === 'kw' ? kw : undefined, t: tec, et, a: anio, al: alta, mm: alta === '1' ? mes : undefined }); }, [mu, modo, cvfIn, cc, cil, kw, tec, et, anio, alta, mes]);

  const cvf = modo === 'cvf' ? cvfIn : modo === 'cc' ? cvfCombustion(cc, Math.max(1, Math.round(cil))) : cvfElectrico(kw);
  const otro = mu === 'otro';
  const m = otro ? undefined : getMunicipio(mu);
  const edad = Math.max(0, Number(hoy.slice(0, 4)) - Math.round(anio));
  const r = cuotaTurismo({ municipio: m?.slug, cvf, etiqueta: et, tecnologia: tec === 'hibrido_diesel' ? 'hibrido' : tec, diesel: tec === 'hibrido_diesel', antiguedadAnos: edad });
  const anual = otro ? r.minimaEstatal : r.cuota;
  const pr = alta === '1' ? prorrateo(anual, Number(mes), 'alta') : anual;
  const t = m ? tramo(m.turismos, cvf) : tramo(TRAMOS_ESTADO, cvf);
  const tramoTxt = (() => { const x = t.tramo; return x.hasta === null ? tx(lang, `${f.num(x.desde)} CVF o más`, `${f.num(x.desde)} fiscal hp or more`) : x.desde === 0 ? tx(lang, `menos de ${f.num(x.hasta + 0.01)} CVF`, `under ${f.num(x.hasta + 0.01)} fiscal hp`) : tx(lang, `de ${f.num(x.desde)} a ${f.num(x.hasta, 2)} CVF`, `${f.num(x.desde)} to ${f.num(x.hasta, 2)} fiscal hp`); })();
  const steps = [
    modo === 'cc' ? tx(lang, `Caballos fiscales: 0,08 × (${f.num(cc)} cc ÷ ${Math.round(cil)} cilindros)^0,6 × ${Math.round(cil)} = ${f.num(cvf, 2)} (anexo V del RGV, motor de cuatro tiempos).`, `Fiscal hp: 0.08 × (${f.num(cc)} cc ÷ ${Math.round(cil)} cylinders)^0.6 × ${Math.round(cil)} = ${f.num(cvf, 2)} (annex V RGV, four-stroke engine).`)
      : modo === 'kw' ? tx(lang, `Caballos fiscales de un motor eléctrico: ${f.num(kw)} kW ÷ 5,152 = ${f.num(cvf, 2)} (anexo V del RGV).`, `Fiscal hp of an electric motor: ${f.num(kw)} kW ÷ 5.152 = ${f.num(cvf, 2)} (annex V RGV).`)
        : tx(lang, `Caballos fiscales indicados: ${f.num(cvf, 2)} (casilla P.2.1 de la ficha técnica).`, `Fiscal hp entered: ${f.num(cvf, 2)} (box P.2.1 of the technical card).`),
    m ? tx(lang, `Tramo de turismos ${tramoTxt}: ${f.eur(r.base)} en la ordenanza fiscal 2026 de ${m.nombre} (mínimo estatal ${f.eur(r.minimaEstatal)}).`, `Car band ${tramoTxt}: ${f.eur(r.base)} in ${m.nombre}'s 2026 tax byelaw (national minimum ${f.eur(r.minimaEstatal)}).`)
      : tx(lang, `Tramo ${tramoTxt}: cuota mínima del artículo 95 TRLHL ${f.eur(r.minimaEstatal)}; tu ayuntamiento puede multiplicarla hasta por 2 (${f.eur(r.maxima)}).`, `Band ${tramoTxt}: section 95 minimum ${f.eur(r.minimaEstatal)}; your council may multiply it by up to 2 (${f.eur(r.maxima)}).`),
    ...(r.bonificacion ? [tx(lang, `Bonificación: ${r.bonificacion.nota}.`, `Relief: ${r.bonificacion.nota_en}.`)] : m?.bonificaciones_pendientes ? [tx(lang, 'Bonificaciones de esta ordenanza no incluidas en el cálculo: consúltalas antes de contar con ellas.', 'This byelaw’s relief is not included in the calculation: check it before relying on it.')] : []),
    ...(alta === '1' ? [tx(lang, `Alta en ${MESES.es[Number(mes) - 1]}: se pagan los trimestres que quedan, ${f.eur(pr)} (art. 96.3 TRLHL).`, `Registered in ${MESES.en[Number(mes) - 1]}: you pay the remaining quarters, ${f.eur(pr)} (section 96(3)).`)] : []),
  ];
  const muOpt = [...MUNICIPIOS.map((x) => ({ value: x.slug, label: x.nombre })), { value: 'otro', label: tx(lang, 'Otro municipio (artículo 95)', 'Another town (section 95)') }];
  const etOpt = (['0', 'ECO', 'C', 'B', 'A'] as Etiqueta[]).map((e) => ({ value: e, label: ETIQUETA_NOMBRE[lang][e] }));
  return (
    <div className={marco} data-chrome>
      <div className="esb h-1.5" aria-hidden="true" />
      <div className={rejilla}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {preset.municipio ? <SelectField id="i-t" label={tx(lang, 'Motor', 'Engine')} value={tec} onChange={(x) => setTec(x as Tec)} options={[{ value: 'combustion', label: tx(lang, 'Gasolina o diésel', 'Petrol or diesel') }, { value: 'hibrido', label: tx(lang, 'Híbrido de gasolina (HEV o PHEV)', 'Petrol hybrid (HEV or PHEV)') }, { value: 'hibrido_diesel', label: tx(lang, 'Híbrido diésel', 'Diesel hybrid') }, { value: 'electrico', label: tx(lang, 'Eléctrico', 'Electric') }, { value: 'gas', label: tx(lang, 'GLP o gas natural', 'LPG or natural gas') }]} />
              : <SelectField id="i-mu" label={tx(lang, 'Municipio del permiso de circulación', 'Town on the registration document')} value={mu} onChange={setMu} options={muOpt} />}
            <SelectField id="i-mo" label={tx(lang, 'Potencia fiscal', 'Fiscal horsepower')} value={modo} onChange={(x) => setModo(x as Modo)} options={[{ value: 'cvf', label: tx(lang, 'La sé (casilla P.2.1)', 'I know it (box P.2.1)') }, { value: 'cc', label: tx(lang, 'Calcular por cilindrada', 'Work out from engine size') }, { value: 'kw', label: tx(lang, 'Eléctrico: por kW', 'Electric: from kW') }]} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {modo === 'cvf' && <NumberField id="i-cv" label={tx(lang, 'Caballos fiscales', 'Fiscal horsepower')} value={cvfIn} onChange={setCvfIn} max={99} decimals={2} lang={lang} help={tx(lang, 'No son los CV de potencia del motor', 'Not the engine’s brake horsepower')} />}
            {modo === 'cc' && <NumberField id="i-cc" label={tx(lang, 'Cilindrada', 'Engine size')} value={cc} onChange={setCc} unit="cc" max={10000} lang={lang} />}
            {modo === 'cc' && <NumberField id="i-ci" label={tx(lang, 'Cilindros', 'Cylinders')} value={cil} onChange={setCil} max={16} lang={lang} />}
            {modo === 'kw' && <NumberField id="i-kw" label={tx(lang, 'Potencia efectiva', 'Effective power')} value={kw} onChange={setKw} unit="kW" max={1500} lang={lang} />}
            {modo !== 'cc' && <SelectField id="i-et" label={tx(lang, 'Etiqueta DGT', 'DGT label')} value={et} onChange={(x) => setEt(x as Etiqueta)} options={etOpt} />}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {modo === 'cc' && <SelectField id="i-et" label={tx(lang, 'Etiqueta DGT', 'DGT label')} value={et} onChange={(x) => setEt(x as Etiqueta)} options={etOpt} />}
            {!preset.municipio && <SelectField id="i-t" label={tx(lang, 'Motor', 'Engine')} value={tec} onChange={(x) => setTec(x as Tec)} options={[{ value: 'combustion', label: tx(lang, 'Gasolina o diésel', 'Petrol or diesel') }, { value: 'hibrido', label: tx(lang, 'Híbrido de gasolina (HEV o PHEV)', 'Petrol hybrid (HEV or PHEV)') }, { value: 'hibrido_diesel', label: tx(lang, 'Híbrido diésel', 'Diesel hybrid') }, { value: 'electrico', label: tx(lang, 'Eléctrico', 'Electric') }, { value: 'gas', label: tx(lang, 'GLP o gas natural', 'LPG or natural gas') }]} />}
            <NumberField id="i-a" label={tx(lang, 'Año de matriculación', 'Year registered')} value={anio} onChange={setAnio} min={1950} max={2026} grouping={false} lang={lang} help={tx(lang, 'Para bonificaciones con plazo', 'For time-limited relief')} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <Toggle id="i-al" label={tx(lang, '¿Alta este año?', 'Registered this year?')} value={alta} onChange={setAlta} options={[{ value: '0', label: tx(lang, 'No', 'No') }, { value: '1', label: tx(lang, 'Sí', 'Yes') }]} />
            {alta === '1' ? <SelectField id="i-mm" label={tx(lang, 'Mes del alta', 'Month registered')} value={mes} onChange={setMes} options={MESES[lang].map((x, i) => ({ value: String(i + 1), label: x }))} /> : <span />}
          </div>
        </form>
        <div aria-live="polite" data-resultat className={caja}>
          <Cabecera label={otro ? tx(lang, 'Cuota mínima estatal 2026', '2026 national minimum') : tx(lang, `Impuesto de circulación 2026 en ${m!.nombre}`, `2026 road tax in ${m!.nombre}`)} valor={`${f.eur(pr)}${alta === '1' ? '' : tx(lang, ' / año', ' / year')}`} bajo={otro ? tx(lang, `Tu ayuntamiento puede cobrar hasta ${f.eur(r.maxima)}`, `Your council may charge up to ${f.eur(r.maxima)}`) : `${f.num(cvf, 2)} ${tx(lang, 'caballos fiscales', 'fiscal hp')} · ${tramoTxt}`} />
          <Filas rows={[
            { label: tx(lang, 'Cuota del tramo', 'Band amount'), value: f.eur(otro ? r.minimaEstatal : r.base) },
            ...(r.bonificacion && !otro ? [{ label: tx(lang, `Bonificación (${f.pct(r.pct)})`, `Relief (${f.pct(r.pct)})`), value: `−${f.eur(r.base - r.cuota)}` }] : []),
            { label: tx(lang, 'Cuota anual', 'Annual amount'), value: f.eur(anual), strong: true, sep: true },
            ...(alta === '1' ? [{ label: tx(lang, 'A pagar el año del alta', 'Due in the year of registration'), value: f.eur(pr), strong: true }] : []),
            { label: tx(lang, 'Mínimo y máximo legal (art. 95)', 'Legal minimum and maximum (s. 95)'), value: `${f.eur(r.minimaEstatal)} – ${f.eur(r.maxima)}`, muted: true },
          ]} />
          {m && municipioHrefs[m.slug] && !preset.municipio && <p className="mt-3 text-sm"><a className="font-medium text-accent-700 underline" href={municipioHrefs[m.slug]}>{tx(lang, `Cuadro completo y bonificaciones de ${m.nombre}`, `Full table and relief for ${m.nombre}`)}</a></p>}
          <Pasos lang={lang} steps={steps} />
          <Acciones lang={lang} text={() => tx(lang, `IVTM 2026 ${otro ? '(art. 95)' : m!.nombre}: ${f.eur(anual)} al año con ${f.num(cvf, 2)} CVF`, `IVTM 2026 ${otro ? '(s. 95)' : m!.nombre}: ${f.eur(anual)} a year at ${f.num(cvf, 2)} fiscal hp`)} />
          <Aviso lang={lang} methodHref={methodHref} />
        </div>
      </div>
    </div>
  );
}
