import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-hospitalet", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 51, tool: 'zbe', ciudad: "hospitalet",
  related: ["zbe-barcelona", "zbe-sant-cugat", "zbe-sabadell", "etiqueta-b"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-hospitalet",
    nav: "ZBE L'Hospitalet",
    card: "Todo el municipio, dentro de las Rondes",
    title: "ZBE L'Hospitalet 2026: Rondes, horario y la B en 2028",
    description: "ZBE de L'Hospitalet 2026: todo el municipio, en la ZBE Rondes, cerrado a coches sin etiqueta DGT laborables de 7 a 20 h; la B, desde el 1 de enero de 2028.",
    h1: "ZBE de L'Hospitalet 2026: nueva ordenanza y la B en 2028",
    intro: "L'Hospitalet forma parte de la ZBE Rondes desde 2020 y rehízo su ordenanza en diciembre de 2025. Ya fija la fecha de la etiqueta B.",
    resume: () => "L'Hospitalet de Llobregat forma parte de la ZBE Rondes de Barcelona, activa desde el 1 de enero de 2020, que según la AMB abarca más de 95 km² e incluye todo su término municipal. El TSJC anuló en abril de 2024 la ordenanza municipal de 2020, y el Pleno aprobó una nueva el 19 de diciembre de 2025. Su texto correcto se publicó en el BOPB el 29 de diciembre de 2025 y entra en vigor al día siguiente de la publicación. La restricción rige los días laborables, de lunes a viernes, de 7.00 a 20.00 horas, para los vehículos L, M y N sin etiqueta ambiental de la DGT. Los vehículos con etiqueta B pasarán a estar restringidos el 1 de enero de 2028 los turismos y motos, en 2030 las furgonetas N1, en 2031 los camiones N2 y N3 y en 2032 los autobuses M2 y M3. La infracción es grave y se sanciona con 200 euros, con un 30 % más en caso de reincidencia. El control es automático, por lectura de matrículas. Se pueden pedir hasta 96 autorizaciones diarias al año, 24 de ellas para cualquier día.",
    faqs: () => [{ q: "¿Puedo circular por L'Hospitalet con un coche sin etiqueta el fin de semana?", a: "Sí. La ordenanza solo restringe los días laborables, de lunes a viernes, de 7.00 a 20.00 horas. Fuera de ese horario, en fin de semana y festivos, no se aplica la prohibición, salvo medidas extraordinarias por un episodio de contaminación." }, { q: "¿Cuándo dejará de circular un coche con etiqueta B?", a: "Los turismos (M1) y las motos (L) con etiqueta B se consideran más contaminantes a partir del 1 de enero de 2028. Para las furgonetas N1 la fecha es el 1 de enero de 2030, para los camiones N2 y N3 el 1 de enero de 2031 y para los autobuses M2 y M3 el 1 de enero de 2032." }, { q: "¿Cómo entro de forma ocasional con un vehículo sin etiqueta?", a: "Hay que inscribir el vehículo en el Registro metropolitano de la AMB y pedir una autorización diaria como máximo 24 horas después del acceso. Se permiten hasta 96 autorizaciones al año: 24 para cualquier día y el resto para fines de semana y festivos." }],
    body: (h) => `
<h2>Una ordenanza rehecha</h2>
<p>El Tribunal Superior de Justicia de Cataluña anuló en abril de 2024 la ordenanza de 2020. La nueva se aprobó el 19 de diciembre de 2025 y se publicó en el Boletín Oficial de la Provincia de Barcelona el 29 de diciembre, tras declararse incorrecto un primer anuncio. Mantiene el horario metropolitano, de lunes a viernes laborables de 7 a 20 h, y el control por lectura de matrículas y la Guardia Urbana.</p>
<h2>La B tiene fecha</h2>
<p>A diferencia de Barcelona, L'Hospitalet ya escribe cuándo deja fuera la B: el 1 de enero de 2028 para turismos y motos, 2030 para furgonetas, 2031 para camiones y 2032 para autobuses. Hay hasta 96 autorizaciones diarias al año, 24 de ellas en cualquier día. Para saber si tu coche es B, consulta ${h.a('etiqueta-b', "la guía de la etiqueta B")}.</p>`,
  },
  en: {
    slug: "zbe-hospitalet",
    nav: "L'Hospitalet ZBE",
    card: "The whole town, inside the Rondes zone",
    title: "L'Hospitalet ZBE 2026: Rondes, Hours and the B Label in 2028",
    description: "L'Hospitalet low-emission zone 2026: the whole town, in the Rondes zone, closed to unlabelled cars on working days 7 am to 8 pm; B labels from 1 January 2028.",
    h1: "L'Hospitalet low-emission zone 2026: new byelaw, B label in 2028",
    intro: "L'Hospitalet has been part of the Rondes zone since 2020 and rewrote its byelaw in December 2025. It already dates the end for B labels.",
    resume: () => "L'Hospitalet de Llobregat is part of the Barcelona Ring Roads LEZ, active since 1 January 2020, which the AMB says covers more than 95 km² and takes in the whole municipality. The Catalan High Court struck down the 2020 municipal byelaw in April 2024, and the council approved a new one on 19 December 2025. The correct text was published in the Barcelona provincial gazette on 29 December 2025 and takes effect the day after publication. The restriction applies on working days, Monday to Friday, from 7am to 8pm, to L, M and N category vehicles without a DGT environmental label. Vehicles with a B label will be restricted from 1 January 2028 for cars and motorbikes, 2030 for N1 vans, 2031 for N2 and N3 lorries and 2032 for M2 and M3 buses. A breach is a serious offence with a €200 fine, rising by 30% for a repeat offence. Enforcement is automatic, using number-plate cameras. Up to 96 day passes a year can be requested, 24 of them valid on any day.",
    faqs: () => [{ q: "Can I drive a car with no label in L'Hospitalet at the weekend?", a: "Yes. The byelaw only applies on working days, Monday to Friday, from 7am to 8pm. Outside those hours, at weekends and on public holidays, the ban does not apply, unless extra measures are triggered by a pollution episode. Day permits are also available." }, { q: "When will a car with a B label be banned?", a: "B-label cars (M1) and motorbikes (L) count as more polluting from 1 January 2028. The date is 1 January 2030 for N1 vans, 1 January 2031 for N2 and N3 lorries and 1 January 2032 for M2 and M3 buses and coaches." }, { q: "How do I make an occasional trip in a vehicle with no label?", a: "Register the vehicle in the AMB metropolitan register and request a day pass no later than 24 hours after entering. Up to 96 passes a year are allowed: 24 for any day and the rest for weekends and public holidays." }],
    body: (h) => `
<h2>A rewritten byelaw</h2>
<p>Catalonia’s High Court struck down the 2020 byelaw in April 2024. The new one was passed on 19 December 2025 and published in the Barcelona provincial gazette on 29 December, after a first notice was declared incorrect. It keeps the metropolitan hours, working weekdays from 7 am to 8 pm, and enforcement by plate-reading cameras and the local police.</p>
<h2>The B label has a date</h2>
<p>Unlike Barcelona, L'Hospitalet already writes down when the B label goes: 1 January 2028 for cars and motorbikes, 2030 for vans, 2031 for lorries and 2032 for buses. There are up to 96 day permits a year, 24 of them usable on any day. To check whether your car is a B, read ${h.a('etiqueta-b', "the B label guide")}.</p>`,
  },
});
