import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('granada');
export default definePage({
  id: 'zbe-granada', group: 'zbe', order: 19, tool: 'zbe', ciudad: 'granada',
  related: ['zbe-malaga', 'zbe-sevilla', 'sin-etiqueta', 'coche-extranjero-zbe'], sources: ['ley7_2021', 'lsv', 'rd1052_2022'],
  es: {
    slug: 'zbe-granada', nav: 'ZBE Granada', card: 'Toda la ciudad para coches sin etiqueta de fuera',
    title: 'ZBE Granada 2026: toda la ciudad para coches sin etiqueta',
    description: 'ZBE Granada 2026: 23,5 km², casi toda la ciudad, cerrada desde el 1/10/2025 a los coches sin etiqueta DGT de no empadronados. Multa de 200 €. Con fuentes.',
    h1: 'ZBE de Granada 2026: la ciudad entera, pero solo para los de fuera',
    intro: 'Granada cubre casi todo su término con la ZBE, pero sus vecinos quedan fuera de la norma. La restricción es para los coches sin etiqueta que vienen de fuera.',
    resume: (h) => `La Zona de Bajas Emisiones de Granada abarca unos 23,5 km², prácticamente toda la ciudad, entre el Camino del Sacromonte, la Avenida de la Innovación y el Parque Federico García Lorca, entre otros límites. Las cámaras y la señalización se activaron en abril de 2025 con cartas informativas, y el régimen sancionador, aplazado desde el 1 de abril, empezó el 1 de octubre de 2025. La norma solo afecta a los vehículos de fuera de Granada sin distintivo de la DGT; los residentes o empadronados en la ciudad quedan excluidos de su cumplimiento, y las etiquetas B, C, ECO y 0 circulan sin restricción. Hay excepciones para quien aparca más de una hora en un parking público, para conductores de renta baja que necesitan el coche para trabajar, servicios esenciales, transporte público, taxi, VTC y personas con movilidad reducida. La multa por infracción grave es de ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'Vivo en Armilla y mi coche no tiene etiqueta: ¿puedo ir a Granada?', a: 'Puedes ir a un aparcamiento público y dejar el coche allí más de una hora, una de las excepciones previstas para los vehículos de fuera sin etiqueta. Circular por el resto de la ciudad, en cambio, está sancionado desde el 1 de octubre de 2025. Si tu renta es baja y necesitas el coche para trabajar, puedes pedir autorización.' },
      { q: '¿La ZBE de Granada tiene horario?', a: 'El Ayuntamiento no publica una franja horaria: la restricción rige de forma permanente, todos los días. Es distinto de Barcelona, Bilbao o Zaragoza, que solo controlan en horario laboral. Si vas a pasar por Granada con un coche sin etiqueta, cuenta con que las cámaras funcionan también por la noche y en fin de semana.' }, { q: `¿Necesito llevar la pegatina en la ZBE de Granada?`, a: `El control se hace con cámaras que leen la matrícula y consultan la clasificación de la DGT, así que la pegatina no es lo que decide si puedes entrar. Lo determinante es si el vehículo tiene etiqueta en el registro y si su titular está empadronado en Granada.` }
    ],
    body: (h) => `
<h2>Grande en superficie, estrecha en alcance</h2>
<p>Granada eligió un perímetro casi municipal y una regla muy concreta: solo excluye a los vehículos sin etiqueta y solo a los que no son de la ciudad. La razón es el tráfico que llega del área metropolitana, la Vega y la costa. Para el vecino empadronado no hay cambio; para el que entra cada día desde un pueblo del cinturón con un diésel anterior a 2006, el cambio es completo.</p>
<h2>La salida del aparcamiento</h2>
<p>La excepción más útil es la del aparcamiento público: dejar el coche más de una hora permite justificar el acceso. Con las distancias de la ciudad, es la opción de quien viene a trabajar o al hospital desde fuera y no puede cambiar de coche. La lista completa de excepciones está en el proyecto aprobado y publicado en el Boletín Oficial de la Provincia.</p>
<p>La web municipal bloquea la lectura automática, así que los datos se han leído en sus notas oficiales. Si no sabes si tu coche tiene etiqueta, ${h.a('sin-etiqueta', 'la página de los vehículos sin etiqueta')} explica cómo comprobarlo y si se puede conseguir una.</p>`,
  },
  en: {
    slug: 'zbe-granada', nav: 'Granada ZBE', card: 'The whole city, for out-of-town unlabelled cars',
    title: 'Granada ZBE 2026: Citywide Zone for Unlabelled Cars',
    description: 'Granada low-emission zone 2026: 23.5 km², almost the whole city, closed since 1 October 2025 to unlabelled cars of non-residents. Exceptions, €200. Dated.',
    h1: 'Granada low-emission zone 2026: the whole city, for outsiders only',
    intro: 'Granada’s zone covers almost its whole municipality, but its own residents are outside the rules. The restriction targets unlabelled cars coming in from elsewhere.',
    resume: (h) => `Granada’s low-emission zone covers about 23.5 km², practically the whole city, between Camino del Sacromonte, Avenida de la Innovación and Federico García Lorca Park, among other limits. Cameras and signs went live in April 2025 with warning letters, and the penalty regime, postponed from 1 April, began on 1 October 2025. The rules only affect vehicles from outside Granada without a DGT label; residents registered in the city are outside the scheme, and B, C, ECO and zero labels drive freely. There are exceptions for drivers parking for more than an hour in a public car park, low-income drivers who need the car for work, essential services, public transport, taxis, ride-hailing and people with reduced mobility. The serious-offence fine is ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'I live in Armilla and my car has no label: can I drive into Granada?', a: 'You can drive to a public car park and leave the car there for more than an hour, one of the exceptions for out-of-town unlabelled vehicles. Driving around the rest of the city has been fined since 1 October 2025. If you are on a low income and need the car for work, you can apply for a permit.' },
      { q: 'Does the Granada zone have set hours?', a: 'The council publishes no time window: the restriction applies permanently, every day. That differs from Barcelona, Bilbao or Zaragoza, which only enforce in working hours. If you pass through Granada in an unlabelled car, assume the cameras also work at night and at weekends.' }, { q: `Do I need to display the sticker in Granada’s zone?`, a: `Enforcement uses cameras that read the plate and check the DGT classification, so the sticker is not what decides whether you can enter. What matters is whether the vehicle has a label on the register and whether its owner is registered as a Granada resident.` }
    ],
    body: (h) => `
<h2>Large in area, narrow in scope</h2>
<p>Granada chose an almost citywide boundary and a very specific rule: it only excludes unlabelled vehicles, and only those from outside the city. The aim is the traffic arriving from the metropolitan area, the Vega plain and the coast. For a registered resident nothing changes; for someone driving in every day from a nearby town in a pre-2006 diesel, everything does.</p>
<h2>The car-park way in</h2>
<p>The most useful exception is the public car park: leaving the car for more than an hour justifies the entry. Given the city’s distances, it is the option for people coming to work or to hospital who cannot change car. The full list of exceptions is in the approved project published in the provincial gazette.</p>
<p>The council website blocks automated reading, so the data were read in its official press notes. If you are not sure whether your car has a label, ${h.a('sin-etiqueta', 'the page on unlabelled vehicles')} explains how to check and whether you can get one.</p>`,
  },
});
