import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-burgos", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 44, tool: 'zbe', ciudad: "burgos",
  related: ["zbe-valladolid", "zbe-salamanca", "zbe-leon", "sin-etiqueta"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-burgos",
    nav: "ZBE Burgos",
    card: "Moratoria sin multas hasta agosto de 2027",
    title: "ZBE Burgos 2026: moratoria sin multas hasta agosto de 2027",
    description: "ZBE de Burgos 2026: el centro restringe los coches sin etiqueta DGT, con cámaras y sin multas hasta el 5 de agosto de 2027. Excepciones y multa de 200 €.",
    h1: "ZBE de Burgos 2026: cámaras puestas, multas en 2027",
    intro: "Burgos tiene la ordenanza desde 2024 y las cámaras desde febrero de 2026, pero no multará hasta agosto de 2027. Solo afecta a los coches sin etiqueta.",
    resume: () => "Burgos aprobó definitivamente su ordenanza de Zona de Bajas Emisiones en el Pleno del 19 de julio de 2024 y la publicó en el BOP n.º 149 del 5 de agosto de 2024. La ZBE abarca el centro de la ciudad, dentro de un perímetro de calles cuya circulación es libre salvo tres tramos. Solo se restringen los vehículos sin etiqueta ambiental; los B, C, ECO y 0 entran libremente, las 24 horas. Las cámaras de lectura de matrículas ya están instaladas y el 6 de febrero de 2026 empezó una moratoria de 18 meses sin multas. La moratoria termina el 5 de agosto de 2027; desde entonces la multa será de 200 euros (100 euros con pronto pago). Los vehículos domiciliados en la zona o de personas empadronadas en ella quedan exentos.",
    faqs: () => [{ q: "¿Me pueden multar ya en la ZBE de Burgos?", a: "No. Hasta el 5 de agosto de 2027 rige una moratoria y no se imponen sanciones, aunque se puede enviar un documento informativo al infractor. Desde el 6 de agosto de 2027 la multa es de 200 euros. Las cámaras ya funcionan y registran los accesos." }, { q: "Mi coche tiene etiqueta B, ¿puedo entrar en el centro de Burgos?", a: "Sí. La ordenanza permite acceder, circular y estacionar a los vehículos con distintivo 0 emisiones, ECO, C y B. La restricción afecta solo a los vehículos sin etiqueta. Si tu coche es B, no tienes que inscribirte en ningún registro ni pedir autorización para entrar en el centro, de día o de noche." }, { q: "Tengo una cita médica dentro de la ZBE y mi coche no tiene etiqueta, ¿qué hago?", a: "Los vehículos que acceden a hospitales, citas médicas, centros de donación y clínicas veterinarias de la ZBE pueden entrar con autorización municipal. Hay que solicitarla al Ayuntamiento. La autorización es temporal y cubre el acceso a la cita; las clínicas veterinarias de la zona están incluidas." }],
    body: (h) => `
<h2>Dieciocho meses de aviso</h2>
<p>El Ayuntamiento recibió la instalación de cámaras y abrió el 6 de febrero de 2026, con un anuncio en el Boletín Oficial de la Provincia, una moratoria de 18 meses. Hasta el 5 de agosto de 2027 la entrada de un coche sin etiqueta en el centro no se multa; desde el 6 de agosto, sí, con 200 euros, o 100 con pronto pago. El simulador cambia de respuesta solo ese día.</p>
<h2>Quién queda fuera</h2>
<p>La restricción no alcanza a los vehículos domiciliados en la zona ni a los de los empadronados en ella, y tampoco a garajes privados, comercios y autónomos con local dentro, taxis, VTC, servicios esenciales o históricos. Hay autorizaciones temporales para citas médicas, talleres, mudanzas o alojamientos. Si viajas por Castilla y León, ${h.a('zbe-valladolid', "Valladolid")} ya multa y ${h.a('zbe-salamanca', "Salamanca")} empezará en 2029.</p>`,
  },
  en: {
    slug: "zbe-burgos",
    nav: "Burgos ZBE",
    card: "No-fine grace period until August 2027",
    title: "Burgos ZBE 2026: No-Fine Grace Period Until August 2027",
    description: "Burgos low-emission zone 2026: the centre restricts unlabelled cars, with cameras in place and no fines until 5 August 2027. Exceptions and the €200 fine.",
    h1: "Burgos low-emission zone 2026: cameras on, fines in 2027",
    intro: "Burgos has had its byelaw since 2024 and cameras since February 2026, but will not fine until August 2027. Only unlabelled cars are affected.",
    resume: () => "Burgos gave final approval to its low-emission zone byelaw at the council meeting of 19 July 2024 and published it in the provincial gazette (BOP no. 149) on 5 August 2024. The zone covers the city centre, inside a ring of streets that stay open to all traffic except three stretches. Only vehicles without an environmental label are restricted; B, C, ECO and zero-emission vehicles enter freely, 24 hours a day. Number-plate cameras are installed and an 18-month no-fine grace period began on 6 February 2026. It ends on 5 August 2027; after that the fine will be 200 euros (100 euros if paid early). Vehicles registered at an address in the zone or owned by people registered as living there are exempt.",
    faqs: () => [{ q: "Can I be fined in the Burgos low-emission zone now?", a: "No. A grace period runs until 5 August 2027 and no fines are issued, although drivers may receive a warning letter. From 6 August 2027 the fine is 200 euros. The cameras are already working and logging entries. Paying early halves the fine." }, { q: "My car has a B label: can I drive into central Burgos?", a: "Yes. The byelaw lets vehicles with a zero, ECO, C or B label enter, drive and park. Only vehicles without a label are restricted. If your car is a B, you do not need to sign up to any register or request a permit to enter the centre, by day or at night." }, { q: "I have a medical appointment inside the zone and my car has no label: what should I do?", a: "Vehicles going to hospitals, medical appointments, blood donation centres and vet clinics in the zone can enter with a council permit. You need to apply to the council. The permit is temporary and covers getting to the appointment; vet clinics in the zone are included." }],
    body: (h) => `
<h2>Eighteen months of warnings</h2>
<p>The council took delivery of the cameras and, with a notice in the provincial gazette, started an 18-month grace period on 6 February 2026. Until 5 August 2027 an unlabelled car entering the centre is not fined; from 6 August it is, at 200 euros, or 100 if paid early. The tool switches its answer on that day by itself.</p>
<h2>Who is outside the rules</h2>
<p>The restriction does not reach vehicles registered at an address in the zone or owned by residents registered there, nor private garages, shops and self-employed people with premises inside, taxis, ride-hailing, essential services or historic vehicles. Temporary permits cover medical appointments, repair shops, house moves and guest accommodation. Elsewhere in Castile and León, ${h.a('zbe-valladolid', "Valladolid")} already fines and ${h.a('zbe-salamanca', "Salamanca")} starts in 2029.</p>`,
  },
});
