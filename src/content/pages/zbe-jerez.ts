import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-jerez", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 52, tool: 'zbe', ciudad: "jerez",
  related: ["zbe-cadiz", "zbe-sevilla", "zbe-cordoba", "multa-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-jerez",
    nav: "ZBE Jerez",
    card: "Intramuros con registro de autorizaciones",
    title: "ZBE Jerez 2026: intramuros, registro y avisos sin multa",
    description: "ZBE de Jerez 2026: el centro intramuros funciona con un registro de autorizaciones, no por etiqueta DGT; avisos sin multa desde febrero y parkings libres.",
    h1: "ZBE de Jerez 2026: un registro, no una etiqueta",
    intro: "En Jerez la ZBE permanente del intramuros pide una autorización del registro municipal, sea cual sea la etiqueta. Los parkings quedan libres.",
    resume: () => "Jerez aprobó definitivamente su Ordenanza de la Zona de Bajas Emisiones en el Pleno del 25 de julio de 2025 y la publicó en el BOP de Cádiz el 3 de septiembre de 2025. Según el Ayuntamiento, funciona desde el 4 de enero de 2026, tras el plazo de cuatro meses previsto en la ordenanza. La ZBE ocupa el centro histórico intramuros y tiene dos zonas. La Zona 1 es permanente: solo pueden circular los vehículos autorizados (residentes, garajes, PMR, servicios, hoteles, carga y descarga) y los que van a un parking público. La Zona 2 solo tendría restricciones si se activa el protocolo de alta contaminación. A diferencia de otras ciudades, el acceso no depende de la etiqueta DGT sino de la autorización del registro, que se pide en zbe.jerez.es y vale hasta el final del año natural. La ordenanza prevé multas de hasta 200 euros. El Ayuntamiento anunció que, desde el 15 de febrero de 2026, enviaría avisos en lugar de sanciones directas.",
    faqs: () => [{ q: "¿Necesito la etiqueta de la DGT para entrar en la ZBE de Jerez?", a: "No. El Ayuntamiento aclara que en Jerez el distintivo ambiental no sería necesario, ya que basta con la autorización. Lo que cuenta es estar inscrito en el registro de la ZBE como residente, usuario de garaje, PMR, servicio o carga y descarga." }, { q: "¿Puedo aparcar en un parking del centro sin autorización?", a: "Sí. Según el Ayuntamiento, no hace falta ninguna autorización para ir a los aparcamientos públicos siempre que el trayecto por la ZBE termine en ellos. Las cámaras de doble lectura de matrícula controlan esos accesos. No hace falta registrar la matrícula para ese trayecto." }, { q: "¿Ya ponen multas en la ZBE de Jerez?", a: "El Ayuntamiento anunció que, desde el 15 de febrero de 2026, no habría sanciones directas sino avisos que recuerdan la obligación de registrarse. La ordenanza prevé multas de hasta 200 euros, pero no se ha publicado una fecha oficial para empezar a aplicarlas." }],
    body: (h) => `
<h2>La autorización manda</h2>
<p>La Zona 1 de Jerez, el centro histórico intramuros, funciona las 24 horas con un registro de vehículos autorizados: residentes con tarjeta ORA, que se inscriben de oficio, garajes, personas con movilidad reducida, hoteles, carga y descarga y eventos. Las autorizaciones valen hasta el final del año natural. Quien va a un aparcamiento público no necesita autorización si el trayecto termina en el parking.</p>
<h2>Avisos antes que multas</h2>
<p>El sistema arrancó el 4 de enero de 2026 y el Ayuntamiento empezó a enviar avisos sin multa en febrero, sin fijar aún la fecha de las sanciones. La Zona 2, el resto del intramuros, solo se activaría con el protocolo de alta contaminación, que según el Ayuntamiento nunca se ha dado en Jerez. Para la capital, consulta ${h.a('zbe-cadiz', "la ZBE de Cádiz")}.</p>`,
  },
  en: {
    slug: "zbe-jerez",
    nav: "Jerez ZBE",
    card: "Walled centre with a permit register",
    title: "Jerez ZBE 2026: Walled Centre, Permit Register and Warnings",
    description: "Jerez low-emission zone 2026: the walled centre works through a permit register, not the DGT label; warnings without fines since February, car parks open.",
    h1: "Jerez low-emission zone 2026: a register, not a label",
    intro: "In Jerez the permanent zone inside the old walls requires a permit from the council register, whatever your label. Car parks stay open.",
    resume: () => "Jerez gave final approval to its Low-Emission Zone Byelaw at the council meeting of 25 July 2025 and published it in the Cádiz provincial gazette (BOP) on 3 September 2025. According to the council it has applied since 4 January 2026, after the four-month lead time set in the byelaw. The zone covers the walled historic centre and has two parts. Zone 1 is permanent: only authorised vehicles (residents, garage users, reduced mobility, services, hotels, loading) and vehicles heading to a public car park may drive there. Zone 2 would only be restricted if the high-pollution protocol were triggered. Unlike other cities, access does not depend on the DGT label but on a permit from the register, applied for at zbe.jerez.es and valid until the end of the calendar year. The byelaw allows fines of up to 200 euros. The council said that from 15 February 2026 it would send warnings rather than direct fines.",
    faqs: () => [{ q: "Do I need a DGT label to enter the Jerez low-emission zone?", a: "No. The council explains that the environmental label is not needed in Jerez, because the permit is enough. What matters is being on the zone register as a resident, garage user, reduced-mobility driver, service or loading vehicle. The label only matters elsewhere." }, { q: "Can I park in a car park in the centre without a permit?", a: "Yes. According to the council, no permit is needed to reach public car parks as long as the trip through the zone ends there. Dual number-plate cameras check those entrances. You do not need to register the plate for that trip, but the route must end in the car park." }, { q: "Are fines already being issued in Jerez?", a: "The council announced that from 15 February 2026 there would be no direct fines, only warnings reminding drivers to register. The byelaw allows fines of up to 200 euros, but no official start date for them has been published. Check the council site before driving in." }],
    body: (h) => `
<h2>The permit decides</h2>
<p>Jerez’s Zone 1, the historic centre inside the walls, runs 24 hours a day through a register of authorised vehicles: residents with an ORA parking card, who are added automatically, garages, people with reduced mobility, hotels, deliveries and events. Permits last until the end of the calendar year. Drivers heading for a public car park need no permit if their trip ends there.</p>
<h2>Warnings before fines</h2>
<p>The system started on 4 January 2026 and the council began sending warnings without fines in February, without yet setting a date for fines. Zone 2, the rest of the walled area, would only be switched on under the high-pollution protocol, which the council says has never been triggered in Jerez. For the provincial capital, see ${h.a('zbe-cadiz', "the Cádiz zone")}.</p>`,
  },
});
