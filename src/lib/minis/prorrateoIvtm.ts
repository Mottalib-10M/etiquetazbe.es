/** Prorrateo trimestral del IVTM en el alta o la baja definitiva (art. 96.3 TRLHL). */
import { prorrateo } from '../engine/ivtm';
import { T, eur, mesOpt, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'IVTM del año en que compras o das de baja', 'Road tax in the year you buy or scrap'), cta: T(l, 'Calcular la cuota anual', 'Work out the annual amount'),
  inputs: [{ id: 'c', label: T(l, 'Cuota anual', 'Annual amount'), def: 59, unit: '€', max: 2000, decimals: 2 }, { id: 'm', label: T(l, 'Mes', 'Month'), def: 5, options: mesOpt(l) }, { id: 't', label: T(l, 'Situación', 'Situation'), def: 0, options: [{ value: '0', label: T(l, 'Primera matriculación', 'First registration') }, { value: '1', label: T(l, 'Baja definitiva o robo', 'Scrapped or stolen') }] }],
  run: (v) => {
    const r = prorrateo(v.c, Math.round(v.m) || 1, v.t ? 'baja' : 'alta');
    return { head: [T(l, 'A pagar ese año', 'Due that year'), eur(r, l)], rows: [[T(l, 'Trimestres pagados', 'Quarters paid'), String(Math.round((r / Math.max(0.01, v.c)) * 4))], [T(l, 'Ahorro frente a la cuota entera', 'Saving against the full amount'), eur(v.c - r, l)]], note: T(l, 'Una venta entre particulares no se prorratea: paga el titular a 1 de enero.', 'A private sale is not pro-rated: the owner on 1 January pays.') };
  },
});
