import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('pamplona');
export default definePage({
  id: 'zbe-pamplona', group: 'zbe', order: 22, tool: 'zbe', ciudad: 'pamplona',
  related: ['zbe-vitoria-gasteiz', 'pegatina-dgt', 'sin-etiqueta', 'zbe-san-sebastian'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-pamplona', nav: 'ZBE Pamplona', card: 'Casco Antiguo con pegatina obligatoria',
    title: 'ZBE Pamplona 2026: Casco Antiguo, pegatina y excepciones',
    description: 'ZBE de Pamplona 2026: el Casco Antiguo solo admite etiquetas 0, ECO, B y C desde el 29/12/2025, con la pegatina a la vista. Excepciones y multa. Al día.',
    h1: 'ZBE de Pamplona 2026: el Casco Antiguo y la pegatina',
    intro: 'Pamplona ha superpuesto su ZBE a la zona de acceso controlado del Casco Antiguo. Además de cumplir, hay que llevar la pegatina visible.',
    resume: (h) => `Pamplona puso en marcha su Zona de Bajas Emisiones el 29 de diciembre de 2025, el día en que el Boletín Oficial de Navarra publicó la ordenanza. Abarca todo el Casco Antiguo, delimitado por las calles Taconera, Navas de Tolosa, el paseo de Sarasate, Duque de Ahumada, Juan de Labrit, Vergel y Santo Domingo, y coincide con la Zona de Acceso Controlado que ya regulaba la carga y descarga y los accesos puntuales de 30 minutos. En ella solo circulan los vehículos con etiqueta 0, ECO, B o C y los autorizados, y la pegatina debe ir en un lugar visible. Quedan fuera de la exigencia los residentes del Sector 1 y del paseo de Sarasate, las personas con movilidad reducida o dependientes, los titulares de plaza de garaje, quien va a un aparcamiento público, comercios y hoteles, emergencias, obras, mudanzas, reparaciones y transporte público. Incumplir es una infracción grave: ${h.eur(c.multa.importe)}, ${h.eur(c.multa.pronto_pago)} con pronto pago.`,
    faqs: (h) => [
      { q: '¿Los accesos de 30 minutos al Casco Viejo de Pamplona exigen etiqueta?', a: 'Sí. Los accesos puntuales de 30 minutos para dejar o recoger personas u objetos, que se piden por el 010, la sede electrónica o la app TokTok, requieren ahora el distintivo ambiental. También lo necesitan el reparto de paquetería en vehículos de hasta 3,5 m³, los clientes de hoteles sin parking y el reparto de comida a domicilio.' },
      { q: '¿Necesito etiqueta para usar el apeadero de la calle Mercado?', a: 'No. El Ayuntamiento no exige el distintivo para usar los apeaderos de las calles Mercado y Juan de Labrit, ni a quien va a aparcar en un aparcamiento público o en su propia plaza de garaje. Sí se exige para circular por el resto de calles del Casco Antiguo.' }, { q: `¿La ZBE de Pamplona restringe la etiqueta B?`, a: `No. Pamplona admite en el Casco Antiguo los vehículos con etiqueta 0, ECO, B y C, además de los autorizados; solo quedan fuera, salvo excepción, los que no tienen distintivo. La exigencia principal para los que cumplen es llevar la pegatina visible.` }
    ],
    body: (h) => `
<h2>Una ZBE encima de la ZAC</h2>
<p>Pamplona no ha creado un perímetro nuevo: ha añadido una condición ambiental a la Zona de Acceso Controlado del Casco Antiguo, con sus horas de carga y descarga y sus accesos de media hora. Todo lo que ya existía sigue igual, y además hay que tener etiqueta. Por eso el impacto se nota sobre todo en quien entraba puntualmente con un coche viejo, más que en los vecinos, que están exentos.</p>
<h2>La pegatina sí se mira</h2>
<p>Al contrario que en Málaga o Bilbao, la información municipal insiste en que el distintivo debe estar a la vista. Cuesta 5 euros en las entidades colaboradoras de la DGT, como Correos. El Ayuntamiento repartió 75.000 folletos para explicarlo y ha detectado en las primeras semanas una bajada del tráfico en el Casco.</p>
<p>Si tu coche no tiene etiqueta y tienes que entrar a menudo, revisa si encajas en alguna de las excepciones o ${h.a('sin-etiqueta', 'qué opciones hay para un vehículo sin distintivo')}.</p>`,
  },
  en: {
    slug: 'zbe-pamplona', nav: 'Pamplona ZBE', card: 'Old Town, sticker must be displayed',
    title: 'Pamplona ZBE 2026: Old Town, Sticker Rule and Exceptions',
    description: 'Pamplona low-emission zone 2026: the Old Town admits only zero, ECO, B and C labels since 29/12/2025, sticker on show. Exceptions and €200 fine. Dated.',
    h1: 'Pamplona low-emission zone 2026: the Old Town and the sticker',
    intro: 'Pamplona has laid its zone over the Old Town’s controlled-access area. As well as complying, you have to display the sticker.',
    resume: (h) => `Pamplona launched its low-emission zone on 29 December 2025, the day the Navarre official gazette published the byelaw. It covers the whole Old Town, bounded by Taconera, Navas de Tolosa, Paseo de Sarasate, Duque de Ahumada, Juan de Labrit, Vergel and Santo Domingo, and overlaps the Controlled Access Zone that already governed deliveries and 30-minute one-off accesses. Only vehicles with a zero, ECO, B or C label and authorised vehicles may drive there, and the sticker must be displayed. Exempt from the requirement are residents of Sector 1 and Paseo de Sarasate, people with reduced mobility or dependants, garage-space holders, anyone heading to a public car park, shops and hotels, emergencies, building work, removals, repairs and public transport. Breaking the rule is a serious offence: ${h.eur(c.multa.importe)}, or ${h.eur(c.multa.pronto_pago)} if paid early.`,
    faqs: (h) => [
      { q: 'Do the 30-minute accesses to Pamplona’s Old Town require a label?', a: 'Yes. One-off 30-minute accesses to drop off or pick up people or goods, requested through 010, the online office or the TokTok app, now require the environmental label. So do parcel deliveries in vehicles up to 3.5 m³, guests of hotels without parking and food delivery.' },
      { q: 'Do I need a label to use the drop-off bay on Calle Mercado?', a: 'No. The council does not require the label to use the drop-off bays on Calle Mercado and Juan de Labrit, nor for drivers heading to a public car park or their own garage space. It is required to drive along the other Old Town streets.' }, { q: `Does Pamplona’s zone restrict the B label?`, a: `No. Pamplona admits vehicles with zero, ECO, B and C labels into the Old Town, plus authorised ones; only unlabelled vehicles are kept out, unless an exception applies. The main requirement for compliant vehicles is to display the sticker. That rule applies everywhere in the zone.` }
    ],
    body: (h) => `
<h2>A ZBE on top of the ZAC</h2>
<p>Pamplona did not draw a new boundary: it added an environmental condition to the Old Town’s Controlled Access Zone, with its delivery hours and half-hour accesses. Everything that existed before still applies, and now you also need a label. The impact falls mostly on people who used to drive in occasionally in an old car rather than on residents, who are exempt.</p>
<h2>The sticker is checked</h2>
<p>Unlike Málaga or Bilbao, the council stresses that the label must be on show. It costs 5 euros from DGT partner outlets such as the post office. The council mailed 75,000 leaflets to explain the change and recorded less traffic in the Old Town in the first weeks.</p>
<p>If your car has no label and you need to drive in often, check whether you fit one of the exceptions or ${h.a('sin-etiqueta', 'what options exist for an unlabelled vehicle')}.</p>`,
  },
});
