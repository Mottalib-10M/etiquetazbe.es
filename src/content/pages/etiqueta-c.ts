import { definePage } from '../../lib/page-types';
import { CIUDADES, calendario } from '../../lib/engine/zbe';
const conFechaC = CIUDADES.filter((c) => calendario(c, '2026-10-15').some((x) => x.regla.etiqueta === 'C'));
export default definePage({
  id: 'etiqueta-c', group: 'etiqueta', order: 4, tool: 'etiqueta', toolPreset: { energia: 'gasolina', anio: 2010, etiqueta: 'C' },
  related: ['etiqueta-c-diesel-2014-2015', 'etiqueta-b', 'etiqueta-eco', 'zbe-palma'], sources: ['dgt_c', 'dgt_distintivo', 'dgt_consulta'],
  es: {
    slug: 'etiqueta-c', nav: 'Etiqueta C', card: 'Verde: gasolina desde 2006, diésel desde 09/2015',
    title: 'Etiqueta C 2026: gasolina desde 2006 y diésel desde 2015',
    description: 'Etiqueta C de la DGT en 2026: gasolina Euro 4 a 6 desde enero de 2006 y diésel Euro 6 desde septiembre de 2015. Dónde entra y quién la limitará. Al día.',
    h1: 'Etiqueta C en 2026: requisitos y ciudades que la limitarán',
    intro: 'La etiqueta verde es la más común del parque de combustión moderno. Hoy entra casi en todas partes, pero ya hay fechas para restringirla.',
    resume: (h) => `La etiqueta C, verde, corresponde según la DGT a los turismos y comerciales ligeros de gasolina con norma Euro 4, 5 o 6 y a los diésel con norma Euro 6. Como regla práctica, la DGT indica los gasolina matriculados a partir de enero de 2006 y los diésel a partir de septiembre de 2015, y para los vehículos de más de 8 plazas y pesados, los matriculados desde 2014 con Euro VI, sea cual sea el combustible. En las motos, la C la tienen las Euro 3 y Euro 4. Con ella se circula hoy por las 15 zonas de bajas emisiones de esta web, salvo una excepción: en el Distrito Centro de Madrid, una C de quien no vive allí solo puede entrar para ir a un aparcamiento. Las ordenanzas de ${conFechaC.map((c) => c.nombre).join(' y ')} ya fijan una fecha a partir de la cual tampoco la admitirán, en 2030.`,
    faqs: (h) => [
      { q: '¿Qué ciudades prohibirán la etiqueta C?', a: `De las 15 ordenanzas revisadas, ${conFechaC.map((c) => c.nombre).join(' y ')} fijan ya el 1 de enero de 2030 como fecha en que la C dejará de entrar en su zona, salvo excepciones como los residentes. Las demás no tienen fecha para la C. El simulador permite elegir 2030 como fecha del viaje para ver cómo queda cada ciudad.` },
      { q: '¿Una furgoneta diésel de 2016 tiene la etiqueta C?', a: 'Si es una furgoneta ligera (N1) homologada en Euro 6, sí; la DGT aplica a los comerciales ligeros las mismas fechas que a los turismos. Algunas furgonetas grandes de la clase N1 tuvieron un año más para pasar a Euro 6, así que una matriculada a finales de 2015 o en 2016 conviene comprobarla con la norma de la ficha técnica.' }, { q: `¿Un gasolina de 2005 puede tener la etiqueta C?`, a: `Sí, si está homologado en Euro 4. La DGT fija enero de 2006 como fecha orientativa porque desde entonces todos los gasolina nuevos debían cumplirla, pero muchos modelos ya eran Euro 4 en 2005. El simulador marca ese año como fecha de transición; la casilla V.9 de la ficha técnica o la consulta por matrícula lo confirman.` }
    ],
    body: (h) => `
<h2>La frontera más discutida: el diésel de 2015</h2>
<p>Para la gasolina, la frontera de 2006 apenas genera dudas. Para el diésel, en cambio, circulan dos años: 2014 y 2015. La DGT escribe septiembre de 2015, fecha en que la norma Euro 6 se hizo obligatoria para todas las matriculaciones; los modelos nuevos podían homologarse en Euro 6 desde septiembre de 2014. El simulador da la C desde septiembre de 2015 y avisa en los doce meses anteriores. ${h.a('etiqueta-c-diesel-2014-2015', 'La guía del diésel de 2014-2015')} lo explica con ejemplos.</p>
<h2>Qué pierde y qué gana la C hasta 2030</h2>
<p>La C no paga recargo ni tiene bonificación en el impuesto de circulación en las ordenanzas que hemos leído: la bonificación es para la 0 y la ECO. En las zonas, su horizonte es 2030 en las ciudades con calendario largo. Para un coche de 2016 a 2020, eso significa una década de uso sin restricciones en la mayoría de ciudades.</p>`,
  },
  en: {
    slug: 'c-label', nav: 'C label', card: 'Green: petrol from 2006, diesel from 09/2015',
    title: 'C Label Spain 2026: Petrol From 2006, Diesel From 2015',
    description: 'Spain’s green DGT C label in 2026: petrol Euro 4 to 6 from January 2006, diesel Euro 6 from September 2015. Where it enters today and who will restrict it.',
    h1: 'C label in 2026: requirements and cities that will limit it',
    intro: 'The green label is the most common among modern combustion cars. It gets in almost everywhere today, but dates to restrict it already exist.',
    resume: (h) => `According to the DGT, the green C label goes to petrol cars and light commercial vehicles with a Euro 4, 5 or 6 standard and to diesels with Euro 6. As a rule of thumb, the DGT cites petrol cars registered from January 2006 and diesels from September 2015, and for vehicles with more than 8 seats and heavy vehicles, those registered from 2014 with Euro VI, whatever the fuel. For motorbikes, Euro 3 and Euro 4 models get the C. With it you can drive into all 15 low-emission zones on this site today, with one exception: in Madrid’s Centro district a C belonging to a non-resident may only enter to reach a car park. The byelaws of ${conFechaC.map((c) => c.nombre).join(' and ')} already set a date from which they will not admit it either, in 2030.`,
    faqs: (h) => [
      { q: 'Which cities will ban the C label?', a: `Of the 15 byelaws checked, ${conFechaC.map((c) => c.nombre).join(' and ')} already set 1 January 2030 as the date when the C will no longer enter their zone, with exceptions such as residents. The others have no date for the C. The tool lets you pick 2030 as the trip date to see how each city looks.` },
      { q: 'Does a 2016 diesel van get the C label?', a: 'If it is a light van (N1) approved to Euro 6, yes; the DGT applies the same dates to light commercials as to cars. Some larger N1 vans had an extra year to move to Euro 6, so one registered in late 2015 or 2016 is worth checking against the standard on its technical card.' }, { q: `Can a 2005 petrol car have the C label?`, a: `Yes, if it was approved to Euro 4. The DGT gives January 2006 as the guide date because from then on every new petrol car had to meet it, but many models were already Euro 4 in 2005. The tool flags that year as a changeover date; box V.9 of the technical card or the plate lookup confirms it.` }
    ],
    body: (h) => `
<h2>The most debated line: 2015 diesels</h2>
<p>For petrol, the 2006 line raises few doubts. For diesel, two years circulate: 2014 and 2015. The DGT says September 2015, when Euro 6 became compulsory for all registrations; new models could be approved to Euro 6 from September 2014. The tool gives the C from September 2015 and warns during the previous twelve months. ${h.a('etiqueta-c-diesel-2014-2015', 'The 2014-2015 diesel guide')} explains it with examples.</p>
<h2>What the C loses and keeps until 2030</h2>
<p>The C pays no surcharge and gets no road-tax relief in the byelaws we have read: relief goes to zero and ECO. In the zones, its horizon is 2030 in cities with long timetables. For a 2016 to 2020 car, that means a decade of unrestricted use in most cities.</p>`,
  },
});
