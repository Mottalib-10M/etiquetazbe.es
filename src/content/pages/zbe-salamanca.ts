import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-salamanca", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 57, tool: 'zbe', ciudad: "salamanca",
  related: ["zbe-valladolid", "zbe-burgos", "zbe-leon", "etiqueta-c"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-salamanca",
    nav: "ZBE Salamanca",
    card: "Calendario por etiquetas de 2029 a 2039",
    title: "ZBE Salamanca 2026: zona monumental y calendario hasta 2039",
    description: "ZBE de Salamanca 2026: zona monumental con lectores de matrícula y Zona Centro; sin etiqueta fuera en 2029, la B en 2034 y la C en 2039. Residentes exentos.",
    h1: "ZBE de Salamanca 2026: un calendario que llega a 2039",
    intro: "Salamanca aprobó en 2024 la ZBE con el calendario más largo de esta web: los vehículos sin etiqueta salen en 2029, la B en 2034 y la C en 2039.",
    resume: () => "La ordenanza de Zonas de Bajas Emisiones de Salamanca se publicó en el BOP n.º 109 del 6 de junio de 2024 y está en vigor desde junio de 2024. Crea dos zonas: la ZBE 1 «Zona Monumental», que es la zona peatonal del casco histórico, y la ZBE 2 «Zona Centro», un anillo a su alrededor. En la ZBE 1 el acceso ya exige autorización municipal y se controla con lectores de matrícula desde junio de 2024. Hasta el 31 de diciembre de 2028 circulan todos los vehículos sea cual sea su etiqueta. Desde el 1 de enero de 2029 se prohíben los vehículos sin etiqueta, desde el 1 de enero de 2034 también los B y desde el 1 de enero de 2039 también los C. Las normas de la ZBE 2 entran en vigor el 1 de enero de 2029. Las personas empadronadas en las zonas nunca se ven afectadas por el calendario.",
    faqs: () => [{ q: "¿Puedo entrar hoy en Salamanca con un coche sin etiqueta?", a: "En la ZBE 2 sí: no hay ninguna restricción por etiqueta hasta el 1 de enero de 2029. En la zona peatonal (ZBE 1) cualquier vehículo, tenga la etiqueta que tenga, necesita una autorización municipal registrada en la plataforma de la ZBE." }, { q: "Vivo dentro de la zona peatonal, ¿tengo que hacer algún trámite?", a: "No, si estás empadronado en la zona peatonal y pagas el impuesto de circulación en Salamanca: el alta en el sistema es automática. Si resides pero no estás empadronado, o tienes plaza de garaje sin pagar allí el impuesto, debes registrarte en la web de la ZBE." }, { q: "¿Cuándo dejará de poder entrar un coche con etiqueta B?", a: "Desde el 1 de enero de 2034 en ambas zonas. Los coches con etiqueta C quedarán fuera desde el 1 de enero de 2039, salvo los de residentes. Hasta entonces, la B circula por la Zona Centro sin restricción, y en la zona monumental necesita la misma autorización que cualquier vehículo de fuera. Las personas empadronadas en la zona nunca quedan afectadas." }],
    body: (h) => `
<h2>La zona monumental ya controla</h2>
<p>La ZBE 1, la zona peatonal del casco histórico, tiene lectores de matrícula en sus accesos desde junio de 2024: hoy un vehículo de fuera necesita autorización municipal, sea cual sea su etiqueta. La ZBE 2, el anillo que rodea la zona monumental, empieza a aplicar sus reglas el 1 de enero de 2029. Las personas empadronadas en la zona nunca quedan afectadas por el calendario.</p>
<h2>Tres fechas en el boletín</h2>
<p>La ordenanza, publicada en el Boletín Oficial de la Provincia el 6 de junio de 2024, fija la prohibición de los vehículos sin etiqueta desde el 1 de enero de 2029, de la B desde el 1 de enero de 2034 y de la C desde el 1 de enero de 2039, en las dos zonas. El simulador permite elegir esas fechas para ver qué cambia. Para conocer tu distintivo, usa ${h.a('etiqueta-dgt', "el simulador de etiqueta")}.</p>`,
  },
  en: {
    slug: "zbe-salamanca",
    nav: "Salamanca ZBE",
    card: "Label timetable from 2029 to 2039",
    title: "Salamanca ZBE 2026: Historic Core and a Timetable to 2039",
    description: "Salamanca low-emission zone 2026: historic zone with plate readers and the Centro zone; no-label ban in 2029, B labels in 2034, C in 2039. Residents exempt.",
    h1: "Salamanca low-emission zone 2026: a timetable running to 2039",
    intro: "In 2024 Salamanca approved the longest timetable on this site: unlabelled vehicles go in 2029, the B label in 2034 and the C in 2039.",
    resume: () => "Salamanca's low-emission zone byelaw was published in the provincial gazette (BOP no. 109) on 6 June 2024 and has been in force since June 2024. It creates two zones: ZBE 1 'Zona Monumental', the pedestrianised historic centre, and ZBE 2 'Zona Centro', a ring around it. In ZBE 1 entry already requires a council permit and has been checked by number-plate readers since June 2024. Until 31 December 2028 all vehicles may drive whatever their label. From 1 January 2029 vehicles without a label are banned, from 1 January 2034 B vehicles too, and from 1 January 2039 C vehicles too. ZBE 2 rules take effect on 1 January 2029. People registered as living in the zones are never affected by the timetable.",
    faqs: () => [{ q: "Can I drive into Salamanca today with a car without a label?", a: "In ZBE 2, yes: there is no label restriction until 1 January 2029. In the pedestrian zone (ZBE 1) any vehicle, whatever its label, needs a council permit registered on the ZBE platform. Residents registered in the zone are never affected." }, { q: "I live inside the pedestrian zone: do I need to do anything?", a: "No, if you are registered as living there and pay road tax in Salamanca: you are added to the system automatically. If you live there without being registered, or have a garage space but pay the tax elsewhere, you must register on the ZBE website." }, { q: "When will cars with a B label be banned?", a: "From 1 January 2034 in both zones. Cars with a C label will be banned from 1 January 2039, except residents' vehicles. Until then, B cars drive freely in the Centro zone and need the same permit as any outside vehicle in the historic pedestrian zone. People registered as living in the zone are never affected by the timetable." }],
    body: (h) => `
<h2>The historic core already checks</h2>
<p>Zone 1, the pedestrian historic centre, has had plate readers at its entrances since June 2024: an out-of-town vehicle already needs a council permit, whatever its label. Zone 2, the ring around the historic core, starts applying its rules on 1 January 2029. People registered as living in the zone are never affected by the timetable.</p>
<h2>Three dates in the gazette</h2>
<p>The byelaw, published in the provincial gazette on 6 June 2024, bans unlabelled vehicles from 1 January 2029, B labels from 1 January 2034 and C labels from 1 January 2039, in both zones. The tool lets you pick those dates to see what changes. To find your label, use ${h.a('etiqueta-dgt', "the label calculator")}.</p>`,
  },
});
