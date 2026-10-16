import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-lleida", group: 'zbe', order: 54, tool: 'zbe', ciudad: "lleida",
  related: ["zbe-girona", "zbe-tarragona", "zbe-barcelona", "sin-etiqueta"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-lleida",
    nav: "ZBE Lleida",
    card: "Restricciones suspendidas por Rodalies",
    title: "ZBE Lleida 2026: suspendida por Rodalies y fases hasta 2030",
    description: "ZBE de Lleida 2026: el centro restringe coches sin etiqueta DGT de fuera, laborables de 7 a 20 h, pero la Paeria la suspendió el 22/01/2026 por Rodalies.",
    h1: "ZBE de Lleida 2026: en pausa mientras falle Rodalies",
    intro: "Lleida activó su ZBE en 2025 y la suspendió en enero de 2026 por la crisis de Rodalies. La ordenanza ya fija las ampliaciones de 2028 y 2030.",
    resume: () => "Lleida implantó el 1 de enero de 2025 la ZBE 1, en el centro histórico, entre la avenida Blondel, la Rambla d'Aragó, la avenida Prat de la Riba y la avenida Francesc Macià, entre otras vías. La restricción rige de lunes a viernes laborables de 7.00 a 20.00 horas, todos los meses, y afecta a los vehículos sin etiqueta ambiental. La ordenanza fijó un periodo transitorio de seis meses sin multas y la fase 1 entró en funcionamiento el 1 de julio de 2025. Los vehículos que pagan el impuesto de vehículos en Lleida quedan exentos, y los de fuera disponen de 24 accesos al año sin trámite. La infracción se sanciona con 200 euros, con un 30 % más por reincidencia. La ZBE se ampliará el 1 de enero de 2028 (ZBE 2) y el 1 de enero de 2030 (ZBE 3, con parte de Cappont), y desde 2028 también se restringe la etiqueta B a los no domiciliados. El 22 de enero de 2026 la Paeria suspendió temporalmente las restricciones por la parada de Rodalies.",
    faqs: () => [{ q: "Mi coche no tiene etiqueta pero pago el impuesto de circulación en Lleida: ¿puedo entrar?", a: "Sí. Todos los vehículos que pagan el IVTM en Lleida, con o sin etiqueta ambiental, pueden entrar en la ZBE sin restricciones y sin hacer ningún trámite. Deben tener el impuesto y la ITV en vigor. Esta exención no caduca mientras se pague el impuesto en la ciudad." }, { q: "Vengo de fuera de Lleida con un coche sin etiqueta: ¿cuántas veces puedo entrar?", a: "Cada vehículo dispone de 24 autorizaciones al año que se conceden de forma automática, sin inscribirse en el registro. Fuera del horario de lunes a viernes de 7.00 a 20.00 horas no hay restricción. Ahora mismo, además, las restricciones están suspendidas desde el 22 de enero de 2026 por la crisis de Rodalies." }, { q: "¿Qué pasará con la etiqueta B?", a: "Desde el 1 de enero de 2026 la etiqueta B está restringida en caso de episodio de contaminación. La autorización general de la etiqueta B rige hasta el 1 de enero de 2028, fecha en la que también entra la ZBE 2 con restricción para la B; los vehículos que pagan el IVTM en Lleida siguen exentos." }],
    body: (h) => `
<h2>Una suspensión sin fecha de vuelta</h2>
<p>El 22 de enero de 2026, siguiendo las indicaciones de la Generalitat, la Paeria suspendió temporalmente las restricciones de la ZBE mientras no se restablezca el servicio de Rodalies de Lleida. A fecha de nuestra comprobación, la página de noticias de la ZBE no publica ninguna reactivación, así que el simulador da hoy acceso condicionado. Cuando vuelva, la regla es la de la ordenanza: los vehículos sin etiqueta que no pagan el IVTM en Lleida no entran de lunes a viernes laborables de 7 a 20 h, salvo 24 accesos al año.</p>
<h2>2028 y 2030</h2>
<p>La ordenanza ya fija las ampliaciones: la ZBE 2 el 1 de enero de 2028, con restricción también para la etiqueta B de fuera, y la ZBE 3, con parte de Cappont, el 1 de enero de 2030. Los vehículos que pagan el impuesto en Lleida siguen exentos. En Cataluña, ${h.a('zbe-tarragona', "Tarragona")} reactivó su zona el 16 de marzo.</p>`,
  },
  en: {
    slug: "zbe-lleida",
    nav: "Lleida ZBE",
    card: "Restrictions suspended over Rodalies",
    title: "Lleida ZBE 2026: Suspended Over Rodalies, Phases to 2030",
    description: "Lleida low-emission zone 2026: the centre restricts out-of-town unlabelled cars on working days 7 am to 8 pm, but the council suspended it on 22 January 2026.",
    h1: "Lleida low-emission zone 2026: on hold while Rodalies fails",
    intro: "Lleida switched on its zone in 2025 and suspended it in January 2026 over the Rodalies rail crisis. The byelaw already dates the 2028 and 2030 extensions.",
    resume: () => "Lleida brought in ZBE 1 on 1 January 2025 in the historic centre, between Avinguda Blondel, Rambla d'Aragó, Avinguda Prat de la Riba and Avinguda Francesc Macià, among other roads. The restriction applies on working days, Monday to Friday, from 7am to 8pm, all year round, and affects vehicles without an environmental label. The byelaw set a six-month warning-only period without fines, and phase 1 went live on 1 July 2025. Vehicles paying road tax in Lleida are exempt, and vehicles from elsewhere get 24 entries a year with no paperwork. A breach carries a €200 fine, 30% more for a repeat offence. The zone will expand on 1 January 2028 (ZBE 2) and 1 January 2030 (ZBE 3, including part of Cappont), and from 2028 B labels are also restricted for vehicles not taxed in Lleida. On 22 January 2026 the council temporarily suspended the restrictions because of the Rodalies rail shutdown.",
    faqs: () => [{ q: "My car has no label but I pay road tax in Lleida: can I drive in?", a: "Yes. Every vehicle paying road tax (IVTM) in Lleida, with or without an environmental label, can enter the zone freely and with no paperwork. The tax and the MOT (ITV) must be up to date. The exemption lasts as long as the tax is paid in the city." }, { q: "I'm coming from outside Lleida in a car with no label: how many times can I enter?", a: "Each vehicle gets 24 permits a year, granted automatically with no registration. There is no restriction outside Monday to Friday, 7am to 8pm. On top of that, restrictions have been suspended since 22 January 2026 because of the Rodalies rail crisis, and no official reactivation had been announced when we checked." }, { q: "What will happen to B labels?", a: "Since 1 January 2026 B labels are restricted during pollution episodes. The general permit for B labels runs until 1 January 2028, when ZBE 2 also starts with restrictions on B labels; vehicles paying road tax in Lleida remain exempt." }],
    body: (h) => `
<h2>A suspension with no end date</h2>
<p>On 22 January 2026, following the Catalan government’s guidance, the council suspended the zone’s restrictions until the Rodalies rail service to Lleida is restored. When we checked, the zone’s news page showed no reactivation, so the tool currently gives conditional access. When it returns, the byelaw rule applies: unlabelled vehicles not paying road tax in Lleida may not enter on working weekdays from 7 am to 8 pm, except for 24 accesses a year.</p>
<h2>2028 and 2030</h2>
<p>The byelaw already sets the extensions: zone 2 on 1 January 2028, also restricting out-of-town B labels, and zone 3, including part of Cappont, on 1 January 2030. Vehicles paying road tax in Lleida remain exempt. Elsewhere in Catalonia, ${h.a('zbe-tarragona', "Tarragona")} switched its zone back on on 16 March.</p>`,
  },
});
