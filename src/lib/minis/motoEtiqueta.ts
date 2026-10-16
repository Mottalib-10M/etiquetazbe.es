/** Étiquette d'une moto ou d'un cyclomoteur par la norme Euro (DGT, catégorie L). */
import { etiquetaDe } from '../engine/etiqueta';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'Etiqueta de tu moto', 'Your motorbike’s label'), cta: T(l, 'Ver la ZBE de tu ciudad', 'See your city’s ZBE'),
  inputs: [{ id: 't', label: T(l, 'Vehículo', 'Vehicle'), def: 0, options: [{ value: '0', label: T(l, 'Moto', 'Motorbike') }, { value: '1', label: T(l, 'Ciclomotor (50 cc)', 'Moped (50 cc)') }] }, { id: 'e', label: T(l, 'Norma Euro', 'Euro standard'), def: 3, options: [0, 1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: n ? `Euro ${n}` : T(l, 'No la sé', 'Not sure') })) }, { id: 'a', label: T(l, 'Año de matriculación', 'Year registered'), def: 2008, max: 2026, anio: true }],
  run: (v) => {
    const r = etiquetaDe({ categoria: v.t ? 'ciclomotor' : 'moto', energia: 'gasolina', euro: v.e, matriculacion: `${Math.round(v.a) || 2008}-06` });
    return { head: [T(l, 'Etiqueta', 'Label'), ETIQUETA_NOMBRE[l][r.etiqueta]], rows: [[T(l, 'Base', 'Based on'), r.base === 'euro' ? T(l, 'norma Euro', 'Euro standard') : T(l, 'fecha de matriculación', 'registration date')], [T(l, '¿Resultado seguro?', 'Result certain?'), r.dudoso ? T(l, `no: posible ${ETIQUETA_NOMBRE.es[r.alternativa!].toLowerCase()}`, `no: ${ETIQUETA_NOMBRE.en[r.alternativa!]} possible`) : T(l, 'sí', 'yes')]], note: T(l, 'Fechas de obligatoriedad de cada norma Euro (Directiva 2002/51/CE, Reglamento UE 168/2013). La ficha técnica manda.', 'Dates each Euro standard became compulsory (Directive 2002/51/EC, Regulation (EU) 168/2013). The technical card overrides them.') };
  },
});
