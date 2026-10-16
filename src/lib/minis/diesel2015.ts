/** Diésel : B ou C selon le mois de 2014-2015 (Euro 6 homologué en 09/2014, obligatoire en 09/2015). */
import { etiquetaDe } from '../engine/etiqueta';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, mesOpt, ym, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'Diésel de 2014 o 2015: ¿B o C?', '2014 or 2015 diesel: B or C?'), cta: T(l, 'Comprobar con la norma Euro', 'Check with the Euro standard'),
  inputs: [{ id: 'a', label: T(l, 'Año', 'Year'), def: 2015, max: 2026, anio: true }, { id: 'm', label: T(l, 'Mes', 'Month'), def: 3, options: mesOpt(l) }, { id: 'e', label: T(l, 'Norma Euro (V.9)', 'Euro standard (V.9)'), def: 0, options: [{ value: '0', label: T(l, 'No la sé', 'Not sure') }, { value: '5', label: 'Euro 5' }, { value: '6', label: 'Euro 6' }] }],
  run: (v) => {
    const r = etiquetaDe({ categoria: 'turismo', energia: 'diesel', euro: v.e, matriculacion: ym(v.a, v.m) });
    return { head: [T(l, 'Etiqueta', 'Label'), ETIQUETA_NOMBRE[l][r.etiqueta]], rows: [[T(l, 'Base', 'Based on'), r.base === 'euro' ? T(l, 'norma Euro', 'Euro standard') : T(l, 'fecha', 'date')], [T(l, 'Resultado seguro', 'Result certain'), r.dudoso ? T(l, 'no: mira la casilla V.9', 'no: look at box V.9') : T(l, 'sí', 'yes')]] };
  },
});
