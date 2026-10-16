import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-almeria", group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 43, tool: 'zbe', ciudad: "almeria",
  related: ["zbe-granada", "zbe-malaga", "sin-etiqueta", "multa-zbe"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-almeria",
    nav: "ZBE Almería",
    card: "Casco Histórico y Pescadería, laborables de 8 a 20 h",
    title: "ZBE Almería 2026: Casco Histórico, horario y multa de 200 €",
    description: "ZBE de Almería 2026: Casco Histórico y Pescadería, 45 ha cerradas a coches sin etiqueta DGT de fuera, laborables de 8 a 20 h, 18 cámaras. Excepciones y multa.",
    h1: "ZBE de Almería 2026: el Casco Histórico en horario laboral",
    intro: "Almería multa desde enero de 2025 en el Casco Histórico y la Pescadería, pero solo a los coches sin etiqueta de fuera y solo en días laborables.",
    resume: () => "Almería aprobó inicialmente su Ordenanza reguladora de las Zonas de Bajas Emisiones el 23 de octubre de 2023, y el Pleno la aprobó definitivamente en diciembre de 2023. Tras un año completo de moratoria, el Ayuntamiento activó el 1 de enero de 2025 la ZBE y su régimen sancionador. La zona abarca el Casco Histórico y Pescadería, delimitada por el Cerro de San Cristóbal y la calle de La Reina, con unas 45 hectáreas. Las restricciones se aplican los días laborables, de lunes a viernes, de 8:00 a 20:00. Entran libremente todos los vehículos con distintivo ambiental (0, ECO, C y B), los vehículos históricos y los vehículos sin etiqueta dados de alta en Almería en el registro de la DGT, estos últimos durante 3 años. Los vehículos sin etiqueta de fuera necesitan una autorización o una exención. El acceso se controla con hasta 18 cámaras de lectura de matrícula, y la multa es de 200 euros, con un 30 % más por reincidencia.",
    faqs: () => [{ q: "¿Qué coches no pueden entrar en la ZBE de Almería?", a: "Solo los vehículos sin distintivo ambiental que no estén dados de alta en el municipio de Almería y no tengan una exención o autorización. Cualquier coche con etiqueta 0, ECO, C o B entra sin trámites. La restricción rige de lunes a viernes laborables, de 8:00 a 20:00." }, { q: "¿Puedo entrar por la tarde o el fin de semana sin etiqueta?", a: "Sí. La ordenanza dice que las restricciones de acceso se aplican todos los días laborables, de lunes a viernes, en horario de 8:00 a 20:00. Fuera de ese horario y en sábados, domingos o festivos no hay limitación. Las cámaras solo cuentan los accesos dentro de esa franja." }, { q: "¿Cuánto es la multa?", a: "La ordenanza fija una multa de 200 euros por infracción grave. Puede incrementarse un 30 % si se cometen más de 3 infracciones de la misma naturaleza en un año. Las sanciones se aplican desde el 1 de enero de 2025, al terminar la moratoria." }],
    body: (h) => `
<h2>45 hectáreas y un horario de oficina</h2>
<p>La zona de Almería es pequeña, unas 45 hectáreas entre el Cerro de San Cristóbal y la calle de La Reina, y funciona de lunes a viernes laborables de 8 a 20 h. Fuera de esa franja, por la noche, en fin de semana o en festivo, cualquier vehículo circula. Hasta 18 cámaras en los accesos leen la matrícula, y la Policía Local hace controles.</p>
<h2>Vecinos y comercios</h2>
<p>Los vehículos sin etiqueta matriculados en Almería no están afectados durante los tres primeros años de la ordenanza. Comercios, hostelería, hoteles, propietarios de garajes, reparto y personas con movilidad reducida pueden inscribirse en el registro de autorizaciones, y hay permisos diarios para talleres, hospitales y hoteles. Reincidir más de tres veces en un año sube la multa un 30 %. Para conocer tu distintivo, usa ${h.a('etiqueta-dgt', "el simulador de etiqueta")}.</p>`,
  },
  en: {
    slug: "zbe-almeria",
    nav: "Almería ZBE",
    card: "Old Town and Pescadería, working days 8 am to 8 pm",
    title: "Almería ZBE 2026: Old Town, Hours and the €200 Fine",
    description: "Almería low-emission zone 2026: Old Town and Pescadería, 45 ha closed to out-of-town unlabelled cars on working days 8 am to 8 pm, 18 cameras. Exceptions, fine.",
    h1: "Almería low-emission zone 2026: the Old Town in working hours",
    intro: "Almería has fined drivers in the Old Town and Pescadería since January 2025, but only out-of-town unlabelled cars and only on working days.",
    resume: () => "Almería gave initial approval to its Low-Emission Zones Byelaw on 23 October 2023, and the city council gave final approval in December 2023. After a full grace year, the council switched on the zone and its fines on 1 January 2025. The zone covers the historic centre and Pescadería, bounded by the Cerro de San Cristóbal and calle de La Reina, about 45 hectares. The restrictions apply on working days, Monday to Friday, from 8:00 to 20:00. All vehicles with an environmental label (0, ECO, C and B) may enter freely, as may historic vehicles and unlabelled vehicles registered in Almería with the DGT, the latter for 3 years. Unlabelled vehicles from elsewhere need a permit or an exemption. Access is checked by up to 18 number-plate cameras, and the fine is 200 euros, 30% more for repeat offenders.",
    faqs: () => [{ q: "Which cars cannot enter the Almería low-emission zone?", a: "Only vehicles without an environmental label that are not registered in Almería and have no exemption or permit. Any car with a 0, ECO, C or B label drives in without formalities. The restriction applies on working days, Monday to Friday, from 8:00 to 20:00." }, { q: "Can I enter in the evening or at the weekend without a label?", a: "Yes. The byelaw says access restrictions apply on every working day, Monday to Friday, from 8:00 to 20:00. Outside those hours and on Saturdays, Sundays or public holidays there is no restriction. The cameras only count entries within that window, so an evening trip is outside the rule." }, { q: "How much is the fine?", a: "The byelaw sets a 200-euro fine for a serious offence. It can rise by 30% for more than 3 offences of the same kind in a year. Fines have applied since 1 January 2025, when the grace period ended. Paying early halves the amount." }],
    body: (h) => `
<h2>45 hectares and office hours</h2>
<p>Almería’s zone is small, about 45 hectares between the Cerro de San Cristóbal and Calle de La Reina, and runs on working weekdays from 8 am to 8 pm. Outside those hours, at night, at weekends or on public holidays, any vehicle may drive in. Up to 18 cameras at the entrances read plates, and the local police carry out checks.</p>
<h2>Residents and businesses</h2>
<p>Unlabelled vehicles registered in Almería are not affected for the first three years of the byelaw. Shops, bars, hotels, garage owners, delivery firms and people with reduced mobility can sign up to the permit register, and there are day passes for repair shops, hospitals and hotels. More than three offences in a year raises the fine by 30%. To find your label, use ${h.a('etiqueta-dgt', "the label calculator")}.</p>`,
  },
});
