import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-cartagena", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 46, tool: 'zbe', ciudad: "cartagena",
  related: ["zbe-alicante", "zbe-albacete", "zonas-bajas-emisiones", "etiqueta-dgt"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-cartagena",
    nav: "ZBE Cartagena",
    card: "Casco Histórico y Ensanche, sin prohibiciones",
    title: "ZBE Cartagena 2026: Casco Histórico y Ensanche sin prohibir",
    description: "ZBE de Cartagena 2026: Casco Histórico y Ensanche en vigor desde abril de 2023, sin prohibir ninguna etiqueta DGT salvo episodio de contaminación. 35 cámaras.",
    h1: "ZBE de Cartagena 2026: una zona que mide y no prohíbe",
    intro: "Cartagena tiene dos ZBE desde 2023, pero ninguna prohíbe la entrada por etiqueta. Solo un episodio de contaminación activaría restricciones.",
    resume: () => "Cartagena publicó en el BORM del 25 de abril de 2023 su Ordenanza para la implantación de zonas de bajas emisiones, aprobada definitivamente por el Pleno, y entró en vigor al día siguiente. La ZBE tiene dos áreas: el Casco Histórico y el Ensanche. El Ayuntamiento afirma que no son necesarias las etiquetas ambientales y que no hay prohibiciones de tráfico: no hay que pedirlas ni adquirirlas en la DGT. La ordenanza define como vehículos más contaminantes los que no tienen distintivo ambiental, y solo prevé restringirlos en episodios de contaminación o con medidas experimentales. Las medidas de regulación se aplicarían de lunes a viernes, de 0 a 24 horas. En el Casco Histórico se fomenta la peatonalización y en el Ensanche el calmado del tráfico con supermanzanas. La ciudad cuenta con 35 cámaras para medir tráfico, ruido y contaminación, sin fines sancionadores por etiqueta.",
    faqs: () => [{ q: "¿Necesito etiqueta ambiental para entrar en el centro de Cartagena?", a: "No. El Ayuntamiento ha indicado que en la ZBE no es necesaria la etiqueta y que no hay que pedirla ni adquirirla en la DGT. Todos los vehículos pueden circular por el Casco Histórico y el Ensanche como antes. No hay cámaras de sanción." }, { q: "¿Cuándo podría restringirse el tráfico?", a: "Si el órgano competente de la Región de Murcia declara un episodio de contaminación, se activa el protocolo municipal. En ese caso podrían limitarse los vehículos sin distintivo ambiental. Sería una medida temporal, mientras dure el episodio, y el Ayuntamiento tendría que anunciarla. Hasta ahora no se ha activado y la ordenanza no prevé restricciones permanentes por etiqueta." }, { q: "¿Qué miden las cámaras de la ZBE de Cartagena?", a: "Los paneles y cámaras de control de accesos y emisiones, 35 en la ciudad y 18 nuevas en el Ensanche, miden tráfico, ruido y contaminación. Sirven para conocer el efecto de las supermanzanas y para activar el protocolo si la Región de Murcia declara un episodio. El Ayuntamiento afirma que las medidas no se basarán en restricciones ni sanciones." }],
    body: (h) => `
<h2>Cámaras para medir</h2>
<p>La ordenanza de Cartagena, publicada en el Boletín Oficial de la Región de Murcia el 25 de abril de 2023, creó la ZBE del Casco Histórico y la del Ensanche. Sus paneles y cámaras, 35 en la ciudad y 18 nuevas en el Ensanche, miden tráfico, ruido y contaminación. El Ayuntamiento afirma que las medidas no se basarán en restricciones o sanciones.</p>
<h2>Cuándo podría cambiar</h2>
<p>Solo un episodio de contaminación declarado por la Región de Murcia activaría el protocolo y permitiría limitar temporalmente a los vehículos sin etiqueta. En el Casco Histórico se mantiene el tráfico de acceso a viviendas, garajes y mercancías, y el Ensanche se calma con supermanzanas. Para saber cómo te tratarían otras ciudades, consulta ${h.a('zonas-bajas-emisiones', "la tabla de todas las ZBE")}.</p>`,
  },
  en: {
    slug: "zbe-cartagena",
    nav: "Cartagena ZBE",
    card: "Old Town and Ensanche, no bans",
    title: "Cartagena ZBE 2026: Old Town and Ensanche Without Bans",
    description: "Cartagena low-emission zone 2026: Old Town and Ensanche zones in force since April 2023, banning no DGT label unless a pollution episode is declared. Dated.",
    h1: "Cartagena low-emission zone 2026: a zone that measures, not bans",
    intro: "Cartagena has had two zones since 2023, but neither bans any label. Only a declared pollution episode would trigger restrictions.",
    resume: () => "Cartagena published its Low Emission Zone byelaw, finally approved by the council, in the Murcia regional gazette (BORM) on 25 April 2023, and it came into force the next day. The zone has two areas: the historic centre (Casco Histórico) and the Ensanche district. The council says environmental labels are not needed and there are no traffic bans, so drivers do not have to request a label from the DGT. The byelaw defines the most polluting vehicles as those without a label, and only allows them to be restricted during pollution episodes or under trial measures. Any such measures would apply Monday to Friday, around the clock. The historic centre is being pedestrianised and the Ensanche is getting traffic-calming superblocks. The city has 35 cameras measuring traffic, noise and pollution, not for label-based fines.",
    faqs: () => [{ q: "Do I need an environmental label to drive into central Cartagena?", a: "No. The council has said a label is not needed in the zone and drivers do not have to request one from the DGT. All vehicles can drive in the historic centre and the Ensanche as before. There are no enforcement cameras." }, { q: "When could traffic be restricted?", a: "If the Region of Murcia declares a pollution episode, the council protocol is triggered. Vehicles without a label could then be limited. It would be a temporary measure lasting as long as the episode, and the council would have to announce it. So far it has not been triggered, and the byelaw sets no permanent label-based restrictions." }, { q: "What do Cartagena’s zone cameras measure?", a: "The access and emissions signs and cameras, 35 across the city and 18 new ones in the Ensanche, measure traffic, noise and pollution. They show the effect of the superblocks and would trigger the protocol if the Region of Murcia declared an episode. The council says its measures will not be based on restrictions or fines." }],
    body: (h) => `
<h2>Cameras that measure</h2>
<p>Cartagena’s byelaw, published in the Region of Murcia’s official gazette on 25 April 2023, created the Old Town and Ensanche zones. Their signs and cameras, 35 across the city and 18 new ones in the Ensanche, measure traffic, noise and pollution. The council says its measures will not be based on restrictions or fines.</p>
<h2>What could change it</h2>
<p>Only a pollution episode declared by the Region of Murcia would trigger the protocol and allow a temporary limit on unlabelled vehicles. In the Old Town, traffic to homes, garages and deliveries continues, and the Ensanche is being calmed with superblocks. To see how other cities would treat you, check ${h.a('zonas-bajas-emisiones', "the table of every zone")}.</p>`,
  },
});
