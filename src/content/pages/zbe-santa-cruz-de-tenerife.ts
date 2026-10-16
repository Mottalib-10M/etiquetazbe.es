import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-santa-cruz-de-tenerife", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 58, tool: 'zbe', ciudad: "santa-cruz-de-tenerife",
  related: ["zbe-palma", "coche-extranjero-zbe", "sin-etiqueta", "multa-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-santa-cruz-de-tenerife",
    nav: "ZBE Santa Cruz de Tenerife",
    card: "El Toscal y Centro, multas a los 36 meses",
    title: "ZBE Santa Cruz de Tenerife 2026: Toscal, Centro y plazos",
    description: "ZBE de Santa Cruz de Tenerife 2026: El Toscal y el Centro, de lunes a sábado de 7 a 20 h, solo coches sin etiqueta DGT; registro a 18 meses, multas a 36.",
    h1: "ZBE de Santa Cruz de Tenerife 2026: aprobada, con plazos largos",
    intro: "Santa Cruz publicó su ordenanza en agosto de 2026. Solo afecta a los coches sin etiqueta y no multará hasta tres años después de su entrada en vigor.",
    resume: () => "Santa Cruz de Tenerife aprobó definitivamente su ordenanza de Zona de Bajas Emisiones en el Pleno del 24 de julio de 2026 y la publicó en el BOP n.º 101 del 24 de agosto de 2026. La ordenanza entra en vigor 15 días hábiles después, a mediados de septiembre de 2026. La ZBE cubre el centro (El Toscal y Zona Centro), 92 calles enumeradas en el Anexo I. Solo restringe a los vehículos sin etiqueta ambiental; los de etiqueta B, C, ECO y 0 entran libremente. La restricción rige de lunes a sábado de 7:00 a 20:00. El registro de vehículos y las autorizaciones se aplican a los 18 meses, cuando empiezan también los avisos informativos, y las multas a los 36 meses. La multa es de 200 euros (100 euros con pronto pago), con un recargo de hasta el 30 % por reincidencia.",
    faqs: () => [{ q: "¿Me multarán ya por entrar sin etiqueta en el centro de Santa Cruz?", a: "No. La ordenanza, publicada en el BOP del 24 de agosto de 2026, aplica el régimen sancionador a los 36 meses de su entrada en vigor. A los 18 meses llegan el registro municipal, las autorizaciones y los primeros avisos, que son solo informativos. Hasta entonces, entrar sin etiqueta en El Toscal o el Centro no tiene consecuencias." }, { q: "¿Puedo entrar con un coche sin etiqueta por la noche o el domingo?", a: "Sí. La restricción rige de lunes a sábado de 7:00 a 20:00 horas. Fuera de ese horario los vehículos con restricción circulan sin limitación. El sábado sí cuenta como día de restricción, a diferencia de casi todas las demás ZBE de esta web. En cualquier caso, las multas no llegan hasta 36 meses después de la entrada en vigor." }, { q: "Tengo pocos ingresos y un coche sin etiqueta: ¿qué puedo hacer?", a: "Puede pedir una autorización temporal de dos años, prorrogable un año más. Hace falta que los ingresos no superen dos veces el IPREM y no tener otro vehículo con etiqueta ECO, C, B o 0. El trámite es gratuito y se resuelve en 10 días hábiles." }],
    body: (h) => `
<h2>De lunes a sábado</h2>
<p>La ZBE de Santa Cruz cubre casi todo El Toscal y la Zona Centro, 92 calles listadas en el anexo I, donde viven 16.369 personas según el Ayuntamiento. Es de las pocas que también controlan los sábados: de lunes a sábado de 7 a 20 h. Fuera de ese horario los vehículos sin etiqueta circulan sin limitación, y las etiquetas B, C, ECO y 0 entran siempre.</p>
<h2>Dieciocho y treinta y seis meses</h2>
<p>La ordenanza da tiempo: el registro municipal y las autorizaciones llegan a los 18 meses de su entrada en vigor, cuando empiezan los avisos, y las multas, de 200 euros, a los 36 meses. Prevé además una autorización de dos años, prorrogable uno, para quien no supere dos veces el IPREM y no tenga otro vehículo con etiqueta. Si vienes de otro país, ${h.a('coche-extranjero-zbe', "calcula la equivalencia de tu coche")}.</p>`,
  },
  en: {
    slug: "zbe-santa-cruz-de-tenerife",
    nav: "Santa Cruz de Tenerife ZBE",
    card: "El Toscal and the centre, fines after 36 months",
    title: "Santa Cruz de Tenerife ZBE 2026: Toscal, Centre, Deadlines",
    description: "Santa Cruz de Tenerife low-emission zone 2026: El Toscal and the centre, Mon to Sat 7 am to 8 pm, unlabelled cars only; register at 18 months, fines at 36.",
    h1: "Santa Cruz de Tenerife low-emission zone 2026: approved, long lead-in",
    intro: "Santa Cruz published its byelaw in August 2026. It only affects unlabelled cars and will not fine until three years after it takes effect.",
    resume: () => "Santa Cruz de Tenerife gave final approval to its low-emission zone byelaw at the council meeting of 24 July 2026 and published it in the provincial gazette (BOP no. 101) on 24 August 2026. It takes effect 15 working days later, in mid-September 2026. The zone covers the city centre (El Toscal and Zona Centro), 92 streets listed in Annex I. Only vehicles without an environmental label are restricted; B, C, ECO and zero-emission vehicles enter freely. The restriction applies Monday to Saturday, 7:00 to 20:00. The vehicle register and permits start after 18 months, along with warning letters, and fines after 36 months. The fine is 200 euros (100 euros if paid early), up to 30% more for repeat offences.",
    faqs: () => [{ q: "Will I be fined now for driving into central Santa Cruz without a label?", a: "No. The byelaw, published in the provincial gazette on 24 August 2026, applies fines 36 months after it takes effect. At 18 months come the council register, the permits and the first warnings, which are information only. Until then, driving into El Toscal or the Centre without a label has no consequences." }, { q: "Can I drive in without a label at night or on Sunday?", a: "Yes. The restriction applies Monday to Saturday, 7:00 to 20:00. Outside those hours restricted vehicles can drive in freely. Saturday does count as a restricted day, unlike almost every other zone on this site. In any case, fines only start 36 months after the byelaw takes effect, and the register comes at 18 months." }, { q: "I have a low income and a car without a label: what can I do?", a: "You can apply for a 2-year temporary permit, renewable for one more year. Your income must be no more than twice the IPREM and you must not own another vehicle with an ECO, C, B or zero label. It is free and decided within 10 working days." }],
    body: (h) => `
<h2>Monday to Saturday</h2>
<p>The Santa Cruz zone covers almost all of El Toscal and the Centre, 92 streets listed in annex I, home to 16,369 people according to the council. It is one of the few that also enforces on Saturdays: Monday to Saturday from 7 am to 8 pm. Outside those hours unlabelled vehicles drive freely, and B, C, ECO and zero labels may always enter.</p>
<h2>Eighteen and thirty-six months</h2>
<p>The byelaw gives time: the council register and permits arrive 18 months after it takes effect, when warnings begin, and fines of 200 euros after 36 months. It also offers a two-year permit, extendable by one, for drivers earning no more than twice the IPREM index who have no other labelled vehicle. If you are coming from abroad, ${h.a('coche-extranjero-zbe', "work out your car’s equivalent label")}.</p>`,
  },
});
