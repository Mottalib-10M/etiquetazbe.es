/** Amende ZBE : 200 € (art. 80 LSV), −50 % en 20 jours (art. 94), jusqu'à +30 % de graduation (art. 81). */
import { P } from '../engine/params';
import { multa } from '../engine/zbe';
import { T, eur, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, '¿Cuánto pagas por una multa de ZBE?', 'How much is a ZBE fine?'), cta: T(l, 'Ver si tu coche puede entrar', 'Check whether your car can enter'),
  inputs: [{ id: 'n', label: T(l, 'Multas recibidas', 'Fines received'), def: 1, max: 50 }, { id: 'p', label: T(l, '¿Pagas en 20 días?', 'Pay within 20 days?'), def: 1, options: [{ value: '1', label: T(l, 'Sí, pronto pago', 'Yes, early payment') }, { value: '0', label: T(l, 'No', 'No') }] }, { id: 'g', label: T(l, 'Agravante', 'Aggravation'), def: 0, options: [{ value: '0', label: T(l, 'Ninguno', 'None') }, { value: '1', label: T(l, 'Episodio de contaminación (+30 %)', 'Pollution episode (+30%)') }] }],
  run: (v) => {
    const base = P.multa.zbe_grave * (1 + (v.g ? P.multa.incremento_max_graduacion : 0));
    const una = multa(base, v.p === 1, P.multa.reduccion_pronto_pago);
    const n = Math.max(1, Math.round(v.n));
    return { head: [T(l, 'Total a pagar', 'Total to pay'), eur(una * n, l)], rows: [[T(l, 'Por multa', 'Per fine'), eur(una, l)], [T(l, 'Sin pronto pago', 'Without early payment'), eur(base * n, l)], [T(l, 'Puntos del carné', 'Licence points'), '0']], note: T(l, 'Cada día que una cámara te detecta puede generar una denuncia distinta.', 'Each day a camera catches you can produce a separate fine.') };
  },
});
