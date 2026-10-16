/** Enlaces internos que reciben los simuladores (páginas de ciudad, de etiqueta y de IVTM existentes). */
import { route, type Locale } from '../i18n/routes';
import { PAGES } from './pages';
export function enlaces(lang: Locale) {
  const ciudadHrefs: Record<string, string> = {}, ivtmHrefs: Record<string, string> = {}, etiquetaHrefs: Record<string, string> = {};
  for (const p of PAGES) {
    if (p.ciudad && p.tool === 'zbe') ciudadHrefs[p.ciudad] = route(p.id, lang);
    if (p.municipio) ivtmHrefs[p.municipio] = route(p.id, lang);
    const e = p.toolPreset?.etiqueta; if (typeof e === 'string') etiquetaHrefs[e] = route(p.id, lang);
  }
  return { ciudadHrefs, ivtmHrefs, etiquetaHrefs };
}
