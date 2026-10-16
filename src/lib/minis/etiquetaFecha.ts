/** Étiquette DGT d'un turismo selon le motor et l'année : le calcul du moteur etiquetaDe. */
import { etiquetaDe } from '../engine/etiqueta';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, energiaOpt, ENERGIAS, ym, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, '¿Qué etiqueta tiene tu coche?', 'Which label does your car get?'), cta: T(l, 'Etiqueta y ZBE de tu ciudad', 'Label and ZBE for your city'),
  inputs: [{ id: 'e', label: T(l, 'Motor', 'Engine'), def: 1, options: energiaOpt(l) }, { id: 'a', label: T(l, 'Año de matriculación', 'Year registered'), def: 2012, max: 2026 }],
  run: (v) => {
    const r = etiquetaDe({ categoria: 'turismo', energia: ENERGIAS[v.e] ?? 'gasolina', matriculacion: ym(v.a, 6) });
    return { head: [T(l, 'Etiqueta según la DGT', 'Label under DGT rules'), ETIQUETA_NOMBRE[l][r.etiqueta]], rows: [[T(l, 'Criterio aplicado', 'Rule applied'), r.base === 'fecha' ? T(l, 'fecha de matriculación', 'registration date') : T(l, 'tecnología del motor', 'engine technology')], [T(l, '¿Fecha de transición?', 'Changeover date?'), r.dudoso ? T(l, `sí: posible ${ETIQUETA_NOMBRE.es[r.alternativa!].toLowerCase()}`, `yes: ${ETIQUETA_NOMBRE.en[r.alternativa!]} possible`) : T(l, 'no', 'no')]], note: T(l, 'Calculado a mitad de año. La norma Euro de la ficha técnica (V.9) manda sobre la fecha.', 'Worked out for mid-year. The Euro standard on the technical card (V.9) overrides the date.') };
  },
});
