import { definePage } from '../../lib/page-types';
import { N_CIUDADES, HOY_DATOS } from '../../lib/resumen-ciudades';
import { CIUDADES, calendario } from '../../lib/engine/zbe';
import { ETIQUETA_CORTA, usuarioTexto } from '../../lib/textos';

/** Cambios de ordenanza con fecha en 2027 (y el 31/12/2026 que abre el año), leídos de src/data/zbe. */
const cambios = CIUDADES.flatMap((c) => calendario(c, '2026-12-30').filter((x) => x.fecha <= '2027-12-31').map((x) => ({ c, ...x })))
  .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.c.nombre.localeCompare(b.c.nombre, 'es'));
const despues = CIUDADES.filter((c) => calendario(c, '2027-12-31').some((x) => x.fecha.startsWith('2028')));
const ciudades2027 = [...new Set(cambios.map((x) => x.c.nombre))];
const enlace = (slug: string) => (slug === 'san-sebastian' ? 'zbe-san-sebastian' : `zbe-${slug}`);
type H = { date: (s: string) => string; a: (id: string, t: string) => string; ext: (u: string, t: string) => string };
const filas = (l: 'es' | 'en', h: H) => cambios.map((x) => [
  h.a(enlace(x.c.slug), x.c.nombre),
  h.date(x.fecha),
  ETIQUETA_CORTA[l][x.regla.etiqueta],
  usuarioTexto(x.regla.usuario, x.c.nombre, l),
]);
/** Una ordenanza por ciudad, citada bajo la tabla (la tabla queda en cuatro columnas legibles en móvil). */
const fuentes = (h: H) => [...new Map(cambios.filter((x) => x.c.ordenanza).map((x) => [x.c.slug, h.ext(x.c.ordenanza!.url, x.c.nombre)])).values()].join(' · ');
const lista = (n: string[], y: string) => (n.length < 2 ? n.join('') : `${n.slice(0, -1).join(', ')} ${y} ${n[n.length - 1]}`);

export default definePage({
  id: 'zbe-2027', group: 'zbe', order: 1, tool: 'zbe',
  related: ['zonas-bajas-emisiones', 'etiqueta-b', 'sin-etiqueta', 'zbe-palma'], sources: ['ley7_2021', 'rd1052_2022', 'lsv'],
  es: {
    slug: 'zbe-2027', nav: 'ZBE 2027: lo que cambia', card: 'Calendario de 2027 ciudad por ciudad',
    title: 'ZBE 2027: qué etiquetas pierden el acceso y en qué ciudades',
    description: `ZBE 2027: las fechas que ya fijan las ordenanzas de ${ciudades2027.length} ciudades (Palma, València, Tarragona, Burgos…), qué etiqueta deja de entrar y para quién. Con fuentes.`,
    h1: 'ZBE 2027: lo que cambia en cada zona de bajas emisiones',
    intro: 'Las ZBE de 2027 ya están escritas en las ordenanzas: elige ciudad, etiqueta y, en «Más opciones», una fecha de 2027 para ver si tu coche podrá entrar.',
    resume: (h) => `En 2027 cambian las reglas de ${ciudades2027.length} de las ${N_CIUDADES} zonas de bajas emisiones revisadas en esta web, según las ordenanzas publicadas en los boletines oficiales y comprobadas el ${h.date(HOY_DATOS)}. El cambio más amplio es el de Palma, que deja fuera de su ZBE del centro a todos los vehículos con etiqueta B desde el 1 de enero de 2027. Ese mismo día València extiende la prohibición de los coches sin etiqueta a los registrados en otros municipios de la provincia, y Tarragona a los domiciliados en la ciudad. Durante el año llegan Burgos (6 de agosto, fin de la moratoria para los coches sin etiqueta de quien no reside en la zona), Vitoria-Gasteiz (15 de septiembre, residentes sin etiqueta) y, el 31 de diciembre, Valladolid con la etiqueta B y el anillo exterior de Oviedo con los coches sin etiqueta. Ninguna ordenanza fija para 2027 un cambio para la etiqueta C, la ECO o la 0. Circular sin permiso sigue siendo infracción grave del artículo 76.z3 de la Ley de Tráfico.`,
    faqs: (h) => [
      { q: '¿Mi coche con etiqueta B podrá entrar en Palma en 2027?', a: 'No en la ZBE del centro: desde el 1 de enero de 2027 la ordenanza prohíbe la B a todos los vehículos, vecinos incluidos, salvo las excepciones de la ordenanza, como el acompañamiento de menores a las escuelas de la zona o las matrículas extranjeras que cumplen la norma Euro del periodo. La C seguirá entrando hasta el 31 de diciembre de 2029.' },
      { q: '¿Las fechas de 2027 pueden cambiar todavía?', a: `Sí. Son las que fijan hoy las ordenanzas, pero un ayuntamiento puede aprobar una modificación o una moratoria, como hizo València tras la DANA, y una sentencia puede anular una zona, como ocurrió en Madrid en 2024. Revisamos cada ordenanza en su boletín oficial y anotamos la fecha de la comprobación; la última, el ${h.date(HOY_DATOS)}.` },
      { q: '¿Cambia algo para la etiqueta C en 2027?', a: `No. Ninguna de las ${N_CIUDADES} ordenanzas revisadas fija una fecha para la C en 2027. Donde la C ya está limitada, en centros históricos de acceso restringido como los de A Coruña, Córdoba o León, o en el Distrito Centro de Madrid, la regla es anterior. Las próximas fechas nuevas para la C son el 1 de enero de 2030 en Palma y en Valladolid. En 2027 el endurecimiento afecta a los coches sin etiqueta y, en Palma y Valladolid, a la B.` },
    ],
    body: (h) => `
<h2>ZBE 2027: calendario de cambios, ciudad por ciudad</h2>
<p>Cada fila es una fecha que ya figura en una ordenanza publicada: hasta ese día, la etiqueta indicada sigue entrando en 2026 para ese grupo de conductores. Los vecinos domiciliados o residentes en la zona conservan casi siempre más plazo: la página de cada ciudad da su fecha.</p>
${h.table(['Ciudad', 'Desde', 'Etiqueta', 'Para quién'], filas('es', h))}
<p>Ordenanzas citadas: ${fuentes(h)}.</p>
<h2>Cómo leer las fechas de 2027</h2>
<p>Una fecha de ordenanza no es una fecha de multa en todas partes. En Burgos el 6 de agosto de 2027 termina la moratoria que deja circular sin sanción a los coches sin etiqueta; en Oviedo la ordenanza pone el 31 de diciembre de 2027 para el anillo exterior, mientras la web municipal habla del 1 de enero de 2028. El simulador aplica la fecha de la ordenanza: si eliges un día de 2027 en «Más opciones», ves la respuesta de ese día para tu etiqueta y tu domicilio.</p>
<p>Las ordenanzas también distinguen a quién afecta cada paso. En València la regla depende del municipio donde está registrado el coche, en Tarragona del domicilio y del sector en que vive el titular, y en Vitoria-Gasteiz del empadronamiento dentro de la zona. Por eso la misma etiqueta puede entrar un año más para un vecino que para un visitante.</p>
<h2>Y después: lo que ya está fijado para 2028</h2>
<p>El 1 de enero de 2028 llegan nuevos pasos en ${lista(despues.map((c) => h.a(enlace(c.slug), c.nombre)), 'y')}. Para la etiqueta B, la página ${h.a('etiqueta-b', 'etiqueta B')} da el calendario completo; para los coches sin distintivo, ${h.a('sin-etiqueta', 'coche sin etiqueta')}.</p>`,
  },
  en: {
    slug: 'zbe-2027', nav: 'ZBE 2027: what changes', card: '2027 timetable, city by city',
    title: 'ZBE 2027 in Spain: Which Labels Lose Access, City by City',
    description: `ZBE 2027 in Spain: the dates already set in the byelaws of ${ciudades2027.length} cities (Palma, València, Tarragona, Burgos…), which label is shut out and for whom. Sourced.`,
    h1: 'ZBE 2027: what changes in each Spanish low-emission zone',
    intro: 'The 2027 ZBE rules are already in the byelaws: pick a city and your label, then a 2027 date under “More options” to see whether your car can still drive in.',
    resume: (h) => `In 2027 the rules change in ${ciudades2027.length} of the ${N_CIUDADES} low-emission zones covered here, according to the byelaws published in the official gazettes and checked on ${h.date(HOY_DATOS)}. The widest change is in Palma, which bars every B-label vehicle from its central zone from 1 January 2027. On the same day València extends its ban on unlabelled cars to those registered elsewhere in the province, and Tarragona to those registered in the city itself. Later in the year come Burgos (6 August, end of the grace period for unlabelled cars of non-residents of the zone), Vitoria-Gasteiz (15 September, unlabelled cars of residents) and, on 31 December, Valladolid for the B label and Oviedo’s outer ring for unlabelled cars. No byelaw sets a 2027 change for the C, ECO or zero-emission labels. Driving in without permission remains a serious offence under article 76.z3 of the Traffic Act.`,
    faqs: (h) => [
      { q: 'Can my B-label car still enter Palma in 2027?', a: 'Not the central zone: from 1 January 2027 the byelaw bars the B label for all vehicles, residents included, except for the byelaw’s exemptions, such as taking children to schools inside the zone or foreign plates that meet the Euro standard of the period. The C label keeps access until 31 December 2029.' },
      { q: 'Can the 2027 dates still change?', a: `Yes. They are the dates in today’s byelaws, but a council can pass an amendment or a grace period, as València did after the 2024 floods, and a court can strike a zone down, as happened in Madrid in 2024. We check each byelaw in its official gazette and record the date; the latest check was on ${h.date(HOY_DATOS)}.` },
      { q: 'Does anything change for the C label in 2027?', a: `No. None of the ${N_CIUDADES} byelaws reviewed sets a C-label date in 2027. Where the C is already limited, in restricted-access old towns such as A Coruña, Córdoba or León, or in Madrid’s Centro district, the rule predates 2027. The next new C-label dates are 1 January 2030 in Palma and Valladolid. In 2027 the tightening hits unlabelled cars and, in Palma and Valladolid, the B label.` },
    ],
    body: (h) => `
<h2>ZBE 2027 timetable, city by city</h2>
<p>Each row is a date already written into a published byelaw: until that day, the label shown still gets in during 2026 for that group of drivers. Residents registered in the city or living inside the zone almost always get longer: each city page gives their date.</p>
${h.table(['City', 'From', 'Label', 'Who'], filas('en', h))}
<p>Byelaws cited: ${fuentes(h)}.</p>
<h2>Reading the 2027 dates</h2>
<p>A byelaw date is not a fine date everywhere. In Burgos, 6 August 2027 ends the grace period during which unlabelled cars drive in without a penalty; in Oviedo the byelaw sets 31 December 2027 for the outer ring, while the council website speaks of 1 January 2028. The tool applies the byelaw date: choose a 2027 day under “More options” and you get the answer for that day, your label and where your car is registered.</p>
<p>Byelaws also split each step by who it affects. In València it depends on the municipality where the car is registered, in Tarragona on the owner’s address and the sector they live in, and in Vitoria-Gasteiz on whether the owner is registered as living inside the zone. So the same label can get a year more for a resident than for a visitor.</p>
<h2>Next: what is already set for 2028</h2>
<p>On 1 January 2028 further steps start in ${lista(despues.map((c) => h.a(enlace(c.slug), c.nombre)), 'and')}. For the B label, the ${h.a('etiqueta-b', 'B label')} page has the full timetable; for cars with no sticker, see ${h.a('sin-etiqueta', 'car without a label')}.</p>`,
  },
});
