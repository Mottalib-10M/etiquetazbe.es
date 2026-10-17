import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-vigo", group: 'zbe', order: 62, tool: 'zbe', ciudad: "vigo",
  related: ["zbe-a-coruna", "zbe-oviedo", "moto-zbe", "etiqueta-c"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-vigo",
    nav: "ZBE Vigo",
    card: "Cuatro zonas y tres fases de dos años",
    title: "ZBE Vigo 2026: cuatro zonas, tres fases y motos exentas",
    description: "ZBE de Vigo 2026: Centro, Praza de Portugal, Calvario y Bouzas, aprobadas en julio; fases de dos años contra A, luego B y luego C, con un año de avisos en cada.",
    h1: "ZBE de Vigo 2026: cuatro zonas a la espera del boletín",
    intro: "Vigo aprobó en julio de 2026 cuatro zonas de bajas emisiones con un calendario en tres fases. Entrarán en vigor al publicarse en el boletín.",
    resume: () => "Vigo aprobó definitivamente su Ordenanza de zonas de bajas emisiones en el Pleno del 27 de julio de 2026, tras la aprobación inicial del 25 de mayo y la desestimación de siete alegaciones. Crea cuatro ZBE: Centro (39 ha), Praza de Portugal (4 ha), Calvario (14 ha) y Bouzas (17 ha). Se aplica en tres fases de dos años desde la entrada en vigor: primero los vehículos sin etiqueta, luego también los B y finalmente los C. El primer año de cada fase es atenuado: solo hay seguimiento por cámaras y avisos informativos a los titulares. Los vehículos ECO y 0 no están afectados. Los empadronados y los vehículos domiciliados en una zona, comercios y autónomos con local dentro, PMR, servicios esenciales, históricos y motos (de 7:00 a 22:00) tienen autorización general. Cualquier vehículo puede entrar para aparcar en un parking o zona de parquímetros dentro de la ZBE. La ordenanza entra en vigor al publicarse íntegramente en el BOP de Pontevedra.",
    faqs: () => [{ q: "¿Cuándo empezarán las multas de la ZBE de Vigo?", a: "La ordenanza establece que el primer año de cada fase es de aplicación atenuada, con seguimiento por cámaras y avisos informativos a los titulares detectados. Las sanciones llegarían tras ese primer año, contado desde la entrada en vigor, que depende de la publicación íntegra en el BOP de Pontevedra." }, { q: "Mi coche tiene etiqueta B, ¿podré entrar en el centro de Vigo?", a: "Sí durante la primera fase, que solo afecta a los vehículos sin etiqueta. Los vehículos B quedarán incluidos en la segunda fase, dos años después de la entrada en vigor, y los C en la tercera. El primer año de cada fase solo hay avisos." }, { q: "¿Puedo entrar en la ZBE para aparcar en un parking?", a: "Sí. La ordenanza autoriza a cualquier vehículo a acceder únicamente para estacionar en un aparcamiento de uso público o privado, en la zona de parquímetros o en una reserva de estacionamiento situados dentro de la ZBE. Lo mismo vale para las motos de 7 a 22 h." }],
    body: (h) => `
<h2>Cuatro zonas, 74 hectáreas</h2>
<p>La ordenanza aprobada por el Pleno el 27 de julio de 2026 crea cuatro zonas: Centro, de 39 hectáreas, Praza de Portugal, de 4, Calvario, de 14, y Bouzas, de 17. Las restricciones avanzan en tres fases de dos años desde la entrada en vigor: primero los vehículos sin etiqueta, después también la B y por último la C. El primer año de cada fase solo se envían avisos informativos.</p>
<h2>Lo que no cambia</h2>
<p>Los empadronados en una zona y los vehículos domiciliados en ella con el IVTM en Vigo quedan fuera, igual que sus invitados, las empresas con local dentro y quien va a aparcar en un parking, zona de parquímetros o reserva. Las motos y ciclomotores están exentos de 7 a 22 h. La fecha de entrada en vigor depende de la publicación íntegra en el Boletín Oficial de la Provincia, que no hemos podido verificar. Si vas en moto, consulta ${h.a('moto-zbe', "la guía de motos")}.</p>`,
  },
  en: {
    slug: "zbe-vigo",
    nav: "Vigo ZBE",
    card: "Four zones and three two-year phases",
    title: "Vigo ZBE 2026: Four Zones, Three Phases, Motorbikes Exempt",
    description: "Vigo low-emission zones 2026: Centro, Praza de Portugal, Calvario and Bouzas, approved in July; two-year phases against A, then B, then C, with warnings first.",
    h1: "Vigo low-emission zones 2026: four zones awaiting the gazette",
    intro: "In July 2026 Vigo approved four low-emission zones with a three-phase timetable. They take effect once published in the provincial gazette.",
    resume: () => "Vigo's city council gave final approval to its Low Emission Zones Byelaw on 27 July 2026, after initial approval on 25 May and the rejection of seven objections. It creates four zones: Centro (39 ha), Praza de Portugal (4 ha), Calvario (14 ha) and Bouzas (17 ha). It applies in three two-year phases from the day it comes into force: first vehicles without a label, then B vehicles too and finally C vehicles. The first year of each phase is a soft start: only camera monitoring and information notices to owners. ECO and 0 vehicles are not affected. Registered residents and vehicles registered in a zone, shops and self-employed people with premises inside, blue-badge holders, essential services, historic vehicles and motorbikes (7:00 to 22:00) have a general authorisation. Any vehicle may enter to park in a car park or pay-and-display area inside the zone. The byelaw comes into force once published in full in the Pontevedra provincial gazette.",
    faqs: () => [{ q: "When will fines start in Vigo's LEZ?", a: "The byelaw makes the first year of each phase a soft start, with camera monitoring and information notices to the owners detected. Fines would follow after that first year, counted from entry into force, which depends on full publication in the Pontevedra provincial gazette." }, { q: "My car has a B label. Can I drive into central Vigo?", a: "Yes during phase 1, which only affects vehicles without a label. B vehicles will be included in phase 2, two years after the byelaw comes into force, and C vehicles in phase 3. The first year of each phase brings warnings only." }, { q: "Can I enter the zone to park in a car park?", a: "Yes. The byelaw lets any vehicle in solely to park in a public or private car park, a pay-and-display area or a reserved space inside the zone. The same goes for motorbikes from 7 am to 10 pm, which are exempt in that window." }],
    body: (h) => `
<h2>Four zones, 74 hectares</h2>
<p>The byelaw passed by the full council on 27 July 2026 creates four zones: Centro, 39 hectares, Praza de Portugal, 4, Calvario, 14, and Bouzas, 17. Restrictions advance in three two-year phases from the date it takes effect: first unlabelled vehicles, then B labels too, and finally C labels. In the first year of each phase only warning notices are sent.</p>
<h2>What does not change</h2>
<p>People registered in a zone and vehicles registered there that pay road tax in Vigo are outside the rules, as are their guests, businesses with premises inside and drivers heading for a car park, pay-and-display area or reserved space. Motorbikes and mopeds are exempt from 7 am to 10 pm. The start date depends on full publication in the provincial gazette, which we could not confirm. If you ride a motorbike, see ${h.a('moto-zbe', "the motorbike guide")}.</p>`,
  },
});
