/** Para un visitante con una etiqueta : en cuántas de las ZBE entra libremente hoy y en qué fecha. */
import { CIUDADES, etiquetasRestringidas } from '../engine/zbe';
import { ETIQUETA_NOMBRE } from '../textos';
import { T, HOY, fecha, type L } from './_kit';
import type { Etiqueta } from '../engine/etiqueta';
import type { MiniSpec } from '../mini-types';
const E: Etiqueta[] = ['0', 'ECO', 'C', 'B', 'A'];
export default (l: L): MiniSpec => ({
  title: T(l, '¿Cuántas ZBE puedes cruzar con tu etiqueta?', 'How many ZBEs can you drive into with your label?'), cta: T(l, 'Ver el detalle ciudad por ciudad', 'See the city-by-city detail'),
  inputs: [{ id: 'e', label: T(l, 'Etiqueta', 'Label'), def: 3, options: E.map((e, i) => ({ value: String(i), label: ETIQUETA_NOMBRE[l][e] })) }, { id: 'y', label: T(l, 'Año', 'Year'), def: 2026, options: [2026, 2027, 2028, 2030].map((y) => ({ value: String(y), label: String(y) })) }],
  run: (v) => {
    const e = E[v.e] ?? 'B';
    const d = v.y === 2026 ? HOY : `${v.y}-06-01`;
    const no = CIUDADES.filter((c) => etiquetasRestringidas(c, d).includes(e));
    return { head: [T(l, 'Entras libremente en', 'Free access to'), `${CIUDADES.length - no.length} / ${CIUDADES.length}`], rows: [[T(l, 'Fecha de referencia', 'Reference date'), fecha(d, l)], [T(l, 'Con restricción', 'Restricted'), no.map((c) => c.nombre).join(', ') || '—']], note: T(l, 'Perfil: vehículo domiciliado fuera de la ciudad, sin residencia en la zona.', 'Profile: vehicle registered outside the city, not living in the zone.') };
  },
});
