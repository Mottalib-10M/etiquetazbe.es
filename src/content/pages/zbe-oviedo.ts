import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-oviedo", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 55, tool: 'zbe', ciudad: "oviedo",
  related: ["zbe-a-coruna", "zbe-leon", "zbe-santander", "sin-etiqueta"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-oviedo",
    nav: "ZBE Oviedo",
    card: "Anillo interior ya, exterior en 2027",
    title: "ZBE Oviedo 2026: anillo interior y exterior desde 2027",
    description: "ZBE de Oviedo 2026: anillo interior cerrado a coches sin etiqueta DGT de no residentes desde el 31/12/2025; el exterior, desde el 31/12/2027. Sin multas aún.",
    h1: "ZBE de Oviedo 2026: dos anillos y un periodo sin multas",
    intro: "Oviedo cerró su anillo interior a los coches sin etiqueta el último día de 2025 y hará lo mismo con el exterior a finales de 2027.",
    resume: () => "Oviedo tiene una Zona de Bajas Emisiones aprobada definitivamente por el Pleno el 2 de diciembre de 2025 y publicada en el BOPA n.º 243 del 18 de diciembre de 2025. Se divide en dos anillos: el interior, en el centro (Uría, Campomanes, Covadonga y alrededores), y el exterior, más amplio, hasta la Ronda Sur, General Elorza y la avenida de Santander. Solo afecta a los vehículos sin etiqueta ambiental: en el anillo interior desde el 31 de diciembre de 2025 y en el exterior desde el 31 de diciembre de 2027. Los vehículos B, C, ECO y 0 circulan libremente salvo en episodios de alta contaminación. El Ayuntamiento anunció un periodo informativo sin multas y que la fecha de inicio de las sanciones se avisaría con antelación. La infracción es grave: 200 euros, con un recargo del 30 % por reincidencia en un año. Los residentes empadronados, los históricos y quienes van a un aparcamiento público (15 minutos) están exentos.",
    faqs: () => [{ q: "¿Puedo entrar al centro de Oviedo con un coche sin etiqueta para aparcar en un parking público?", a: "Sí. La ordenanza permite el acceso sin autorización previa a los vehículos que vayan a un aparcamiento de uso público. La entrada al parking debe hacerse como máximo en 15 minutos desde el acceso a la ZBE. Si no llegas a tiempo, la entrada cuenta como acceso no autorizado." }, { q: "¿Afecta la ZBE de Oviedo a los coches con etiqueta B?", a: "No. Los vehículos con distintivo B, C, ECO y 0 tienen libre acceso, circulación y estacionamiento en los dos anillos. Solo podrían verse afectados si se activa el protocolo por episodios de alta contaminación. El anillo exterior solo cerrará a los vehículos sin etiqueta, desde el 31 de diciembre de 2027." }, { q: "Tengo una furgoneta de trabajo sin etiqueta, ¿qué hago?", a: "Puedes pedir una autorización temporal y no renovable para acceder, circular y estacionar en la ZBE, válida como máximo hasta el 1 de enero de 2031. Es necesario ser titular del vehículo desde antes del 31 de diciembre de 2025." }],
    body: (h) => `
<h2>Avisos hasta nueva fecha</h2>
<p>La ordenanza de Oviedo, publicada en el Boletín Oficial del Principado de Asturias el 18 de diciembre de 2025, restringe desde el 31 de diciembre a los vehículos sin etiqueta que no son de residentes en el anillo interior. El Ayuntamiento anunció un periodo sin multas y que comunicaría con antelación la fecha de las primeras sanciones, que no hemos encontrado publicada. Por eso el simulador marca el acceso como condicionado.</p>
<h2>Quince minutos para el aparcamiento</h2>
<p>Los clientes de aparcamientos públicos tienen 15 minutos para entrar en el parking, y los residentes empadronados se dan de alta de forma automática si constan en la DGT. Los profesionales y transportistas con vehículo propio desde antes del 31 de diciembre de 2025 pueden pedir una autorización no renovable hasta el 1 de enero de 2031. Si vas al otro lado de la cordillera, ${h.a('zbe-leon', "León")} usa un protocolo de alerta.</p>`,
  },
  en: {
    slug: "zbe-oviedo",
    nav: "Oviedo ZBE",
    card: "Inner ring now, outer ring in 2027",
    title: "Oviedo ZBE 2026: Inner Ring Now, Outer Ring From 2027",
    description: "Oviedo low-emission zone 2026: the inner ring closed to non-residents’ unlabelled cars since 31/12/2025, the outer ring from 31/12/2027. No-fine period. Dated.",
    h1: "Oviedo low-emission zone 2026: two rings and a no-fine period",
    intro: "Oviedo closed its inner ring to unlabelled cars on the last day of 2025 and will do the same with the outer ring at the end of 2027.",
    resume: () => "Oviedo's Low Emission Zone was given final approval by the city council on 2 December 2025 and published in the Asturias official gazette (BOPA no. 243) on 18 December 2025. It has two rings: the inner ring in the centre (Uría, Campomanes, Covadonga and surroundings) and a wider outer ring out to the Ronda Sur, General Elorza and avenida de Santander. It only affects vehicles without an environmental label: in the inner ring from 31 December 2025 and in the outer ring from 31 December 2027. B, C, ECO and 0 vehicles drive freely except during high-pollution episodes. The council announced an information period without fines and said the date fines start would be announced in advance. Breaking the rule is a serious offence: 200 euros, with a 30% surcharge for a repeat offence within a year. Registered residents, historic vehicles and drivers heading to a public car park (15 minutes) are exempt.",
    faqs: () => [{ q: "Can I drive into central Oviedo without a label to park in a public car park?", a: "Yes. The byelaw lets vehicles heading to a public car park in without prior authorisation. You must enter the car park within 15 minutes of entering the zone. If you take longer, the entry counts as unauthorised. Residents registered in the zone are added automatically." }, { q: "Does Oviedo's LEZ affect B-label cars?", a: "No. Vehicles with a B, C, ECO or 0 label can enter, drive and park freely in both rings. They could only be affected if the high-pollution protocol is triggered. The outer ring will only close to unlabelled vehicles, from 31 December 2027." }, { q: "I have a work van without a label. What can I do?", a: "You can apply for a temporary, non-renewable authorisation to enter, drive and park in the zone, valid until 1 January 2031 at the latest. You must have owned the vehicle since before 31 December 2025. It is not renewable. Apply to the council." }],
    body: (h) => `
<h2>Warnings until a date is set</h2>
<p>Oviedo’s byelaw, published in the Asturias official gazette on 18 December 2025, has restricted non-residents’ unlabelled vehicles in the inner ring since 31 December. The council announced a period without fines and said it would give advance notice of the first fines, a date we have not found published. That is why the tool shows access as conditional.</p>
<h2>Fifteen minutes to the car park</h2>
<p>Drivers using public car parks have 15 minutes to get into the car park, and registered residents are added automatically if they appear on the DGT records. Tradespeople and hauliers who owned their vehicle before 31 December 2025 can request a one-off permit until 1 January 2031. Across the mountains, ${h.a('zbe-leon', "León")} uses an alert protocol instead.</p>`,
  },
});
