import { definePage } from '../../lib/page-types';
import { CIUDADES, etiquetasRestringidas, calendario } from '../../lib/engine/zbe';
import { ETIQUETA_CORTA, estadoTexto } from '../../lib/textos';
const HOY = '2026-10-15';
const filas = (l: 'es' | 'en', h: { date: (s: string) => string; a: (id: string, t: string) => string }) => CIUDADES.map((c) => {
  const r = etiquetasRestringidas(c, HOY); const p = calendario(c, HOY)[0];
  return [h.a(c.slug === 'san-sebastian' ? 'zbe-san-sebastian' : `zbe-${c.slug}`, c.nombre), estadoTexto(c.estado, l), r.length ? r.map((e) => ETIQUETA_CORTA[l][e]).join(', ') : '—', p ? `${h.date(p.fecha)}: ${ETIQUETA_CORTA[l][p.regla.etiqueta]}` : '—'];
});
export default definePage({
  id: 'zonas-bajas-emisiones', group: 'zbe', order: 1, tool: 'ciudades',
  related: ['zbe-madrid', 'zbe-barcelona', 'etiqueta-dgt', 'multa-zbe'], sources: ['ley7_2021', 'rd1052_2022', 'ley9_2025', 'lsv'],
  es: {
    slug: 'zonas-bajas-emisiones', nav: 'Zonas de bajas emisiones en España', card: 'Las 15 ciudades, con tu etiqueta',
    title: 'Zonas de bajas emisiones 2026: ciudades y etiquetas DGT',
    description: 'Zonas de bajas emisiones en España 2026: qué exige la Ley 7/2021, qué ciudades multan ya y qué etiqueta DGT entra en las 15 ZBE revisadas. Con fuentes.',
    h1: 'Zonas de bajas emisiones en España 2026: ciudad a ciudad',
    intro: 'Indica tu motor y la fecha de matriculación: verás tu etiqueta y, al lado, en cuáles de las 15 ZBE revisadas entra hoy un coche de fuera.',
    resume: (h) => `Una zona de bajas emisiones es, según el artículo 14.3 de la Ley 7/2021 de cambio climático, un ámbito continuo delimitado por una administración en el que se restringen el acceso, la circulación y el estacionamiento según la clasificación ambiental de los vehículos del Reglamento General de Vehículos, es decir, según la etiqueta de la DGT. La ley obligó a los municipios de más de ${h.num(h.P.ley.umbral_habitantes)} habitantes y a los territorios insulares a establecerlas antes de ${h.P.ley.plazo}, y a los de más de ${h.num(h.P.ley.umbral_habitantes_contaminacion)} si superan los valores límite de contaminación. El Real Decreto 1052/2022 fija su contenido mínimo: perímetro, objetivos de calidad del aire, calendario, sistema de control, información pública de 30 días y revisión. Cada ayuntamiento decide qué etiquetas restringe, a quién y cuándo, por eso no hay una regla nacional. Circular sin permiso es infracción grave del artículo 76.z3 de la Ley de Tráfico: ${h.eur(h.P.multa.zbe_grave)}.`,
    faqs: (h) => [
      { q: '¿Cuántas ciudades están obligadas a tener ZBE?', a: `Los municipios de más de ${h.num(h.P.ley.umbral_habitantes)} habitantes y los territorios insulares, más los de más de ${h.num(h.P.ley.umbral_habitantes_contaminacion)} que superen los límites de calidad del aire: en torno a 150 ayuntamientos. El plazo legal acabó en 2023, pero muchos han aprobado su ordenanza después y otros siguen sin restricciones efectivas. Esta web incluye las 15 cuya norma hemos leído en una fuente oficial.` },
      { q: '¿Qué cambia la Ley 9/2025 de Movilidad Sostenible para las ZBE?', a: 'Permite a los ayuntamientos crear una tasa por circular en una zona de bajas emisiones con un vehículo que supere los límites o categorías fijados, usando como referencia lo que costaría aparcar en un aparcamiento público. También garantiza el acceso de las grúas de auxilio en carretera y obliga a facilitar el acceso a las personas con movilidad reducida.' },
      { q: '¿Las ZBE funcionan igual en todas las ciudades?', a: 'No. Unas cubren toda la ciudad (Madrid, Granada) y otras unas pocas calles (Zaragoza, Pamplona); unas controlan solo en horario laboral (Barcelona, Bilbao, Sant Cugat) y otras todo el día; unas restringen solo a los vehículos sin etiqueta y otras ya a la B; casi todas distinguen al vehículo de fuera del domiciliado en la ciudad.' },
    ],
    body: (h) => `
<h2>Las 15 ZBE de esta web, hoy</h2>
<p>La tabla resume, para un vehículo domiciliado fuera de la ciudad y sin residencia en la zona, qué etiquetas no circulan libremente y cuál es la siguiente fecha que endurece la ordenanza. Los vecinos tienen casi siempre plazos más largos: el detalle está en la página de cada ciudad.</p>
${h.table(['Ciudad', 'Estado', 'Etiquetas restringidas', 'Próxima fecha'], filas('es', h))}
<h2>Por qué hay tantas versiones de la misma ZBE</h2>
<p>Las ordenanzas cambian con frecuencia: Madrid tuvo que rehacer la suya tras las sentencias de 2024, Getafe congeló su calendario, Valladolid recurre una sentencia, Málaga avanza por años de vigencia. Un artículo escrito en febrero puede estar mal en octubre. Por eso cada dato de esta web lleva la fecha en que se comprobó en la fuente oficial, y las fechas futuras se aplican solas el día que entran en vigor.</p>
<h2>Etiqueta y domicilio: las dos preguntas</h2>
<p>Para saber si puedes entrar necesitas dos datos: la etiqueta, que depende del motor y de la norma Euro, y el domicilio del vehículo, porque casi todas las ciudades protegen a sus vecinos durante unos años. El simulador de arriba responde a la primera para todas las ciudades a la vez; el ${h.a('home', 'simulador completo')} añade el domicilio, la zona concreta y el impuesto de circulación.</p>`,
  },
  en: {
    slug: 'low-emission-zones-spain', nav: 'Low-emission zones in Spain', card: 'All 15 cities, with your label',
    title: 'Low-Emission Zones Spain 2026: Cities and DGT Labels',
    description: 'Low-emission zones in Spain 2026: what Law 7/2021 requires, which cities fine already and which DGT label enters each of the 15 zones we checked. Dated.',
    h1: 'Low-emission zones in Spain 2026: city by city',
    intro: 'Enter your engine and registration date: you get your label and, next to it, which of the 15 zones we checked an out-of-town car can enter today.',
    resume: (h) => `A low-emission zone (zona de bajas emisiones, ZBE) is, under section 14(3) of Law 7/2021 on climate change, a continuous area defined by a public authority in which access, driving and parking are restricted according to the environmental classification in the General Vehicle Regulation, in other words the DGT label. The law required towns of more than ${h.num(h.P.ley.umbral_habitantes)} residents and island territories to set one up before ${h.P.ley.plazo}, as well as towns over ${h.num(h.P.ley.umbral_habitantes_contaminacion)} that breach air-quality limits. Royal Decree 1052/2022 sets the minimum content: boundary, air-quality targets, timetable, enforcement system, a 30-day public consultation and reviews. Each council decides which labels it restricts, for whom and when, which is why there is no national rule. Driving in without permission is a serious offence under section 76(z3) of the Traffic Act: ${h.eur(h.P.multa.zbe_grave)}.`,
    faqs: (h) => [
      { q: 'How many Spanish towns must have a low-emission zone?', a: `Towns of more than ${h.num(h.P.ley.umbral_habitantes)} residents and island territories, plus those over ${h.num(h.P.ley.umbral_habitantes_contaminacion)} that breach air-quality limits: around 150 councils. The legal deadline passed in 2023, but many approved their byelaws later and others still have no effective restrictions. This site covers the 15 whose rules we have read in an official source.` },
      { q: 'What does Law 9/2025 on Sustainable Mobility change for the zones?', a: 'It lets councils create a fee for driving a vehicle above the set limits or categories in a low-emission zone, using the cost of parking in a public car park as the benchmark. It also guarantees access for roadside recovery trucks and requires access to be made easier for people with reduced mobility.' },
      { q: 'Do the zones work the same way everywhere?', a: 'No. Some cover the whole city (Madrid, Granada) and others a few streets (Zaragoza, Pamplona); some only enforce during working hours (Barcelona, Bilbao, Sant Cugat) and others around the clock; some only restrict unlabelled vehicles while others already target the B label; almost all treat out-of-town vehicles differently from locally registered ones.' },
    ],
    body: (h) => `
<h2>The 15 zones on this site, today</h2>
<p>The table sums up, for a vehicle registered outside the city and not living in the zone, which labels cannot drive freely and the next date on which the byelaw tightens. Residents almost always get longer deadlines: the details are on each city page.</p>
${h.table(['City', 'Status', 'Restricted labels', 'Next date'], filas('en', h))}
<h2>Why the same zone has so many versions online</h2>
<p>Byelaws change often: Madrid had to redo its own after the 2024 rulings, Getafe froze its timetable, Valladolid is appealing a ruling, Málaga moves forward by years in force. An article written in February can be wrong by October. That is why every figure here carries the date it was checked against the official source, and future dates apply automatically on the day they take effect.</p>
<h2>Label and address: the two questions</h2>
<p>To know whether you can drive in you need two facts: the label, which depends on the engine and its Euro standard, and the vehicle’s registered address, because nearly every city protects its residents for a few years. The tool above answers the first for every city at once; the ${h.a('home', 'full calculator')} adds the address, the specific zone and the road tax.</p>`,
  },
});
