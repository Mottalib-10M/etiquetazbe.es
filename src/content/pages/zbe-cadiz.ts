import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-cadiz", group: 'zbe', order: 45, tool: 'zbe', ciudad: "cadiz",
  related: ["zbe-jerez", "zbe-sevilla", "zbe-malaga", "multa-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-cadiz",
    nav: "ZBE Cádiz",
    card: "Casco antiguo y Paseo Marítimo, libre para los gaditanos",
    title: "ZBE Cádiz 2026: casco antiguo, Paseo Marítimo y domicilio",
    description: "ZBE de Cádiz 2026: Centro Histórico y Paseo Marítimo en vigor desde mayo; coches sin etiqueta y B de fuera, restringidos; los que pagan el IVTM en Cádiz, libres",
    h1: "ZBE de Cádiz 2026: dos zonas y la ventaja de pagar aquí el impuesto",
    intro: "En Cádiz lo que cuenta es dónde paga el coche el impuesto de circulación: los domiciliados en la ciudad entran con cualquier etiqueta.",
    resume: () => "El Pleno de Cádiz aprobó definitivamente la Ordenanza de la Zona de Bajas Emisiones el 30 de diciembre de 2025, y el BOP de Cádiz la publicó el 26 de mayo de 2026. Entró en vigor al día siguiente, el 27 de mayo de 2026. Hay dos zonas activas las 24 horas todo el año: el Centro Histórico (1,13 km², sin la ronda de circunvalación) y el Paseo Marítimo (0,11 km²). Los vehículos con domicilio fiscal en Cádiz, que pagan allí el IVTM, entran con cualquier etiqueta, igual que los 0 y ECO. Durante el primer año, los vehículos de fuera pueden entrar si tienen etiqueta 0, ECO o C; desde el segundo año, solo con 0 o ECO. Los vehículos de fuera sin etiqueta o con etiqueta B no pueden entrar salvo autorización o exención. La multa es de 200 euros, un 30 % más por reincidencia, pero la ordenanza permite un periodo de aviso sin sanciones de hasta seis meses.",
    faqs: () => [{ q: "Vivo fuera de Cádiz y mi coche tiene etiqueta C, ¿puedo entrar al casco antiguo?", a: "Sí durante el primer año desde la puesta en funcionamiento de la ZBE: la ordenanza permite a los vehículos sin domicilio fiscal en Cádiz entrar si tienen etiqueta 0, ECO o C. A partir del segundo año, los de fuera solo podrán entrar con etiqueta 0 o ECO." }, { q: "Pago el impuesto de circulación en Cádiz, ¿me afecta la ZBE?", a: "No por la etiqueta. Los vehículos con domicilio fiscal en el término municipal de Cádiz, que abonan allí el IVTM, tienen libre acceso, circulación y estacionamiento sin necesidad de autorización. Siguen obligados a respetar las calles peatonales o restringidas. La etiqueta solo cuenta para los vehículos de fuera." }, { q: "¿La ronda del casco antiguo forma parte de la ZBE?", a: "No. El Anexo I excluye la ronda de circunvalación que delimita el casco antiguo: Campo del Sur, Avenida del Puerto, Paseo Carlos III, Alameda y el resto de vías citadas. Se puede circular por ellas sin restricción ZBE. Es el camino natural para rodear el centro." }],
    body: (h) => `
<h2>El domicilio fiscal decide</h2>
<p>La ordenanza de Cádiz protege a todos los vehículos que pagan el IVTM en la ciudad, sin mirar la etiqueta. Para los de fuera, la zona del Centro Histórico, 1,13 km² sin la ronda de circunvalación, y la del Paseo Marítimo, 0,11 km², restringen a los coches sin etiqueta y a los B. Las cámaras leen la matrícula en los accesos.</p>
<h2>Avisos antes que multas</h2>
<p>La ordenanza entró en vigor el 27 de mayo de 2026 y permite al Ayuntamiento un periodo de aviso sin multas de hasta seis meses, sin que haya publicado la fecha de inicio de las sanciones. El texto ya fija el horizonte: desde 2035 solo entrarán los vehículos 0 y ECO, salvo excepciones. Si vienes de la bahía, ${h.a('zbe-jerez', "la ZBE de Jerez")} funciona con un registro de autorizaciones.</p>`,
  },
  en: {
    slug: "zbe-cadiz",
    nav: "Cádiz ZBE",
    card: "Old town and seafront, free for locals",
    title: "Cádiz ZBE 2026: Old Town, Seafront and Where You Pay Tax",
    description: "Cádiz low-emission zone 2026: Old Town and seafront zones in force since May; out-of-town unlabelled and B cars restricted, cars paying road tax in Cádiz free.",
    h1: "Cádiz low-emission zone 2026: two zones and the local tax advantage",
    intro: "In Cádiz what counts is where the car pays road tax: vehicles registered in the city enter with any label.",
    resume: () => "Cádiz council gave final approval to its Low-Emission Zone Byelaw on 30 December 2025, and the Cádiz provincial gazette (BOP) published it on 26 May 2026. It came into force the next day, 27 May 2026. There are two zones, active 24 hours a day all year: the Historic Centre (1.13 km², excluding the ring road) and the Paseo Marítimo seafront (0.11 km²). Vehicles taxed in Cádiz, which pay their road tax (IVTM) there, may enter with any label, as may 0 and ECO vehicles. In the first year, outside vehicles may enter with a 0, ECO or C label; from the second year, only with 0 or ECO. Outside vehicles with no label or a B label may not enter unless authorised or exempt. The fine is 200 euros, 30% more for repeat offenders, but the byelaw allows a warning period without fines of up to six months.",
    faqs: () => [{ q: "I live outside Cádiz and my car has a C label. Can I drive into the old town?", a: "Yes, during the first year after the zone started: the byelaw lets vehicles not taxed in Cádiz enter with a 0, ECO or C label. From the second year, outside vehicles will only be allowed in with a 0 or ECO label." }, { q: "I pay my road tax in Cádiz. Does the zone affect me?", a: "Not because of your label. Vehicles taxed in the municipality of Cádiz, which pay their road tax (IVTM) there, have free access, movement and parking without a permit. They must still respect pedestrian or restricted streets. The label only matters for vehicles taxed elsewhere." }, { q: "Is the ring road around the old town part of the zone?", a: "No. Annex I leaves out the ring road around the old town: Campo del Sur, Avenida del Puerto, Paseo Carlos III, the Alameda and the other roads listed. You can drive on them with no low-emission restriction. It is the natural way round the centre." }],
    body: (h) => `
<h2>The tax address decides</h2>
<p>Cádiz’s byelaw protects every vehicle paying road tax (IVTM) in the city, whatever its label. For outsiders, the Old Town zone, 1.13 km² excluding the ring road, and the seafront zone, 0.11 km², restrict unlabelled and B-label cars. Cameras read plates at the entrances.</p>
<h2>Warnings before fines</h2>
<p>The byelaw took effect on 27 May 2026 and allows the council a warning period of up to six months without fines, and it has not published the date fines will start. The text already sets the horizon: from 2035 only zero and ECO vehicles will enter, with exceptions. If you are coming from around the bay, ${h.a('zbe-jerez', "the Jerez zone")} works through a permit register.</p>`,
  },
});
