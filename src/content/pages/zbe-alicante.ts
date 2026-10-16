import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-alicante", group: 'zbe', order: 42, tool: 'zbe', ciudad: "alicante",
  related: ["zbe-elche", "zbe-valencia", "zbe-castellon", "multa-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-alicante",
    nav: "ZBE Alicante",
    card: "Tres anillos, solo el Casco Antiguo restringido",
    title: "ZBE Alicante 2026: tres anillos y Casco Antiguo restringido",
    description: "ZBE de Alicante 2026: tres anillos y 7,49 km²; solo el Anillo I, el Casco Antiguo, restringe el acceso, con invitaciones de vecinos. Gran Vía libre. Al día.",
    h1: "ZBE de Alicante 2026: tres anillos y un casco antiguo cerrado",
    intro: "Alicante dibujó una ZBE grande, pero solo el Casco Antiguo limita el acceso. El resto, hasta la Gran Vía, es de circulación libre.",
    resume: () => "Alicante aprobó definitivamente su Ordenanza de Zona de Bajas Emisiones en el Pleno extraordinario del 30 de diciembre de 2024 y la publicó en el BOP el 9 de enero de 2025. La ZBE se divide en tres anillos: I Casco Antiguo, II Centro Tradicional y III Gran Vía, que juntos cubren 7,49 km² y 22 barrios. Solo el Anillo I restringe el acceso: allí únicamente entran los vehículos de residentes y los autorizados del anexo 2, y el resto no puede entrar sea cual sea su etiqueta. En los Anillos II y III la circulación es libre y exenta de restricciones y sanciones, y sirven para tomar datos de tráfico. Entrar sin autorización en el Anillo I es infracción grave, con multa de hasta 200 euros, que puede subir un 30 % si se reincide. Los vecinos empadronados en el Anillo I pueden invitar a vehículos sin etiqueta con hasta 10 permisos de un día al mes. Ante un episodio de contaminación, el Ayuntamiento puede activar restricciones temporales en toda la zona.",
    faqs: () => [{ q: "¿Puedo entrar en el centro de Alicante con un coche sin etiqueta?", a: "Sí en los Anillos II Centro Tradicional y III Gran Vía, donde la circulación es libre y sin sanciones. En el Anillo I Casco Antiguo solo pueden entrar residentes y vehículos autorizados; un coche sin etiqueta necesita una autorización municipal registral, por ejemplo una invitación de un vecino empadronado." }, { q: "¿Cuánto es la multa por entrar en el Casco Antiguo sin permiso?", a: "Es una infracción grave sancionada con multa de hasta 200 euros. La sanción puede incrementarse un 30 % si se reincide en el plazo de un año. Con pronto pago se reduce a la mitad. La multa no depende de la etiqueta: un vehículo de fuera sin autorización comete la infracción aunque sea eléctrico." }, { q: "¿Cuántas invitaciones puede pedir un vecino del Casco Antiguo?", a: "Hasta 10 permisos al mes, y cada uno vale un día completo. Se piden por la app de la ZBE o la web municipal, con hasta 3 meses de antelación o de forma retroactiva hasta 10 días. Las visitas no necesitan otro trámite." }],
    body: (h) => `
<h2>Un casco antiguo de acceso restringido</h2>
<p>La restricción real de Alicante está en el Anillo I. Allí entran los residentes, propietarios de viviendas o garajes y los vehículos autorizados, con o sin etiqueta, y los vecinos empadronados pueden pedir hasta diez permisos al mes de un día para sus visitas. Para quien llega de fuera sin autorización, la etiqueta no basta: el acceso queda condicionado a uno de los supuestos del anexo de la ordenanza.</p>
<h2>Los anillos II y III</h2>
<p>El Centro Tradicional y la Gran Vía forman parte de la zona, pero son de circulación libre: las cámaras solo toman datos. El Ayuntamiento indica que no prevé nuevas restricciones por etiqueta, y que solo un episodio de contaminación declarado permitiría limitar temporalmente toda la zona. Si viajas también a Elche, ${h.a('zbe-elche', "su ZBE")} no restringe todavía a los particulares.</p>`,
  },
  en: {
    slug: "zbe-alicante",
    nav: "Alicante ZBE",
    card: "Three rings, only the Old Town restricted",
    title: "Alicante ZBE 2026: Three Rings and a Restricted Old Town",
    description: "Alicante low-emission zone 2026: three rings covering 7.49 km²; only Ring I, the Old Town, restricts access, with resident passes. Gran Vía area open.",
    h1: "Alicante low-emission zone 2026: three rings, one closed old town",
    intro: "Alicante drew a large zone, but only the Old Town limits access. The rest, out to the Gran Vía ring road, is open to all traffic.",
    resume: () => "Alicante gave final approval to its Low Emission Zone byelaw at an extraordinary council meeting on 30 December 2024 and published it in the provincial gazette on 9 January 2025. The zone has three rings: I Casco Antiguo (old town), II Centro Tradicional and III Gran Vía, together covering 7.49 km² and 22 neighbourhoods. Only Ring I restricts access: just residents' vehicles and the authorised vehicles listed in annex 2 may enter, and everyone else is barred whatever their label. In Rings II and III driving is free of restrictions and fines; they are used to collect traffic data. Entering Ring I without a permit is a serious offence, with a fine of up to €200 that can rise by 30% for repeat offenders. Residents registered in Ring I can invite vehicles without a label using up to 10 one-day permits a month. During a pollution episode the council can switch on temporary restrictions across the whole zone.",
    faqs: () => [{ q: "Can I drive into central Alicante in a car without a label?", a: "Yes in Ring II (Centro Tradicional) and Ring III (Gran Vía), where driving is free and no fines apply. In Ring I (the old town) only residents and authorised vehicles may enter; a car without a label needs a registered council permit, such as an invitation from a registered resident." }, { q: "How much is the fine for entering the old town without a permit?", a: "It is a serious offence with a fine of up to €200. The fine can rise by 30% for a repeat offence within a year. Paying early halves it. The fine does not depend on the label: an out-of-town vehicle without a permit commits the offence even if it is electric." }, { q: "How many invitations can an old-town resident request?", a: "Up to 10 permits a month, each valid for a full day. They are requested through the ZBE app or the council website, up to 3 months ahead or retroactively up to 10 days. Visitors need no other paperwork. Each pass covers one whole day." }],
    body: (h) => `
<h2>An old town with restricted access</h2>
<p>Alicante’s real restriction is in Ring I. Residents, owners of homes or garages and authorised vehicles may enter, with or without a label, and registered residents can request up to ten one-day passes a month for visitors. For a visitor without a permit the label is not enough: access depends on one of the cases listed in the byelaw annex.</p>
<h2>Rings II and III</h2>
<p>The Traditional Centre and the Gran Vía ring are part of the zone but open to all traffic: the cameras only collect data. The council says it plans no new label-based restrictions, and only a declared pollution episode would allow a temporary limit across the whole zone. If you are also going to Elche, ${h.a('zbe-elche', "its zone")} does not yet restrict private cars.</p>`,
  },
});
