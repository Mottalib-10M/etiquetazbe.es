import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('getafe');
export default definePage({
  id: 'zbe-getafe', group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 20, tool: 'zbe', ciudad: 'getafe',
  related: ['zbe-madrid', 'impuesto-circulacion-mostoles', 'etiqueta-b', 'madrid-central'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-getafe', nav: 'ZBE Getafe', card: 'B de fuera solo a parkings adheridos',
    title: 'ZBE Getafe 2026: etiqueta B, parkings y fase 2 prorrogada',
    description: 'ZBE Getafe 2026: Centro y San Isidro, sin etiqueta prohibido y B de fuera solo hacia parkings adheridos. La fase 3 queda suspendida desde el 1/1/2026.',
    h1: 'ZBE de Getafe 2026: la fase 2 sigue en vigor',
    intro: 'Getafe ha congelado el calendario de su zona mientras cambia la ordenanza. Hoy la etiqueta B de fuera solo puede entrar para aparcar.',
    resume: (h) => `La Zona de Bajas Emisiones de Getafe está en vigor desde el 27 de enero de 2025, tras publicarse la ordenanza en el BOCM del 24 de enero. Cubre los barrios de Centro y San Isidro, señalizados con una doble línea roja y las letras «ZBE» pintadas en la calzada, y la controla la Policía Local con cámaras en los accesos. En la fase 2, que la Junta de Gobierno decidió mantener a partir del 1 de enero de 2026 en lugar de pasar a la fase 3, los vehículos sin distintivo no pueden entrar salvo autorización, y los de etiqueta B no domiciliados en Getafe ni dados de alta en su IVTM solo pueden hacerlo si se dirigen a un aparcamiento público adherido a la ZBE. Las etiquetas C, ECO y 0 entran libremente, y los vehículos domiciliados en Getafe con B o C también. Los residentes de la zona no tienen restricción. La infracción es grave: ${h.eur(c.multa.importe)}, ${h.eur(c.multa.pronto_pago)} con pronto pago.`,
    faqs: (h) => [
      { q: '¿Qué habría cambiado con la fase 3 de Getafe?', a: 'La fase 3 del anexo III de la ordenanza debía empezar el 1 de enero de 2026, pero la Junta de Gobierno acordó el 27 de noviembre de 2025 suspenderla hasta que se apruebe la modificación de la ordenanza, publicada en el BOCM del 30 de diciembre. Mientras tanto se aplican las restricciones de 2025, las de la fase 2.' },
      { q: 'Soy de Leganés y voy al médico en el centro de Getafe con un coche B: ¿me multan?', a: 'Si vas a un aparcamiento público adherido a la ZBE, no. Además, el Ayuntamiento prevé autorizaciones para pacientes de centros sanitarios y veterinarios, pequeños comercios y sus proveedores, personas con discapacidad o dependencia y familiares. Atravesar la zona con una B de fuera sin ninguno de esos motivos sí es sancionable.' }, { q: `¿Una moto sin etiqueta puede entrar en la ZBE de Getafe?`, a: `No: el Ayuntamiento incluye entre los vehículos sin restricción a los ciclomotores, motocicletas, triciclos y cuatriciclos que cuentan con distintivo ambiental, sea cual sea (B, C, ECO o 0). Una moto sin etiqueta necesita autorización, como un coche sin etiqueta.` }
    ],
    body: (h) => `
<h2>Una ZBE para cortar el tráfico de paso</h2>
<p>Getafe está rodeada de autovías, y muchas de sus calles céntricas servían de atajo entre la A-4, la A-42 y la M-45. El Ayuntamiento señala que calles como Sierra, Leoncio Rojas, Jardines o General Palacio han ganado en calidad del aire con la zona. Por eso la regla castiga sobre todo al vehículo de fuera: el vecino domiciliado entra con B o C, el residente sin restricción, y quien solo cruza tiene que buscar otra ruta.</p>
<h2>El domicilio, en dos registros</h2>
<p>Para contar como domiciliado hay que figurar con domicilio en Getafe en el Registro de Vehículos de la DGT y estar de alta en el padrón del IVTM del Ayuntamiento. Cambiar solo uno de los dos no basta. Los ciclomotores, motos y cuadriciclos con cualquier distintivo circulan libremente, y las matrículas extranjeras o diplomáticas tienen su propio supuesto.</p>
<p>Getafe linda con Madrid, cuya ZBE municipal cierra toda la ciudad a los vehículos sin etiqueta: ${h.a('zbe-madrid', 'consulta sus reglas')} si vas a seguir hacia la capital.</p>`,
  },
  en: {
    slug: 'zbe-getafe', nav: 'Getafe ZBE', card: 'Out-of-town B only to approved car parks',
    title: 'Getafe ZBE 2026: B Label, Car Parks and Phase 2 Extended',
    description: 'Getafe low-emission zone 2026: no label banned, out-of-town B only to approved car parks, phase 3 suspended from 1/1/2026 while the byelaw changes. Dated.',
    h1: 'Getafe low-emission zone 2026: phase 2 stays in force',
    intro: 'Getafe has frozen its zone timetable while it changes the byelaw. Today an out-of-town B-label car may only enter to park.',
    resume: (h) => `Getafe’s low-emission zone has been in force since 27 January 2025, after the byelaw appeared in the Madrid regional gazette (BOCM) on 24 January. It covers the Centro and San Isidro neighbourhoods, marked by a double red line and the letters “ZBE” painted on the road, and the local police enforce it with cameras at the entries. In phase 2, which the city government chose to keep from 1 January 2026 instead of moving to phase 3, unlabelled vehicles may not enter without a permit, and B-label vehicles not registered in Getafe or on its road-tax roll may only do so to reach a public car park that is part of the scheme. C, ECO and zero labels enter freely, as do locally registered B and C vehicles. Residents of the zone have no restriction. The offence is serious: ${h.eur(c.multa.importe)}, or ${h.eur(c.multa.pronto_pago)} if paid early.`,
    faqs: (h) => [
      { q: 'What would phase 3 have changed in Getafe?', a: 'Phase 3 in annex III of the byelaw was due on 1 January 2026, but on 27 November 2025 the city government agreed to suspend it until the byelaw amendment is approved, as published in the BOCM on 30 December. Meanwhile the 2025 restrictions, those of phase 2, apply.' },
      { q: 'I live in Leganés and drive a B-label car to a doctor in central Getafe: will I be fined?', a: 'Not if you head to a public car park that is part of the zone. The council also provides permits for patients of health centres and vets, small shops and their suppliers, disabled or dependent people and relatives. Crossing the zone in an out-of-town B car without one of those reasons can be fined.' }, { q: `Can an unlabelled motorbike enter Getafe’s zone?`, a: `No: the council lists mopeds, motorbikes, tricycles and quadricycles with any environmental label (B, C, ECO or zero) among unrestricted vehicles. An unlabelled motorbike needs a permit, like an unlabelled car. Permits are requested from the local police by email or phone, and some cases such as patients or relatives qualify.` }
    ],
    body: (h) => `
<h2>A zone to cut through traffic</h2>
<p>Getafe is ringed by motorways, and many central streets used to serve as shortcuts between the A-4, A-42 and M-45. The council says streets such as Sierra, Leoncio Rojas, Jardines and General Palacio have cleaner air since the zone began. That is why the rule mainly targets outside vehicles: locally registered cars get in with B or C, residents have no limit, and through traffic has to find another route.</p>
<h2>Registration in two records</h2>
<p>To count as local, the car must have a Getafe address on the DGT vehicle register and be on the council’s road-tax roll. Changing only one is not enough. Mopeds, motorbikes and quadricycles with any label drive freely, and foreign or diplomatic plates have their own provision.</p>
<p>Getafe borders Madrid, whose municipal zone closes the whole city to unlabelled vehicles: ${h.a('zbe-madrid', 'check its rules')} if you are driving on into the capital.</p>`,
  },
});
