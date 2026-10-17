/** Enlaces internos que reciben los simuladores (páginas de ciudad, de etiqueta y de IVTM existentes). */
import { route, type Locale } from '../i18n/routes';
import { TODAS } from './pages';
import { hrefDe } from './href';
export function enlaces(lang: Locale) {
  const ciudadHrefs: Record<string, string> = {}, ivtmHrefs: Record<string, string> = {}, etiquetaHrefs: Record<string, string> = {};
  for (const p of TODAS) {
    if (p.ciudad && p.tool === 'zbe') { const u = hrefDe(p.id, lang); if (u) ciudadHrefs[p.ciudad] = u; }
    if (p.municipio) { const u = hrefDe(p.id, lang); if (u) ivtmHrefs[p.municipio] = u; }
    if (p.agrupadaEn) continue;
    const e = p.toolPreset?.etiqueta; if (typeof e === 'string') etiquetaHrefs[e] = route(p.id, lang);
  }
  return { ciudadHrefs, ivtmHrefs, etiquetaHrefs };
}
