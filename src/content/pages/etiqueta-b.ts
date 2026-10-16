import { definePage } from '../../lib/page-types';
import { CIUDADES, etiquetasRestringidas, calendario } from '../../lib/engine/zbe';
const HOY = '2026-10-15';
const ya = CIUDADES.filter((c) => etiquetasRestringidas(c, HOY).includes('B'));
const fut = CIUDADES.filter((c) => !ya.includes(c)).map((c) => ({ c, f: calendario(c, HOY).find((x) => x.regla.etiqueta === 'B') })).filter((x) => x.f).sort((a, b) => a.f!.fecha.localeCompare(b.f!.fecha));
export default definePage({
  id: 'etiqueta-b', group: 'etiqueta', order: 5, tool: 'etiqueta', toolPreset: { energia: 'diesel', anio: 2010, etiqueta: 'B' },
  related: ['zbe-malaga', 'zbe-bilbao', 'etiqueta-c', 'sin-etiqueta'], sources: ['dgt_b', 'dgt_distintivo', 'dgt_consulta'],
  es: {
    slug: 'etiqueta-b', nav: 'Etiqueta B', card: 'Amarilla: dónde ya no entra y cuándo',
    title: 'Etiqueta B 2026: qué ciudades la prohíben y desde cuándo',
    description: 'Etiqueta B de la DGT en 2026: gasolina desde 2001, diésel desde 2006. Ciudades que ya la limitan a los coches de fuera y fechas de Málaga y Palma. Al día.',
    h1: 'Etiqueta B en 2026: dónde ya no entra y dónde dejará de entrar',
    intro: 'La etiqueta amarilla es la siguiente en la lista de casi todas las ordenanzas. Mira en qué ciudades está ya limitada y el calendario de las demás.',
    resume: (h) => `La etiqueta B, amarilla, corresponde según la DGT a los turismos y comerciales ligeros de gasolina Euro 3 y diésel Euro 4 o 5, en la práctica los gasolina matriculados desde el 1 de enero de 2001 y los diésel desde 2006, hasta las fechas de la C; a los vehículos de más de 8 plazas y pesados con Euro IV o V, desde 2006; y a las motos Euro 2. A fecha de 15 de octubre de 2026, de las 15 zonas de esta web, ${ya.map((c) => c.nombre).join(', ')} ya la limitan en alguna zona a los vehículos que no son de la ciudad, con fórmulas distintas: prohibición en Bilbao, acceso solo para aparcar en el Distrito Centro de Madrid y en Getafe. Las próximas fechas fijadas son ${fut.map((x) => `${x.c.nombre} (${h.date(x.f!.fecha)})`).join(', ')}. Los vecinos domiciliados conservan casi siempre el acceso durante más tiempo.`,
    faqs: (h) => [
      { q: '¿Mi diésel de 2010 tiene la etiqueta B?', a: 'Lo normal es que sí: un diésel matriculado entre 2006 y agosto de 2015 suele ser Euro 4 o 5, que da la B. Si es de 2014 o 2015, podría estar homologado en Euro 6 y tener la C. La casilla V.9 de la ficha técnica o la consulta por matrícula de la DGT lo confirman.' },
      { q: '¿Se puede pasar de la etiqueta B a la C?', a: 'La etiqueta refleja la norma de emisiones con la que se homologó el vehículo, así que no se mejora con un mantenimiento o un filtro. Solo una corrección de datos erróneos en el Registro de Vehículos, con la ficha técnica como prueba, cambia la clasificación. Una conversión a GLP de un gasolina Euro 3 tampoco da la ECO.' }, { q: `¿Los vecinos con coche B también pierden el acceso?`, a: `Casi nunca al mismo tiempo que los de fuera. En Bilbao, los empadronados en la zona antes del 15 de junio de 2024 están exentos; en Málaga, los domiciliados en el impuesto antes del 30 de noviembre de 2026 siguen entrando; en Valladolid, los empadronados en la zona conservan el acceso con cualquier etiqueta. Cada página de ciudad da la fecha de los residentes.` }
    ],
    body: (h) => `
<h2>Calendario de la B, ciudad por ciudad</h2>
${h.table(['Ciudad', 'Desde', 'Para quién'], [...ya.map((c) => [h.a(`zbe-${c.slug}`, c.nombre), 'ya en vigor', 'vehículos de fuera']), ...fut.map((x) => [h.a(`zbe-${x.c.slug}`, x.c.nombre), h.date(x.f!.fecha), 'vehículos de fuera'])])}
<h2>Por qué la B es la siguiente</h2>
<p>Las ordenanzas avanzan de la peor clasificación a la mejor. Retirada la circulación de los vehículos sin etiqueta, la B es la siguiente categoría con más emisiones de óxidos de nitrógeno, sobre todo en los diésel Euro 4 y 5. Por eso Málaga, Palma, Donostia, Valladolid y Vitoria-Gasteiz ya han puesto fecha y Bilbao la aplica desde 2025. Barcelona, Zaragoza, València y Sevilla no tienen, de momento, ninguna fecha para ella.</p>
<p>Si tienes un coche B y vives en una de estas ciudades, comprueba la fecha que te corresponde como vecino: suele ser varios años más tarde que para los de fuera. Si no, ${h.a('etiqueta-c', 'la etiqueta C')} es la siguiente frontera.</p>`,
  },
  en: {
    slug: 'b-label', nav: 'B label', card: 'Yellow: where it is already banned, and when',
    title: 'B Label Spain 2026: Which Cities Ban It and From When',
    description: 'Spain’s yellow DGT B label in 2026: petrol from 2001, diesel from 2006. Which zones already limit out-of-town B cars, plus Málaga, Palma and Donostia dates.',
    h1: 'B label in 2026: where it is out already and where it will be',
    intro: 'The yellow label is next on the list in almost every byelaw. See which cities already limit it and the timetable for the rest.',
    resume: (h) => `According to the DGT, the yellow B label goes to petrol cars and light commercials with Euro 3 and diesels with Euro 4 or 5, in practice petrol cars registered from 1 January 2001 and diesels from 2006, up to the C dates; to vehicles with more than 8 seats and heavy vehicles with Euro IV or V, from 2006; and to Euro 2 motorbikes. As of 15 October 2026, of the 15 zones on this site, ${ya.map((c) => c.nombre).join(', ')} already limit it somewhere for vehicles from outside the city, in different ways: a ban in Bilbao, parking-only access in Madrid’s Centro district and in Getafe. The next dates set are ${fut.map((x) => `${x.c.nombre} (${h.date(x.f!.fecha)})`).join(', ')}. Locally registered residents almost always keep access for longer.`,
    faqs: (h) => [
      { q: 'Does my 2010 diesel have a B label?', a: 'Most likely: a diesel registered between 2006 and August 2015 is usually Euro 4 or 5, which gives a B. If it is from 2014 or 2015, it might be approved to Euro 6 and have the C. Box V.9 of the technical card or the DGT number-plate lookup will confirm it.' },
      { q: 'Can a car move from the B label to the C?', a: 'The label reflects the emissions standard the vehicle was approved under, so servicing or a filter will not improve it. Only correcting wrong data on the vehicle register, with the technical card as evidence, changes the classification. Converting a Euro 3 petrol car to LPG does not earn the ECO either.' }, { q: `Do residents with B-label cars lose access too?`, a: `Hardly ever at the same time as outsiders. In Bilbao, people registered in the zone before 15 June 2024 are exempt; in Málaga, cars on the local tax roll before 30 November 2026 keep entering; in Valladolid, residents of the zone keep access with any label. Each city page gives the residents’ date.` }
    ],
    body: (h) => `
<h2>B-label timetable, city by city</h2>
${h.table(['City', 'From', 'For whom'], [...ya.map((c) => [h.a(`zbe-${c.slug}`, c.nombre), 'already in force', 'out-of-town vehicles']), ...fut.map((x) => [h.a(`zbe-${x.c.slug}`, x.c.nombre), h.date(x.f!.fecha), 'out-of-town vehicles'])])}
<h2>Why the B is next</h2>
<p>Byelaws move from the worst rating towards the best. Once unlabelled vehicles are off the road, the B is the next category with the most nitrogen oxide emissions, especially Euro 4 and 5 diesels. That is why Málaga, Palma, Donostia, Valladolid and Vitoria-Gasteiz have set dates and Bilbao has applied it since 2025. Barcelona, Zaragoza, València and Seville have no date for it yet.</p>
<p>If you have a B car and live in one of these cities, check the date that applies to you as a resident: it is usually several years later than for outsiders. Otherwise, ${h.a('etiqueta-c', 'the C label')} is the next frontier.</p>`,
  },
});
