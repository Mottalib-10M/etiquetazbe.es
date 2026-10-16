import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('sevilla');
export default definePage({
  id: 'zbe-sevilla', group: 'zbe', order: 13, tool: 'zbe', ciudad: 'sevilla',
  related: ['zbe-granada', 'zbe-malaga', 'sin-etiqueta', 'zonas-bajas-emisiones'], sources: ['ley7_2021', 'lsv', 'rd1052_2022'],
  es: {
    slug: 'zbe-sevilla', nav: 'ZBE Sevilla', card: 'Isla de la Cartuja, laborables de 7 a 19 h',
    title: 'ZBE Sevilla 2026: Cartuja, horario y coches sin etiqueta',
    description: 'ZBE Sevilla 2026: solo la Isla de la Cartuja, cerrada a coches sin etiqueta DGT de lunes a viernes laborables de 7 a 19 h. Multa de 200 €. Con fuentes.',
    h1: 'ZBE de Sevilla 2026: la Cartuja y lo que puede cambiar',
    intro: 'La zona de Sevilla es pequeña: dos áreas del Parque Científico y Tecnológico de la Cartuja. El Casco Antiguo, por ahora, no tiene restricción por etiqueta.',
    resume: (h) => `La única zona de bajas emisiones en vigor en Sevilla está en la Isla de la Cartuja, en dos áreas del Parque Científico y Tecnológico. Entró en vigor el 8 de enero de 2024 con una fase informativa que se amplió hasta el 30 de junio, y desde el 1 de julio de 2024 se denuncian los accesos no autorizados. Funciona de lunes a viernes no festivos, de 7.00 a 19.00 h, y solo excluye a los vehículos sin etiqueta de la DGT: gasolina anteriores a 2000 y diésel anteriores a 2006, aproximadamente. Las etiquetas 0, ECO, C y B entran sin trámite ni registro previo, y las cámaras leen la matrícula en los accesos. Motos, ciclomotores, taxis, servicios de emergencia, residentes y usuarios de garaje están exceptuados, y quien no pueda entrar tiene bolsas de aparcamiento gratuito abiertas las 24 horas en el borde de la zona. La multa por infracción grave es de ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: '¿Puedo entrar en el centro de Sevilla con un coche sin etiqueta?', a: 'Sí: a fecha de octubre de 2026 la ZBE de Sevilla se limita a la Cartuja, y el Casco Antiguo y Triana no tienen restricción por etiqueta ambiental. Siguen vigentes las calles de acceso restringido a residentes que ya existían, que no dependen de la pegatina. La ampliación se ha debatido, pero no hay ordenanza aprobada.' },
      { q: 'Trabajo en una empresa de la Cartuja y mi coche no tiene etiqueta: ¿qué hago?', a: 'Puedes aparcar en las bolsas disuasorias del perímetro, unas 2.900 plazas en la banda Oeste y 500 en el Norte, abiertas todo el año, y llegar andando o en transporte público. Las empresas instaladas dentro tramitan la autorización de sus vehículos con el modelo M022; el M021 es para los vehículos que llevan a personas con movilidad reducida.' }, { q: `¿Se puede ir a un evento en la Cartuja con un coche sin etiqueta?`, a: `En horario de restricción, de lunes a viernes laborables de 7 a 19 h, hay que dejar el coche en las bolsas de aparcamiento del perímetro, abiertas 24 horas. Por la tarde, por la noche, en fin de semana o en festivo, el acceso es libre para cualquier vehículo.` }
    ],
    body: (h) => `
<h2>Una ZBE pensada para un parque empresarial</h2>
<p>Sevilla eligió empezar por la Cartuja, un recinto de oficinas y universidad con accesos controlables, en lugar del centro histórico. Por eso el horario es el de una jornada laboral y las excepciones miran a quien trabaja allí: aparcamiento disuasorio en los bordes, autorizaciones para las empresas instaladas y para el traslado de pacientes. Fuera del horario, por la tarde y los fines de semana, cualquier vehículo puede circular.</p>
<h2>Quién queda fuera de la norma</h2>
<p>Las instrucciones municipales exceptúan por su categoría a las motos y los ciclomotores, a los vehículos de mercancías de más de 3.500 kg y a los de más de 8 plazas. Los residentes y los usuarios de una plaza de garaje tienen autorizaciones propias, y quien se dirige a un aparcamiento público de rotación también puede entrar. Fuera de esos casos, los accesos detectados por las cámaras se denuncian.</p>
<p>La web municipal no respondía a la descarga automática el día de nuestra comprobación: los datos se han leído en las copias archivadas de sus páginas oficiales. Si vas a la Cartuja con un coche antiguo, ${h.a('etiqueta-dgt', 'comprueba su etiqueta')} antes de salir.</p>`,
  },
  en: {
    slug: 'zbe-sevilla', nav: 'Seville ZBE', card: 'Isla de la Cartuja, weekdays 7 am to 7 pm',
    title: 'Seville ZBE 2026: Cartuja Zone, Hours and Unlabelled Cars',
    description: 'Seville low-emission zone 2026: only the Isla de la Cartuja, closed to cars without a DGT label on working weekdays from 7 am to 7 pm. €200 fine. Dated.',
    h1: 'Seville low-emission zone 2026: the Cartuja and what may change',
    intro: 'Seville’s zone is small: two areas of the Cartuja science and technology park. The Old Town has no label-based restriction for now.',
    resume: (h) => `The only low-emission zone in force in Seville is on the Isla de la Cartuja, covering two areas of the science and technology park. It came into force on 8 January 2024 with an information phase extended to 30 June, and since 1 July 2024 unauthorised entries have been fined. It runs Monday to Friday, except public holidays, from 7.00 to 19.00, and only keeps out vehicles without a DGT label: roughly petrol cars from before 2000 and diesels from before 2006. Zero, ECO, C and B labels enter with no formality or prior registration, and cameras read the number plate at the entrances. Motorbikes, mopeds, taxis, emergency services, residents and garage users are exempt, and anyone who cannot enter has free car parks open 24 hours on the edge of the zone. The serious-offence fine is ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'Can I drive into central Seville in a car without a label?', a: 'Yes: as of October 2026 Seville’s zone is limited to the Cartuja, and the Old Town and Triana have no label-based restriction. The existing residents-only streets still apply, regardless of the sticker. An extension has been debated but no byelaw has been approved.' },
      { q: 'I work at a Cartuja company and my car has no label: what can I do?', a: 'You can use the park-and-walk car parks on the perimeter, about 2,900 spaces on the west side and 500 to the north, open all year, and walk or take public transport in. Companies based inside register their vehicles with form M022; form M021 is for vehicles carrying people with reduced mobility.' }, { q: `Can I go to an event at the Cartuja in an unlabelled car?`, a: `During restricted hours, working weekdays from 7 am to 7 pm, leave the car in the perimeter car parks, open 24 hours. In the evening, at night, at weekends or on public holidays, any vehicle may enter freely, and the cameras only count entries in the restricted window.` }
    ],
    body: (h) => `
<h2>A zone designed around a business park</h2>
<p>Seville chose to start with the Cartuja, an office and university site with easily controlled entrances, rather than the historic centre. That is why the hours match a working day and the exceptions look at people who work there: car parks at the edges, permits for companies on site and for patient transport. Outside those hours, in the evening and at weekends, any vehicle may drive in.</p>
<h2>Who is outside the rules</h2>
<p>The council’s instructions exempt motorbikes and mopeds by category, as well as goods vehicles over 3,500 kg and vehicles with more than 8 seats. Residents and garage-space users have their own permits, and drivers heading to a public pay car park may also enter. Outside those cases, entries caught by the cameras are fined.</p>
<p>The council website did not respond to automated downloads on the day we checked: the data were read from archived copies of its official pages. If you are taking an older car to the Cartuja, ${h.a('etiqueta-dgt', 'check its label')} before you set off.</p>`,
  },
});
