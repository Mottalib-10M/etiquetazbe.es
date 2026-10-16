import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-albacete", group: 'zbe', order: 41, tool: 'zbe', ciudad: "albacete",
  related: ["zbe-madrid", "sin-etiqueta", "multa-zbe", "coche-extranjero-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-albacete",
    nav: "ZBE Albacete",
    card: "Centro cerrado a los coches sin etiqueta de fuera",
    title: "ZBE Albacete 2026: coches sin etiqueta de fuera y excepción",
    description: "ZBE de Albacete 2026: el centro, desde el paseo de la Libertad, cerrado a vehículos sin etiqueta DGT que no son del padrón municipal. Parking, zona azul, multa.",
    h1: "ZBE de Albacete 2026: el centro y los coches sin etiqueta",
    intro: "Albacete aprobó su ZBE en junio de 2026 y solo afecta a los vehículos sin etiqueta que no pagan aquí el impuesto. Mira si tu coche entra.",
    resume: () => "Albacete aprobó definitivamente su Ordenanza de la Zona de Bajas Emisiones en el Pleno del 23 de junio de 2026 y la publicó en el BOP n.º 73 del 26 de junio de 2026. La ZBE abarca las calles interiores de un perímetro céntrico formado, entre otras, por el paseo de la Libertad, Feria, Alcalde Conangla, Hermanos Falcó, avenida de España y Octavio Cuartero, e incluye varias zonas peatonales con normas propias. Solo se restringen los vehículos sin etiqueta ambiental; los B, C, ECO y 0 circulan libremente. Los coches sin etiqueta del padrón municipal de vehículos de Albacete pueden entrar sin trámites, igual que quienes van a un parking público en 10 minutos o sacan tique de zona azul. La ordenanza entró en vigor al día siguiente de su publicación y fijó 3 meses de fase informativa, sin multas, que terminó el 27 de septiembre de 2026. La multa es de 200 euros, 100 euros si se paga en 20 días naturales. Hay autorizaciones para empadronados, rentas bajas según el IPREM, hoteles, talleres y otros colectivos.",
    faqs: () => [{ q: "Vivo fuera de Albacete y mi coche no tiene etiqueta, ¿puedo entrar en el centro?", a: "Solo en algunos casos: si vas a un parking público de la ZBE y entras en él en un máximo de 10 minutos, si sacas tique de zona azul dentro de la ZBE, o si es un vehículo histórico. Fuera de esos casos la multa es de 200 euros." }, { q: "Mi coche paga el impuesto de circulación en Albacete pero no tiene etiqueta, ¿tengo que hacer algo?", a: "No. Los vehículos sin etiqueta que figuran en el padrón municipal de vehículos de Albacete, pedanías y Aguas Nuevas incluidas, pueden acceder, circular y estacionar sin más trámites. Solo los vehículos de fuera del padrón necesitan una excepción, como ir a un parking de la zona en diez minutos o sacar tique de zona azul." }, { q: "¿Desde cuándo multa la ZBE de Albacete?", a: "La ordenanza entró en vigor al día siguiente de su publicación en el BOP del 26 de junio de 2026 y estableció 3 meses de denuncias solo informativas. Según ese cálculo, las multas de 200 euros se aplican desde el 27 de septiembre de 2026." }],
    body: (h) => `
<h2>Diez minutos para llegar al parking</h2>
<p>La ordenanza de Albacete deja una salida práctica al conductor de fuera con un coche sin etiqueta: puede entrar si llega a un aparcamiento público de la zona en un máximo de diez minutos o si saca tique de zona azul. Las cámaras leen la matrícula y el sistema cruza el tiempo entre el acceso y la entrada al parking, sin captar la imagen de los ocupantes.</p>
<h2>Renta baja y vecinos</h2>
<p>Los vehículos del padrón municipal quedan fuera de la restricción, y los empadronados que no figuren en él pueden pedir autorización. La ordenanza también prevé permisos para unidades familiares con ingresos por debajo de entre 2 y 4 veces el IPREM según su tamaño. Si no sabes qué distintivo tienes, ${h.a('etiqueta-dgt', "el simulador de etiqueta")} lo calcula con la fecha y el combustible.</p>`,
  },
  en: {
    slug: "zbe-albacete",
    nav: "Albacete ZBE",
    card: "Centre closed to out-of-town unlabelled cars",
    title: "Albacete ZBE 2026: Out-of-Town Unlabelled Cars, Exceptions",
    description: "Albacete low-emission zone 2026: the centre inside Paseo de la Libertad is closed to unlabelled vehicles not on the town’s vehicle register. Car parks, fines.",
    h1: "Albacete low-emission zone 2026: the centre and unlabelled cars",
    intro: "Albacete approved its zone in June 2026 and it only affects unlabelled vehicles that do not pay road tax in the town. See whether your car can enter.",
    resume: () => "Albacete gave final approval to its Low Emission Zone byelaw at the council meeting of 23 June 2026 and published it in the provincial gazette (BOP no. 73) on 26 June 2026. The zone covers the streets inside a central ring that includes Paseo de la Libertad, Feria, Alcalde Conangla, Hermanos Falcó, Avenida de España and Octavio Cuartero, plus several pedestrian zones with their own rules. Only vehicles without an environmental label are restricted; labels B, C, ECO and 0 drive freely. Label-less cars on Albacete's municipal vehicle register can enter with no paperwork, as can drivers heading to a public car park within 10 minutes or buying a pay-and-display ticket. The byelaw took effect the day after publication and set a 3-month warning period without fines, which ended on 27 September 2026. The fine is €200, or €100 if paid within 20 calendar days. Permits are available for registered residents, low-income households (IPREM thresholds), hotels, garages and other groups.",
    faqs: () => [{ q: "I live outside Albacete and my car has no label. Can I drive into the centre?", a: "Only in some cases: if you are heading to a public car park in the zone and enter it within 10 minutes, if you buy a pay-and-display ticket inside the zone, or if the car is a historic vehicle. Otherwise the fine is €200." }, { q: "My car pays road tax in Albacete but has no label. Do I need to do anything?", a: "No. Label-less vehicles on Albacete's municipal vehicle register, including the outlying districts and Aguas Nuevas, can enter, drive and park with no further paperwork. Only vehicles from outside the register need an exception, such as reaching a car park in the zone within ten minutes or buying a blue-zone ticket." }, { q: "Since when does Albacete's zone issue fines?", a: "The byelaw took effect the day after its publication in the gazette on 26 June 2026 and set 3 months of warning-only notices. On that basis, €200 fines apply from 27 September 2026. The fine drops to €100 if paid within 20 days." }],
    body: (h) => `
<h2>Ten minutes to reach the car park</h2>
<p>Albacete’s byelaw leaves out-of-town drivers of unlabelled cars a practical way in: they may enter if they reach a public car park in the zone within ten minutes, or buy a blue-zone parking ticket. Cameras read the plate and the system matches the time between entering the zone and entering the car park, without recording images of the occupants.</p>
<h2>Low incomes and residents</h2>
<p>Vehicles on the town’s register are outside the restriction, and registered residents whose car is not on it can apply for a permit. The byelaw also provides permits for households earning less than 2 to 4 times the IPREM index, depending on their size. If you do not know which label you have, ${h.a('etiqueta-dgt', "the label calculator")} works it out from the date and fuel.</p>`,
  },
});
