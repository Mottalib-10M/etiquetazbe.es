/** Ahorro de la bonificación del IVTM por etiqueta en cada municipio con ordenanza leída. */
import { MUNICIPIOS, cuotaTurismo } from '../engine/ivtm';
import { T, eur, pct, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
const ok = () => MUNICIPIOS.filter((m) => !m.bonificaciones_pendientes);
export default (l: L): MiniSpec => ({
  title: T(l, '¿Cuánto ahorras con un coche CERO o ECO?', 'How much does a CERO or ECO car save?'), cta: T(l, 'Calcular tu IVTM completo', 'Work out your full road tax'),
  inputs: [{ id: 'mu', label: T(l, 'Municipio', 'Town'), def: 0, options: ok().map((m, i) => ({ value: String(i), label: m.nombre })) }, { id: 'e', label: T(l, 'Etiqueta', 'Label'), def: 0, options: [{ value: '0', label: T(l, '0 emisiones (eléctrico)', 'Zero emissions (electric)') }, { value: '1', label: T(l, 'ECO (híbrido)', 'ECO (hybrid)') }] }, { id: 'cv', label: T(l, 'Caballos fiscales', 'Fiscal hp'), def: 11.5, max: 99, decimals: 2 }],
  run: (v) => {
    const m = ok()[v.mu] ?? ok()[0];
    const cero = v.e === 0;
    const r = cuotaTurismo({ municipio: m.slug, cvf: v.cv, etiqueta: cero ? '0' : 'ECO', tecnologia: cero ? 'electrico' : 'hibrido', antiguedadAnos: 0 });
    return { head: [T(l, `IVTM en ${m.nombre}, primer año`, `${m.nombre} road tax, first year`), eur(r.cuota, l)], rows: [[T(l, 'Sin bonificación', 'Without relief'), eur(r.base, l)], [T(l, 'Bonificación', 'Relief'), r.bonificacion ? pct(r.pct, l) : T(l, 'ninguna', 'none')], [T(l, 'Ahorro al año', 'Saving per year'), eur(r.base - r.cuota, l)]], note: r.bonificacion ? (l === 'en' ? r.bonificacion.nota_en : r.bonificacion.nota) : undefined };
  },
});
