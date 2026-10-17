import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-sabadell", group: 'zbe', order: 56, tool: 'zbe', ciudad: "sabadell",
  related: ["zbe-terrassa", "zbe-sant-cugat", "zbe-barcelona", "sin-etiqueta"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-sabadell",
    nav: "ZBE Sabadell",
    card: "El Centre, 24 días al año sin etiqueta",
    title: "ZBE Sabadell 2026: el Centre, horario y ampliación en 2028",
    description: "ZBE de Sabadell 2026: el barrio del Centre, laborables de 7 a 20 h, cerrado a vehículos sin etiqueta DGT desde el 1/12/2025, con 24 días libres al año. Al día.",
    h1: "ZBE de Sabadell 2026: el Centre y lo que llega en 2028",
    intro: "Sabadell multa desde diciembre de 2025 a los coches sin etiqueta en el barrio del Centre. Su proyecto ya prevé llegar a toda la ciudad en 2032.",
    resume: () => "Sabadell tiene una ZBE en el barrio del Centre, delimitada por la plaza de Catalunya, la ronda de Zamenhof, la N-150 y la ronda de Ponent, entre otras vías; las calles del perímetro quedan fuera. La ordenanza se aprobó definitivamente el 28 de octubre de 2024, se publicó en el BOPB el 13 de noviembre de 2024 y entró en vigor el 19 de diciembre de 2024. Según el Ayuntamiento, la ZBE se puso en marcha el 15 de septiembre de 2025, con una fase sin sanciones hasta el 30 de noviembre, y se sanciona desde el 1 de diciembre. La restricción se aplica de lunes a viernes laborables, de 7.00 a 20.00 horas, a los vehículos sin etiqueta ambiental de la DGT. Las etiquetas B, C, ECO y 0 circulan sin trámite. Los vehículos sin etiqueta disponen de hasta 24 días laborables al año de acceso libre, y los empadronados en la zona antes del 19 de diciembre de 2024 quedan autorizados. El proyecto técnico prevé ampliar la zona a la Creu Alta en 2028 y al resto de la ciudad en 2032.",
    faqs: () => [{ q: "¿Puedo entrar en el centro de Sabadell con un coche sin etiqueta?", a: "Sí, fuera del horario de restricción: antes de las 7.00 y después de las 20.00 en días laborables, y todo el día en fines de semana y festivos. Además, se dispone de hasta 24 días laborables al año para entrar sin restricción horaria ni trámite." }, { q: "¿Qué pasa si vivo dentro de la ZBE y mi coche no tiene etiqueta?", a: "Si estaba empadronado dentro de la zona y tenía un vehículo sin etiqueta censado allí el 19 de diciembre de 2024, el acceso está garantizado sin hacer ningún trámite. La autorización se mantiene mientras se conserven esas condiciones. Si te empadronas después, necesitas otra vía, como las 24 autorizaciones diarias al año." }, { q: "¿Afecta la ZBE de Sabadell a los coches con etiqueta amarilla (B)?", a: "No por ahora: la ordenanza municipal solo restringe los vehículos sin etiqueta y no prevé restringir la B hasta 2035. El Decreto 132/2024 de la Generalitat prevé restricciones a la etiqueta B desde 2028, y el Ayuntamiento negocia con la Generalitat ese calendario." }],
    body: (h) => `
<h2>Del aviso a la multa</h2>
<p>Según el Ayuntamiento, la ZBE de Sabadell empezó a funcionar el 15 de septiembre con un periodo sin multas hasta el 30 de noviembre, y desde el 1 de diciembre de 2025 es plenamente vigente. Afecta a los vehículos sin etiqueta de lunes a viernes laborables de 7 a 20 h, con cámaras en el perímetro y en puntos interiores. La ordenanza condiciona las sanciones a que el registro de vehículos esté implantado.</p>
<h2>Creu Alta en 2028, toda la ciudad en 2032</h2>
<p>El proyecto técnico prevé ampliar la zona al barrio de la Creu Alta en 2028 y al resto del suelo urbano en 2032. Mientras tanto, cualquier vehículo puede pedir hasta 24 autorizaciones diarias al año, y los titulares de plaza de aparcamiento dentro tienen permiso anual. En la misma comarca, ${h.a('zbe-terrassa', "la ZBE de Terrassa")} sigue un esquema parecido.</p>`,
  },
  en: {
    slug: "zbe-sabadell",
    nav: "Sabadell ZBE",
    card: "The Centre, 24 days a year without a label",
    title: "Sabadell ZBE 2026: The Centre, Hours and the 2028 Extension",
    description: "Sabadell low-emission zone 2026: the Centre district, working days 7 am to 8 pm, closed to unlabelled vehicles since 1/12/2025, with 24 free days a year.",
    h1: "Sabadell low-emission zone 2026: the Centre and what comes in 2028",
    intro: "Sabadell has fined unlabelled cars in the Centre district since December 2025. Its project already plans to cover the whole city by 2032.",
    resume: () => "Sabadell has a low-emission zone in the Centre district, bounded by Plaça de Catalunya, Ronda de Zamenhof, the N-150 and Ronda de Ponent, among other roads; the perimeter streets are outside it. The byelaw was finally approved on 28 October 2024, published in the Barcelona provincial gazette on 13 November 2024 and took effect on 19 December 2024. According to the council, the zone went live on 15 September 2025 with a no-fines period until 30 November, and fines apply from 1 December. The restriction applies on working days, Monday to Friday, from 7am to 8pm, to vehicles without a DGT environmental label. B, C, ECO and 0 labels can drive in with no paperwork. Vehicles with no label get up to 24 working days a year of free access, and people registered as living in the zone before 19 December 2024 are authorised. The technical plan foresees extending the zone to Creu Alta in 2028 and to the rest of the city in 2032.",
    faqs: () => [{ q: "Can I drive into central Sabadell in a car with no label?", a: "Yes, outside restricted hours: before 7am and after 8pm on working days, and all day at weekends and on public holidays. On top of that, you get up to 24 working days a year to drive in at any hour with no paperwork." }, { q: "What if I live inside the zone and my car has no label?", a: "If you were registered as living in the zone and had a no-label vehicle registered there on 19 December 2024, your access is guaranteed with no paperwork. The permit lasts as long as those conditions still apply. If you register later, you need another route, such as the 24 day permits a year." }, { q: "Does Sabadell's zone affect cars with a yellow (B) label?", a: "Not for now: the municipal byelaw only restricts vehicles with no label and does not plan to restrict B labels before 2035. The Catalan government's Decree 132/2024 plans restrictions on B labels from 2028, and the council is negotiating that timetable with the Generalitat." }],
    body: (h) => `
<h2>From warnings to fines</h2>
<p>According to the council, Sabadell’s zone started on 15 September with no fines until 30 November, and has been fully in force since 1 December 2025. It affects unlabelled vehicles on working weekdays from 7 am to 8 pm, with cameras on the boundary and at points inside. The byelaw makes fines conditional on the vehicle register being up and running.</p>
<h2>Creu Alta in 2028, the whole city in 2032</h2>
<p>The technical project plans to extend the zone to the Creu Alta district in 2028 and to the rest of the urban area in 2032. Meanwhile any vehicle may request up to 24 day permits a year, and holders of a parking space inside get an annual permit. In the same county, ${h.a('zbe-terrassa', "the Terrassa zone")} follows a similar model.</p>`,
  },
});
