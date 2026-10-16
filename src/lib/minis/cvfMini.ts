/** Caballos fiscales (anexo V RGV) et tranche de l'article 95. */
import { cvfCombustion, tramo, TRAMOS_ESTADO } from '../engine/ivtm';
import { P } from '../engine/params';
import { T, eur, num, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'Caballos fiscales de tu motor', 'Your engine’s fiscal horsepower'), cta: T(l, 'Calcular el IVTM de tu municipio', 'Work out your town’s road tax'),
  inputs: [{ id: 'cc', label: T(l, 'Cilindrada', 'Engine size'), def: 1598, unit: 'cc', max: 10000 }, { id: 'n', label: T(l, 'Cilindros', 'Cylinders'), def: 4, max: 16 }],
  run: (v) => {
    const c = cvfCombustion(v.cc, Math.max(1, Math.round(v.n)));
    const t = tramo(TRAMOS_ESTADO, c).tramo;
    return { head: [T(l, 'Caballos fiscales', 'Fiscal horsepower'), num(c, l, 2)], rows: [[T(l, 'Cuota mínima art. 95', 'Section 95 minimum'), eur(t.cuota, l)], [T(l, 'Máximo legal (×2)', 'Legal maximum (×2)'), eur(t.cuota * P.ivtm_art95.coeficiente_maximo, l)]], note: T(l, 'Fórmula de cuatro tiempos: 0,08 × (cc por cilindro)^0,6 × cilindros.', 'Four-stroke formula: 0.08 × (cc per cylinder)^0.6 × cylinders.') };
  },
});
