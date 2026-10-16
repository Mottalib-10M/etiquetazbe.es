/** Coche extranjero o de alquiler : étiquette équivalente par la norme Euro et villes qui exigent un registre. */
import { etiquetaDe } from '../engine/etiqueta';
import { CIUDADES, etiquetasRestringidas } from '../engine/zbe';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, HOY, type L } from './_kit';
import type { MiniSpec } from '../mini-types';
export default (l: L): MiniSpec => ({
  title: T(l, 'Coche con matrícula extranjera: ¿a qué etiqueta equivale?', 'Foreign-plated car: which label does it match?'), cta: T(l, 'Ver una ciudad concreta', 'Check a specific city'),
  inputs: [{ id: 'f', label: T(l, 'Combustible', 'Fuel'), def: 1, options: [{ value: '0', label: T(l, 'Gasolina', 'Petrol') }, { value: '1', label: T(l, 'Diésel', 'Diesel') }] }, { id: 'e', label: T(l, 'Norma Euro', 'Euro standard'), def: 5, options: [1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: `Euro ${n}` })) }],
  run: (v) => {
    const r = etiquetaDe({ categoria: 'turismo', energia: v.f ? 'diesel' : 'gasolina', euro: v.e, matriculacion: '2010-01' });
    const no = CIUDADES.filter((c) => etiquetasRestringidas(c, HOY).includes(r.etiqueta));
    return { head: [T(l, 'Equivale a', 'Equivalent to'), ETIQUETA_NOMBRE[l][r.etiqueta]], rows: [[T(l, 'Ciudades con restricción', 'Cities with restrictions'), `${no.length} / ${CIUDADES.length}`], [T(l, 'Ejemplos', 'Examples'), no.slice(0, 3).map((c) => c.nombre).join(', ') || '—']], note: T(l, 'Barcelona, Donostia o Palma piden inscribir el vehículo extranjero aunque cumpla.', 'Barcelona, Donostia or Palma require foreign vehicles to register even if compliant.') };
  },
});
