/** Étiquette d'une moto ou d'un cyclomoteur par la norme Euro (DGT, catégorie L). */
import { etiquetaDe } from '../engine/etiqueta';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'Etiqueta de tu moto', 'Your motorbike’s label'), cta: T(l, 'Ver la ZBE de tu ciudad', 'See your city’s ZBE'),
  inputs: [{ id: 'e', label: T(l, 'Norma Euro', 'Euro standard'), def: 3, options: [0, 1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: n ? `Euro ${n}` : T(l, 'No la sé', 'Not sure') })) }, { id: 'a', label: T(l, 'Año de matriculación', 'Year registered'), def: 2008, max: 2026 }],
  run: (v) => {
    const r = etiquetaDe({ categoria: 'moto', energia: 'gasolina', euro: v.e, matriculacion: `${Math.round(v.a) || 2008}-06` });
    return { head: [T(l, 'Etiqueta', 'Label'), ETIQUETA_NOMBRE[l][r.etiqueta]], rows: [[T(l, 'Base', 'Based on'), r.base === 'euro' ? T(l, 'norma Euro', 'Euro standard') : T(l, 'fecha, orientativa', 'date, indicative only')]], note: T(l, 'La DGT no publica fechas para motos: la norma Euro decide.', 'The DGT publishes no dates for motorbikes: the Euro standard decides.') };
  },
});
