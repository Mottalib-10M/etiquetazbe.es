import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-elche", group: 'zbe', order: 49, tool: 'zbe', ciudad: "elche",
  related: ["zbe-alicante", "zbe-castellon", "zbe-valencia", "etiqueta-dgt"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-elche",
    nav: "ZBE Elche",
    card: "Sin restricciones generales hasta 2030",
    title: "ZBE Elche 2026: sin restricciones generales hasta 2030",
    description: "ZBE de Elche 2026: la ordenanza aprobada en 2023 no restringe a los particulares hasta 2030; solo a vehículos municipales, autobuses y contratas sin etiqueta.",
    h1: "ZBE de Elche 2026: una primera fase hasta 2030",
    intro: "Elche tiene ordenanza de ZBE desde 2023, pero hasta 2030 no limita a los coches particulares. Solo los vehículos municipales y las contratas sin etiqueta.",
    resume: () => "El Pleno de Elche aprobó definitivamente la Ordenanza de Zona de Bajas Emisiones en diciembre de 2023. El Ayuntamiento modificó después los anexos 2 y 3 y la ZBE entró en vigor el 31 de diciembre de 2025. Según el Ayuntamiento, la ZBE se implanta en las zonas peatonales del centro. Durante la primera fase, hasta 2030, no hay restricciones generales de acceso, circulación ni estacionamiento para la mayoría de vehículos. Solo se restringe la entrada a vehículos municipales, autobuses y vehículos de empresas concesionarias que no tengan distintivo ambiental. Las limitaciones para el resto solo se activarían de forma puntual en episodios de contaminación, algo que según el Ayuntamiento nunca ha ocurrido en Elche. Las fases futuras se evaluarán cada seis meses antes de activarse.",
    faqs: () => [{ q: "¿Me pueden multar en Elche por no tener etiqueta?", a: "No, en la primera fase. Hasta 2030 no hay restricciones generales de acceso para la mayoría de vehículos; solo afectan a vehículos municipales, autobuses y concesionarias sin distintivo. La ordenanza prevé fases futuras que se evaluarán cada seis meses antes de activarse, así que el calendario puede cambiar después de 2030." }, { q: "¿Desde cuándo está en vigor la ZBE de Elche?", a: "Desde el 31 de diciembre de 2025, tras la modificación de los anexos 2 y 3 de la ordenanza aprobada definitivamente en diciembre de 2023. Esa primera fase llega hasta 2030 y no limita a los coches particulares; solo a los vehículos municipales, autobuses y contratas sin etiqueta." }, { q: "¿Qué pasa si hay un episodio de contaminación?", a: "En ese caso las limitaciones podrían activarse de forma puntual. El Ayuntamiento señala que algo así nunca ha ocurrido en Elche. Serían restricciones temporales, mientras dure el episodio, y afectarían en primer lugar a los vehículos más contaminantes. Fuera de esos casos, cualquier coche particular circula hoy por el centro de Elche sin trámite." }],
    body: (h) => `
<h2>La administración, primero</h2>
<p>La primera fase de la ZBE de Elche, en vigor con sus anexos modificados desde el 31 de diciembre de 2025, no restringe a los turismos particulares por su etiqueta. Solo afecta a los vehículos municipales, los autobuses y las contratas sin distintivo, y prevé límites adicionales únicamente en episodios de contaminación. Según la nota municipal, la zona se centra en las calles peatonales del centro.</p>
<h2>Fases revisadas cada seis meses</h2>
<p>La ordenanza fija un calendario progresivo de fases futuras, que se evaluarán cada seis meses antes de activarse; la primera llega hasta 2030. Residentes, trabajadores, servicios esenciales, personas con movilidad reducida y centros educativos tendrán accesos justificados. Si vas a Alicante, ten en cuenta que ${h.a('zbe-alicante', "su Casco Antiguo")} sí está restringido.</p>`,
  },
  en: {
    slug: "zbe-elche",
    nav: "Elche ZBE",
    card: "No general restrictions until 2030",
    title: "Elche ZBE 2026: No General Restrictions Until 2030",
    description: "Elche low-emission zone 2026: the byelaw approved in 2023 sets no limits on private cars until 2030; only unlabelled council vehicles, buses and contractors.",
    h1: "Elche low-emission zone 2026: a first phase running to 2030",
    intro: "Elche has had a low-emission byelaw since 2023, but until 2030 it does not limit private cars. Only unlabelled council and contractor vehicles.",
    resume: () => "Elche's council gave final approval to its Low Emission Zone byelaw in December 2023. The council later amended annexes 2 and 3, and the zone came into force on 31 December 2025. According to the council, the zone covers the pedestrianised streets of the centre. During the first phase, until 2030, there are no general restrictions on access, driving or parking for most vehicles. Only council vehicles, buses and contractors' vehicles without an environmental label are restricted. For everyone else, limits would only be switched on during a pollution episode, which the council says has never happened in Elche. Future phases will be reviewed every six months before they are activated. Until then, a private car of any label can drive and park in the centre of Elche with no permit.",
    faqs: () => [{ q: "Can I be fined in Elche for not having a label?", a: "Not in the first phase. Until 2030 there are no general access restrictions for most vehicles; they only apply to council vehicles, buses and contractors without a label. The byelaw plans later phases, each assessed every six months before being switched on, so the timetable may change after 2030." }, { q: "Since when has Elche's low emission zone been in force?", a: "Since 31 December 2025, after annexes 2 and 3 of the byelaw, finally approved in December 2023, were amended. That first phase runs until 2030 and does not limit private cars; only council vehicles, buses and contractors without a label." }, { q: "What happens during a pollution episode?", a: "Limits could then be switched on temporarily. The council notes this has never happened in Elche. Any such restriction would be temporary, lasting as long as the episode, and would hit the most polluting vehicles first. Outside those cases, any private car can drive in central Elche today with no paperwork." }],
    body: (h) => `
<h2>The council goes first</h2>
<p>The first phase of Elche’s zone, in force with its amended annexes since 31 December 2025, does not restrict private cars by label. It only affects unlabelled council vehicles, buses and contractors, and allows extra limits only during pollution episodes. According to the council note, the zone is centred on the pedestrian streets of the centre.</p>
<h2>Phases reviewed every six months</h2>
<p>The byelaw sets a stepwise timetable of future phases, each assessed every six months before it is switched on; the first runs to 2030. Residents, workers, essential services, people with reduced mobility and schools will have justified access. If you are heading to Alicante, note that ${h.a('zbe-alicante', "its Old Town")} is restricted.</p>`,
  },
});
