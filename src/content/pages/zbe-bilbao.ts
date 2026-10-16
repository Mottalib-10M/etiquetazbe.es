import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('bilbao');
export default definePage({
  id: 'zbe-bilbao', group: 'zbe', order: 16, tool: 'zbe', ciudad: 'bilbao',
  related: ['zbe-vitoria-gasteiz', 'zbe-san-sebastian', 'etiqueta-b', 'etiqueta-c'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-bilbao', nav: 'ZBE Bilbao', card: 'Sin etiqueta y B de fuera, laborables de 7 a 20 h',
    title: 'ZBE Bilbao 2026: etiqueta B, horario y excepciones',
    description: 'ZBE Bilbao 2026: sin etiqueta y etiqueta B prohibidas de lunes a viernes de 7 a 20 h para no residentes desde junio de 2025. Parkings y multa de 200 €.',
    h1: 'ZBE de Bilbao 2026: la etiqueta B ya no entra',
    intro: 'Bilbao fue de las primeras grandes ciudades en cerrar su zona a la etiqueta B. Mira qué cambia si vives dentro o si vas a un parking.',
    resume: (h) => `La Zona de Bajas Emisiones de Bilbao entró en vigor el 15 de junio de 2024 con una ordenanza aprobada ese año. Funciona en días laborables, de lunes a viernes de 7.00 a 20.00 h, y se controla con cámaras de lectura de matrículas conectadas a las bases municipales y a la DGT, sin pegatina ni trámite previo. Los vehículos sin etiqueta están restringidos desde el inicio y la mayoría de sus moratorias terminó el 31 de diciembre de 2025; los de etiqueta B, desde el 15 de junio de 2025. Las etiquetas C, ECO y 0 circulan sin restricción. Quien estaba empadronado en la zona antes del 15 de junio de 2024 queda exento; los empadronados después tienen una moratoria para la B hasta el 31 de diciembre de 2029. Un vehículo B, no uno sin etiqueta, puede entrar para ir a un parking de rotación integrado en el sistema. La multa es de ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'Vengo de Barakaldo con un diésel de 2012: ¿puedo aparcar en el centro de Bilbao?', a: 'Un diésel de 2012 suele tener etiqueta B, y desde el 15 de junio de 2025 no puede circular por la ZBE en días laborables de 7 a 20 h. La excepción es dirigirse a un parking de rotación integrado en el sistema de la ZBE: el acceso queda registrado y justificado. Fuera de ese horario o en fin de semana no hay restricción.' },
      { q: '¿Qué moratoria tienen los mayores con coche antiguo en Bilbao?', a: 'Según el Ayuntamiento, conservan moratoria hasta 2030 los vehículos A y B de personas con plaza de garaje en la ZBE o con distintivo DAR nacidas en 1955 o antes, entre otros supuestos. Hay que acreditarlo para que la matrícula quede autorizada en el sistema; la mayoría de las demás moratorias de vehículos sin etiqueta terminó el 31 de diciembre de 2025.' }, { q: `¿Puedo entrar en la ZBE de Bilbao un sábado con un coche B?`, a: `Sí. La ZBE de Bilbao solo se aplica en días laborables, de lunes a viernes de 7.00 a 20.00 horas. Fuera de ese horario, los fines de semana y los festivos cualquier vehículo circula sin restricción por la zona, también los B y los que no tienen etiqueta.` }
    ],
    body: (h) => `
<h2>Una de las primeras en ir a por la B</h2>
<p>Mientras Barcelona o Zaragoza solo restringen a los vehículos sin etiqueta, Bilbao dio un paso más un año después de estrenar la zona: desde junio de 2025 la B tampoco circula en horario laboral para quien no vive dentro. Es la razón por la que muchos diésel de 2006 a 2015 del área metropolitana ya no pueden llegar al centro en coche entre semana.</p>
<h2>Residentes, garajes y parkings</h2>
<p>La exención de los residentes depende de la fecha de empadronamiento: antes del 15 de junio de 2024, exentos; después, moratoria para la B hasta finales de 2029. Para los visitantes la salida práctica es el parking de rotación, con la diferencia de que vale para la B pero no para los vehículos sin etiqueta. También se permiten accesos por consulta médica o veterinaria, taller o centro educativo.</p>
<h2>Vehículos extranjeros</h2>
<p>Un coche con matrícula de otro país que equivalga a una A o una B no puede entrar salvo moratorias concretas. Como no tiene etiqueta de la DGT, conviene ${h.a('coche-extranjero-zbe', 'calcular su equivalencia')} antes del viaje. La web municipal no permite la lectura automática; los datos se han tomado de sus páginas oficiales.</p>`,
  },
  en: {
    slug: 'zbe-bilbao', nav: 'Bilbao ZBE', card: 'No label and out-of-town B, weekdays 7 am to 8 pm',
    title: 'Bilbao ZBE 2026: B Label Ban, Hours and Exceptions',
    description: 'Bilbao low-emission zone 2026: no-label and B-label cars banned for non-residents on weekdays 7 am to 8 pm since June 2025. Car parks and €200 fine. Dated.',
    h1: 'Bilbao low-emission zone 2026: the B label is already out',
    intro: 'Bilbao was among the first large cities to close its zone to the B label. See what changes if you live inside it or are heading for a car park.',
    resume: (h) => `Bilbao’s low-emission zone came into force on 15 June 2024 under a byelaw passed that year. It runs on working days, Monday to Friday from 7.00 to 20.00, and is enforced by number-plate cameras linked to council records and the DGT, with no sticker or prior registration. Unlabelled vehicles have been restricted from the start and most of their grace periods ended on 31 December 2025; B-label vehicles since 15 June 2025. C, ECO and zero labels drive freely. People registered as living in the zone before 15 June 2024 are exempt; those registered later have a grace period for B vehicles until 31 December 2029. A B-label vehicle, though not an unlabelled one, may enter to reach a car park that is part of the system. The fine is ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'I drive in from Barakaldo in a 2012 diesel: can I park in central Bilbao?', a: 'A 2012 diesel usually has a B label, and since 15 June 2025 it may not drive in the zone on weekdays from 7 am to 8 pm. The exception is heading for a pay car park that is part of the zone system: the entry is logged and justified. Outside those hours or at weekends there is no restriction.' },
      { q: 'What grace period do older drivers with old cars have in Bilbao?', a: 'According to the council, A and B vehicles belonging to people with a garage space in the zone, or holding a DAR permit and born in 1955 or earlier, keep a grace period until 2030, among other cases. You must prove it so the plate is authorised in the system; most other grace periods for unlabelled vehicles ended on 31 December 2025.' }, { q: `Can I drive into Bilbao’s zone on a Saturday in a B-label car?`, a: `Yes. Bilbao’s zone only applies on working days, Monday to Friday from 7.00 to 20.00. Outside those hours, at weekends and on public holidays, any vehicle may drive in the zone without restriction, B-label and unlabelled cars included. The city page shows the exact hours for each zone.` }
    ],
    body: (h) => `
<h2>Among the first to target the B label</h2>
<p>While Barcelona or Zaragoza only restrict unlabelled vehicles, Bilbao went further a year after launching its zone: since June 2025 the B label cannot drive in during working hours either, unless you live inside. That is why many 2006 to 2015 diesels from the metropolitan area can no longer reach the centre by car on weekdays.</p>
<h2>Residents, garages and car parks</h2>
<p>The residents’ exemption depends on when you registered: before 15 June 2024, exempt; afterwards, a grace period for B cars until the end of 2029. For visitors the practical way in is the pay car park, which works for B cars but not for unlabelled ones. Trips to a doctor or vet, a garage or a school are also allowed.</p>
<h2>Foreign vehicles</h2>
<p>A car with foreign plates equivalent to an A or B may not enter except under specific grace periods. Since it has no DGT label, ${h.a('coche-extranjero-zbe', 'work out its equivalent')} before the trip. The council website blocks automated reading; the data were taken from its official pages.</p>`,
  },
});
