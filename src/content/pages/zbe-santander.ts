import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-santander", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 59, tool: 'zbe', ciudad: "santander",
  related: ["impuesto-circulacion-santander", "zbe-bilbao", "zbe-oviedo", "etiqueta-b"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-santander",
    nav: "ZBE Santander",
    card: "Ensanche en horario laboral, B en dos años",
    title: "ZBE Santander 2026: Ensanche, horario y la B a los dos años",
    description: "ZBE de Santander 2026: el Ensanche, laborables de 8 a 19 h, cerrado a coches sin etiqueta DGT desde el 31/12/2025; la B, a los dos años; en 2031, 0, ECO y C.",
    h1: "ZBE de Santander 2026: el Ensanche en horario laboral",
    intro: "Santander estrenó su ZBE en el Ensanche el último día de 2025. Hoy solo cierra a los coches sin etiqueta, pero ya tiene fechas para la B y para 2031.",
    resume: () => "Santander aplica desde el 31 de diciembre de 2025 una Zona de Bajas Emisiones en el Ensanche, con 2,5 km de perímetro y unos 200.000 m². La restricción rige los días laborables de lunes a viernes, de 08:00 a 19:00. De momento solo afecta a los vehículos sin etiqueta ambiental (A); las etiquetas B, C, ECO y 0 circulan libremente. El Ayuntamiento fijó un periodo de adaptación sin multas hasta el 28 de febrero de 2026. La infracción es grave y se sanciona con 200 euros. Los empadronados en la zona, los ciclomotores, los vehículos históricos, PMR y servicios esenciales están exentos. La ordenanza prevé extender la prohibición a los vehículos B a los dos años de su entrada en vigor y, desde el 1 de enero de 2031, dejar entrar solo a los vehículos 0, ECO y C y a los exentos.",
    faqs: () => [{ q: "¿Puedo entrar en la ZBE de Santander un sábado con un coche sin etiqueta?", a: "Sí. La restricción solo se aplica los días laborables, de lunes a viernes, de 08:00 a 19:00. Fuera de ese horario cualquier vehículo puede circular por el Ensanche. Las cámaras controlan once entradas y once salidas. Además, el periodo de adaptación sin multas terminó el 28 de febrero de 2026." }, { q: "¿Mi coche con etiqueta B tiene restricciones en Santander?", a: "Todavía no. La ordenanza solo prohíbe hoy los vehículos sin etiqueta. La restricción para los vehículos B se aplicará a los dos años de la entrada en vigor de la ordenanza, y algunos colectivos (garajes, carga y descarga, comercios) tienen moratoria hasta el 31 de diciembre de 2030." }, { q: "Vivo dentro de la ZBE, ¿tengo que pedir permiso?", a: "Si estás empadronado en la zona y tu vehículo está dado de alta en el padrón del IVTM de Santander, la exención se aplica directamente. Si el coche es de renting, leasing o de empresa, debes solicitar una autorización aportando el régimen de titularidad y la matrícula." }],
    body: (h) => `
<h2>Once cámaras de entrada</h2>
<p>La ZBE del Ensanche ocupa unos 200.000 m² dentro de un perímetro de 2,5 km, con once cámaras de lectura de matrícula en las entradas y otras once en las salidas. Funciona los días laborables de 8 a 19 h; fuera de ese horario y en fines de semana y festivos no hay restricción. El periodo de adaptación sin multas terminó el 28 de febrero de 2026.</p>
<h2>Moratorias hasta 2030</h2>
<p>La ordenanza extiende la prohibición a la etiqueta B a los dos años de su entrada en vigor y, desde el 1 de enero de 2031, solo dejará circular a los vehículos 0, ECO y C y a los exentos. Garajes, carga y descarga, mudanzas, comercios, talleres, hoteles e invitados de residentes tienen moratoria hasta el 31 de diciembre de 2030. Los ciclomotores están exentos. El impuesto de circulación de la ciudad está en ${h.a('impuesto-circulacion-santander', "su propia página")}.</p>`,
  },
  en: {
    slug: "zbe-santander",
    nav: "Santander ZBE",
    card: "Ensanche in working hours, B in two years",
    title: "Santander ZBE 2026: Ensanche, Hours and B Label in Two Years",
    description: "Santander low-emission zone 2026: the Ensanche, working days 8 am to 7 pm, closed to unlabelled cars since 31/12/2025; B labels after two years; 2031: 0/ECO/C.",
    h1: "Santander low-emission zone 2026: the Ensanche in working hours",
    intro: "Santander opened its Ensanche zone on the last day of 2025. Today it only shuts out unlabelled cars, but it already has dates for the B label and for 2031.",
    resume: () => "Since 31 December 2025 Santander has run a Low Emission Zone in the Ensanche district, with a 2.5 km perimeter covering about 200,000 m². The restriction applies on working days, Monday to Friday, from 08:00 to 19:00. For now it only affects vehicles without an environmental label (A); B, C, ECO and 0 vehicles drive in freely. The council set an adaptation period without fines until 28 February 2026. Breaking the rule is a serious offence carrying a 200 euro fine. Residents registered in the zone, mopeds, historic vehicles, blue-badge holders and essential services are exempt. The byelaw extends the ban to B-label vehicles two years after it came into force and, from 1 January 2031, only 0, ECO and C vehicles plus exempt ones will be allowed in.",
    faqs: () => [{ q: "Can I drive into Santander's LEZ on a Saturday in a car without a label?", a: "Yes. The restriction only applies on working days, Monday to Friday, from 08:00 to 19:00. Outside those hours any vehicle may drive in the Ensanche. The cameras watch eleven entrances and eleven exits, and the adaptation period without fines ended on 28 February 2026." }, { q: "Is my B-label car restricted in Santander?", a: "Not yet. Today the byelaw only bans vehicles without a label. B-label vehicles will be restricted two years after the byelaw came into force, and some groups (garage holders, deliveries, shops) have a grace period until 31 December 2030. Mopeds are exempt." }, { q: "I live inside the zone. Do I need a permit?", a: "If you are registered as living in the zone and your vehicle pays Santander road tax, the exemption applies automatically. If the car is leased, rented long-term or a company car, you must apply for authorisation giving the ownership arrangement and the number plate." }],
    body: (h) => `
<h2>Eleven entry cameras</h2>
<p>The Ensanche zone covers about 200,000 m² inside a 2.5 km boundary, with eleven plate-reading cameras at the entrances and eleven more at the exits. It runs on working days from 8 am to 7 pm; outside those hours, at weekends and on public holidays there is no restriction. The adaptation period without fines ended on 28 February 2026.</p>
<h2>Grace periods until 2030</h2>
<p>The byelaw extends the ban to B labels two years after it took effect and, from 1 January 2031, will only admit zero, ECO and C vehicles plus exempt ones. Garages, deliveries, house moves, shops, repair shops, hotels and residents’ guests have a grace period until 31 December 2030. Mopeds are exempt. The city’s road tax has ${h.a('impuesto-circulacion-santander', "its own page")}.</p>`,
  },
});
