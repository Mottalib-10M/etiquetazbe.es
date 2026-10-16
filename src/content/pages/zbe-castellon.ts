import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-castellon", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 47, tool: 'zbe', ciudad: "castellon",
  related: ["zbe-valencia", "zbe-alicante", "zbe-elche", "etiqueta-dgt"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-castellon",
    nav: "ZBE Castellón",
    card: "Ronda Centro sin restricción para particulares",
    title: "ZBE Castellón 2026: Ronda Centro, fase 1 sin restricciones",
    description: "ZBE de Castellón 2026: el interior de la Ronda Centro, en fase 1 desde enero, no restringe los turismos particulares por su etiqueta DGT. Residentes y visitas.",
    h1: "ZBE de Castellón 2026: la Ronda Centro en su primera fase",
    intro: "Castellón activó su ZBE Centro en 2026, pero la primera fase no limita los coches particulares. La segunda dependerá de la calidad del aire.",
    resume: () => "La ZBE Centro de Castellón de la Plana se regula en la Ordenanza Municipal de Movilidad Sostenible y entra en vigor con ella; el Ayuntamiento anunció el 1 de enero de 2026 como fecha de inicio. Abarca el interior de la Ronda Centro, de la calle Cerdán de Tallada a la calle Lepanto y de las rondas Mijares y Magdalena a la avenida Casalduch, con aplicación continua las 24 horas. En la fase 1 no hay restricciones para los vehículos particulares: solo se restringen los vehículos sin etiqueta de administraciones y contratistas, del transporte público colectivo y los taxis y VTC. Las restricciones generales solo se aplicarán cuando los sensores registren niveles elevados de contaminación. En la fase 2, sin fecha, el Ayuntamiento elegirá una de las alternativas del proyecto técnico según la calidad del aire, desde ninguna restricción hasta prohibir los vehículos A, B y C. Los residentes empadronados con el coche a su nombre no tendrán que pedir autorización y podrán invitar a otros vehículos con hasta 20 permisos al mes.",
    faqs: () => [{ q: "¿Puedo entrar en el centro de Castellón con un coche sin etiqueta?", a: "Sí. En la fase 1 no hay restricciones para vehículos particulares; solo afectan a los vehículos sin etiqueta de administraciones y contratistas, del transporte público colectivo y a taxis y VTC. Las restricciones generales solo se aplicarían si los sensores registran niveles elevados de contaminación." }, { q: "Vivo en la ZBE Centro, ¿tengo que pedir algún permiso?", a: "No, si estás empadronado y el vehículo está a tu nombre en la DGT. Si vives en la zona pero no estás empadronado, debes pedir una autorización municipal registral con un documento que acredite tu residencia. Además, cada residente puede invitar hasta a 20 vehículos al mes." }, { q: "¿Cuándo podría haber restricciones por etiqueta?", a: "En la fase 2, sin fecha fijada, el Ayuntamiento activará una de las alternativas del proyecto técnico según los resultados de calidad del aire. Las más estrictas prohíben los vehículos A, B y C. La elección dependerá de los datos de los sensores de calidad del aire instalados en la calle." }],
    body: (h) => `
<h2>Una primera fase para flotas</h2>
<p>En la fase 1, la ZBE Centro de Castellón, dentro de la Ronda Centro, solo restringe a los vehículos sin etiqueta de organismos públicos y sus contratas, transporte público, taxis y VTC. Un particular con cualquier etiqueta circula. Los residentes empadronados en la zona con el vehículo a su nombre no necesitan autorización y pueden invitar hasta a 20 vehículos al mes.</p>
<h2>La fase 2, sin fecha</h2>
<p>El proyecto técnico deja abierta la segunda fase: según los datos de los sensores de calidad del aire, se elegirá una alternativa que va desde no restringir nada hasta prohibir las etiquetas A, B y C, con acceso solo a aparcamientos subterráneos en algunas variantes. No hay fecha. Si te mueves por la Comunitat, ${h.a('zbe-valencia', "València")} sí restringe ya los coches sin etiqueta.</p>`,
  },
  en: {
    slug: "zbe-castellon",
    nav: "Castellón ZBE",
    card: "Ronda Centro, no limits on private cars",
    title: "Castellón ZBE 2026: Ronda Centro, Phase 1 Without Limits",
    description: "Castellón low-emission zone 2026: the area inside the Ronda Centro, in phase 1 since January, does not restrict private cars by DGT label. Residents and passes.",
    h1: "Castellón low-emission zone 2026: the Ronda Centro, phase one",
    intro: "Castellón switched on its Centro zone in 2026, but the first phase does not limit private cars. The second will depend on air quality.",
    resume: () => "Castellón de la Plana's ZBE Centro is regulated by the municipal Sustainable Mobility Byelaw and comes into force with it; the council announced 1 January 2026 as the start date. It covers the area inside the Ronda Centro ring, from Calle Cerdán de Tallada to Calle Lepanto and from Ronda Mijares and Ronda Magdalena to Avenida Casalduch, and applies around the clock. In phase 1 there are no restrictions for private vehicles: only label-less vehicles of public bodies and contractors, public transport, taxis and private hire are restricted. General restrictions will only apply when sensors record high pollution levels. In phase 2, which has no date, the council will choose one of the technical project's options based on air quality, ranging from no restrictions to banning A, B and C vehicles. Residents registered in the zone with the car in their name will not need a permit and can invite other vehicles with up to 20 permits a month.",
    faqs: () => [{ q: "Can I drive into central Castellón in a car without a label?", a: "Yes. In phase 1 there are no restrictions for private vehicles; they only affect label-less vehicles of public bodies and contractors, public transport, taxis and private hire. General restrictions would only apply if sensors record high pollution levels. Phase 2 has no date." }, { q: "I live in the ZBE Centro. Do I need a permit?", a: "No, if you are registered at the address and the vehicle is in your name with the DGT. If you live in the zone but are not registered there, you must apply for a registered council permit with proof of residence." }, { q: "When could label-based restrictions start?", a: "In phase 2, which has no date yet, the council will switch on one of the technical project's options depending on air-quality results. The strictest ones ban A, B and C vehicles. The choice will depend on data from the air-quality sensors installed in the street." }],
    body: (h) => `
<h2>A first phase aimed at fleets</h2>
<p>In phase 1, Castellón’s Centro zone, inside the Ronda Centro, only restricts unlabelled vehicles belonging to public bodies and their contractors, public transport, taxis and ride-hailing. A private car with any label may drive in. Residents registered in the zone with the vehicle in their name need no permit and may invite up to 20 vehicles a month.</p>
<h2>Phase 2, no date</h2>
<p>The technical project leaves the second phase open: depending on air-quality sensor data, one option will be chosen, ranging from no restriction at all to banning A, B and C labels, with access only to underground car parks in some versions. There is no date. Elsewhere in the region, ${h.a('zbe-valencia', "València")} already restricts unlabelled cars.</p>`,
  },
});
