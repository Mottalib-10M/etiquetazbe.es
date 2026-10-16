import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('valladolid');
export default definePage({
  id: 'zbe-valladolid', group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 17, tool: 'zbe', ciudad: 'valladolid',
  related: ['impuesto-circulacion-valladolid', 'etiqueta-eco', 'etiqueta-c', 'zonas-bajas-emisiones'], sources: ['ley7_2021', 'lsv', 'rd1052_2022'],
  es: {
    slug: 'zbe-valladolid', nav: 'ZBE Valladolid', card: 'B prohibida desde el 31/12/2027, C desde 2030',
    title: 'ZBE Valladolid 2026: calendario de la B y la C, sentencia',
    description: 'ZBE Valladolid 2026: sin etiqueta prohibido desde julio de 2025, la B desde el 31/12/2027 y la C desde 2030 para no residentes. Multa de 200 €. Al día.',
    h1: 'ZBE de Valladolid 2026: calendario hasta 2030',
    intro: 'Valladolid tiene la ordenanza más exigente del grupo: solo la 0 y la ECO entran sin plazo. Comprueba cuándo le llega el turno a tu etiqueta.',
    resume: (h) => `La Zona de Bajas Emisiones de Valladolid ocupa el centro, dentro del perímetro de la Plaza de Zorrilla, María de Molina, el paseo de Isabel la Católica, San Quirce, la Plaza de San Pablo, Chancillería, Colón, la Cruz Verde, la Plaza de España y Miguel Íscar; las calles del perímetro son de libre circulación. La ordenanza, publicada en el Boletín Oficial de la Provincia el 19 de noviembre de 2024, solo da acceso permanente a los vehículos 0 y ECO, a los de los empadronados en la zona y a algunos servicios. Para los demás fija un calendario de caducidad de exenciones: los vehículos sin etiqueta quedaron fuera el 30 de junio de 2025, la etiqueta B lo estará desde el 31 de diciembre de 2027 y la C desde el 1 de enero de 2030. Las cámaras imponen unas 50 sanciones diarias de ${h.eur(c.multa.importe)}. Una sentencia todavía no firme ha afectado a la ordenanza: el Ayuntamiento la recurre en casación y prepara un texto nuevo.`,
    faqs: (h) => [
      { q: '¿Me pueden multar en Valladolid si la ordenanza ha sido anulada?', a: 'Sí, mientras la sentencia no sea firme. El alcalde ha explicado que existe una imposibilidad legal de suspender el régimen sancionador o devolver sanciones ya impuestas, y el Ayuntamiento prepara un recurso de casación. Al mismo tiempo abrió una consulta pública, hasta el 31 de mayo de 2026, para una ordenanza nueva que podría cambiar el calendario.' },
      { q: '¿Se suspende la ZBE durante Pingüinos?', a: 'En 2026 sí: el Ayuntamiento suspendió la Zona de Bajas Emisiones del 8 al 11 de enero por la concentración motera, sin sanciones en ese periodo. Es una suspensión puntual que se acuerda para cada edición; no es una excepción permanente de la ordenanza.' },
      { q: 'Mi coche es un híbrido no enchufable: ¿tengo algún plazo en Valladolid?', a: 'No. Los vehículos con etiqueta ECO, como los híbridos no enchufables y los de gas que cumplen la C, y los de etiqueta 0 pueden acceder, circular y estacionar en las plazas reguladas del interior sin fecha de caducidad en la ordenanza vigente. Son, con los empadronados, los únicos que no dependen del calendario.' },
    ],
    body: (h) => `
<h2>Al revés que las demás</h2>
<p>La mayoría de las ordenanzas enumeran a quién se prohíbe entrar. La de Valladolid hace lo contrario: enumera quién puede entrar siempre (bicicletas, vehículos 0 y ECO, compartidos, movilidad reducida, servicios esenciales) y trata a todos los demás como exenciones con fecha de caducidad. El efecto es que la C, que en casi todas las ciudades circula sin problema, tiene aquí fecha de salida en 2030.</p>
<h2>Una ordenanza en revisión</h2>
<p>El alcalde reconoció que la sentencia judicial «no es una buena noticia» y defendió una norma «más afinada, equilibrada y ajustada a la experiencia acumulada». Solo el 3,8 % de los vehículos que entran carece de etiqueta, según el Ayuntamiento. Hasta que se apruebe otra ordenanza, el simulador aplica las fechas publicadas; elige 2028 o 2030 en «Más opciones» para ver cómo afectarán a tu coche.</p>
<p>Los empadronados en la zona conservan el acceso con cualquier etiqueta, y también los vehículos de personas físicas o jurídicas que residen en ella por renting o leasing. Si tu coche está domiciliado en Valladolid pero fuera del perímetro, ${h.a('impuesto-circulacion-valladolid', 'el impuesto de circulación')} sí bonifica los eléctricos e híbridos.</p>`,
  },
  en: {
    slug: 'zbe-valladolid', nav: 'Valladolid ZBE', card: 'B banned from 31/12/2027, C from 2030',
    title: 'Valladolid ZBE 2026: B and C Label Timetable, Court Ruling',
    description: 'Valladolid low-emission zone 2026: no label banned since July 2025, B from 31/12/2027 and C from 2030 for non-residents. Ruling under appeal. Sourced.',
    h1: 'Valladolid low-emission zone 2026: the timetable to 2030',
    intro: 'Valladolid has the strictest byelaw in our list: only zero and ECO vehicles get in with no deadline. Check when your label’s turn comes.',
    resume: (h) => `Valladolid’s low-emission zone covers the centre, inside the perimeter of Plaza de Zorrilla, María de Molina, Paseo de Isabel la Católica, San Quirce, Plaza de San Pablo, Chancillería, Colón, Cruz Verde, Plaza de España and Miguel Íscar; the perimeter streets themselves are open to all. The byelaw, published in the provincial gazette on 19 November 2024, gives permanent access only to zero and ECO vehicles, to those of people registered as living in the zone and to some services. For everyone else it sets expiry dates for exemptions: unlabelled vehicles were shut out on 30 June 2025, the B label will be from 31 December 2027 and the C from 1 January 2030. Cameras issue around 50 fines of ${h.eur(c.multa.importe)} a day. A court ruling that is not yet final has hit the byelaw: the council is appealing to the Supreme Court and drafting a new text.`,
    faqs: (h) => [
      { q: 'Can I be fined in Valladolid if the byelaw has been struck down?', a: 'Yes, as long as the ruling is not final. The mayor has said the council is legally unable to suspend fines or refund those already imposed, and it is preparing an appeal to the Supreme Court. It also opened a public consultation, until 31 May 2026, on a new byelaw that could change the timetable.' },
      { q: 'Is the zone suspended during the Pingüinos rally?', a: 'In 2026 it was: the council suspended the low-emission zone from 8 to 11 January for the motorbike gathering, with no fines during that time. It is a one-off suspension agreed for each edition, not a permanent exception in the byelaw.' },
      { q: 'My car is a self-charging hybrid: do I face any deadline in Valladolid?', a: 'No. ECO vehicles, such as self-charging hybrids and gas cars meeting the C requirements, and zero-emission vehicles may enter, drive and use the regulated parking inside with no expiry date in the current byelaw. With residents of the zone, they are the only ones not tied to the timetable.' },
    ],
    body: (h) => `
<h2>The opposite of everyone else</h2>
<p>Most byelaws list who is banned. Valladolid’s does the reverse: it lists who may always enter (bicycles, zero and ECO vehicles, shared cars, reduced mobility, essential services) and treats everyone else as an exemption with an expiry date. The result is that the C label, which drives freely almost everywhere, has a way-out date here in 2030.</p>
<h2>A byelaw under review</h2>
<p>The mayor admitted that the court ruling “is not good news” and argued for a rule “better tuned, balanced and adjusted to experience”. Only 3.8% of vehicles entering have no label, according to the council. Until another byelaw is passed, the tool applies the published dates; pick 2028 or 2030 under “More options” to see how they will affect your car.</p>
<p>People registered as living in the zone keep access with any label, as do vehicles of residents held on renting or leasing. If your car is registered in Valladolid but outside the perimeter, ${h.a('impuesto-circulacion-valladolid', 'the road tax')} does give relief to electric and hybrid cars.</p>`,
  },
});
