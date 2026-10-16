import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('vitoria-gasteiz');
export default definePage({
  id: 'zbe-vitoria-gasteiz', group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 23, tool: 'zbe', ciudad: 'vitoria-gasteiz',
  related: ['impuesto-circulacion-vitoria-gasteiz', 'zbe-bilbao', 'etiqueta-b', 'zbe-pamplona'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-vitoria-gasteiz', nav: 'ZBE Vitoria-Gasteiz', card: 'Centro; residentes hasta 2027, B en 2030',
    title: 'ZBE Vitoria-Gasteiz 2026: multas, residentes y etiqueta B',
    description: 'ZBE de Vitoria-Gasteiz 2026: coches sin etiqueta multados con 200 € desde el 15/12/2025; residentes hasta el 15/09/2027 y la B desde 2030. Con fuentes.',
    h1: 'ZBE de Vitoria-Gasteiz 2026: lo que queda hasta 2030',
    intro: 'Vitoria-Gasteiz multa desde diciembre de 2025 a los coches sin etiqueta en su centro. Los residentes tienen plazo hasta septiembre de 2027.',
    resume: (h) => `La Zona de Bajas Emisiones de Vitoria-Gasteiz entró en vigor el 15 de septiembre de 2025, con una ordenanza aprobada definitivamente el 21 de marzo de ese año. Ocupa el centro, dentro de un contorno formado por las calles San Ignacio, Francia, Paz, Ramón Ortiz de Zárate, Dato, Florida, Santiago Ramón y Cajal, Luis Heintz, Magdalena, Vicente Goikoetxea, Cercas Bajas y Portal de Arriaga, que quedan fuera. Restringe a los vehículos sin etiqueta, diésel anteriores a 2006 y gasolina anteriores a 2001; tras tres meses de avisos, desde el 15 de diciembre de 2025 se multa con ${h.eur(c.multa.importe)}, ${h.eur(c.multa.pronto_pago)} con pago anticipado. Los residentes pueden seguir entrando con su vehículo sin distintivo hasta el 15 de septiembre de 2027, cuando una segunda fase ampliará además el perímetro y activará la OTA ambiental. Desde el 1 de enero de 2030 la limitación se extenderá a la etiqueta B. Más de 30 cámaras leen las matrículas, sin necesidad de pegatina.`,
    faqs: (h) => [
      { q: '¿Cuántos coches han sido multados en la ZBE de Vitoria?', a: 'El Ayuntamiento informó en diciembre de 2025 de que solo un 1,5 % de los accesos eran indebidos, y en su balance de marzo de 2026 cifró en 637 las sanciones tramitadas desde el 15 de diciembre. También calculó que la ZBE había evitado 10,65 toneladas de CO2 en seis meses y reducido a la mitad los coches más contaminantes en el centro.' },
      { q: '¿Qué pasará en septiembre de 2027 en Vitoria-Gasteiz?', a: 'Termina el periodo de los residentes con vehículo sin etiqueta y empieza la segunda fase, que amplía el perímetro restringido y activa la OTA ambiental, es decir, un estacionamiento regulado que tendrá en cuenta la clasificación del vehículo. La ordenanza ya fija el 1 de enero de 2030 para extender la restricción a la etiqueta B.' }, { q: `¿Hay que llevar la pegatina en la ZBE de Vitoria-Gasteiz?`, a: `No es necesaria: las más de 30 cámaras instaladas leen las matrículas y las contrastan con la base de datos de la DGT para saber si el vehículo puede acceder. Basta con que el coche tenga la clasificación adecuada en el registro o una exención concedida.` }
    ],
    body: (h) => `
<h2>Un despliegue en tres tiempos</h2>
<p>Vitoria-Gasteiz ha planificado su zona con fechas largas: 2025 para los vehículos sin etiqueta, 2027 para los residentes y la ampliación, 2030 para la B. Para un vecino del Ensanche con un coche antiguo el calendario da margen para cambiarlo; para quien viene de fuera, la restricción es ya plena. Las calles que tenían restricciones previas, como las de la zona peatonal, mantienen sus limitaciones con cualquier etiqueta.</p>
<h2>Régimen foral, impuesto propio</h2>
<p>Álava tiene su propio impuesto de vehículos dentro del régimen foral, con cuotas que superan con holgura a las de las ciudades de régimen común: ${h.a('impuesto-circulacion-vitoria-gasteiz', 'consulta el cuadro de 2026')}. Las exenciones a la ZBE se tramitan en la sede electrónica municipal, que tiene un procedimiento específico.</p>`,
  },
  en: {
    slug: 'zbe-vitoria-gasteiz', nav: 'Vitoria-Gasteiz ZBE', card: 'Centre; residents until 2027, B in 2030',
    title: 'Vitoria-Gasteiz ZBE 2026: Fines, Residents and B Label',
    description: 'Vitoria-Gasteiz low-emission zone 2026: unlabelled cars fined €200 since 15/12/2025; residents until 15/09/2027 and the B label from 2030. Sources cited.',
    h1: 'Vitoria-Gasteiz low-emission zone 2026: the road to 2030',
    intro: 'Vitoria-Gasteiz has been fining unlabelled cars in its centre since December 2025. Residents have until September 2027.',
    resume: (h) => `Vitoria-Gasteiz’s low-emission zone came into force on 15 September 2025 under a byelaw finally approved on 21 March that year. It covers the centre, inside a ring of streets formed by San Ignacio, Francia, Paz, Ramón Ortiz de Zárate, Dato, Florida, Santiago Ramón y Cajal, Luis Heintz, Magdalena, Vicente Goikoetxea, Cercas Bajas and Portal de Arriaga, which are themselves outside. It restricts vehicles without a label, diesels from before 2006 and petrol cars from before 2001; after three months of warnings, since 15 December 2025 the fine has been ${h.eur(c.multa.importe)}, or ${h.eur(c.multa.pronto_pago)} if paid early. Residents may keep driving in with an unlabelled vehicle until 15 September 2027, when a second phase will also widen the area and switch on environmental parking charges (OTA). From 1 January 2030 the ban extends to the B label. More than 30 cameras read number plates, so no sticker is needed.`,
    faqs: (h) => [
      { q: 'How many cars have been fined in the Vitoria zone?', a: 'In December 2025 the council reported that only 1.5% of entries were not allowed, and in its March 2026 review it counted 637 fines processed since 15 December. It also estimated that the zone had saved 10.65 tonnes of CO2 in six months and halved the number of the most polluting cars in the centre.' },
      { q: 'What happens in September 2027 in Vitoria-Gasteiz?', a: 'The residents’ period for unlabelled vehicles ends and the second phase begins, widening the restricted area and switching on environmental regulated parking that takes the vehicle’s rating into account. The byelaw already sets 1 January 2030 for extending the restriction to the B label.' }, { q: `Do I need the sticker in Vitoria-Gasteiz’s zone?`, a: `No: more than 30 cameras read plates and check them against the DGT database to see whether the vehicle may enter. It is enough for the car to have the right classification on the register or an exemption granted. No prior formality is required.` }
    ],
    body: (h) => `
<h2>A rollout in three stages</h2>
<p>Vitoria-Gasteiz has planned its zone with long lead times: 2025 for unlabelled vehicles, 2027 for residents and the wider area, 2030 for the B label. For a resident with an old car the timetable leaves time to replace it; for drivers from outside the restriction already applies in full. Streets that were already restricted, such as pedestrian areas, keep their limits whatever the label.</p>
<h2>Its own tax regime, its own road tax</h2>
<p>Álava runs its own vehicle tax under the Basque foral regime, with rates well above those of standard-regime cities: ${h.a('impuesto-circulacion-vitoria-gasteiz', 'see the 2026 table')}. Exemptions from the zone are applied for at the council’s online office, which has a dedicated procedure.</p>`,
  },
});
