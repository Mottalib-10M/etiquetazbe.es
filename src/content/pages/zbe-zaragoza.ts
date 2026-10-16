import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('zaragoza');
export default definePage({
  id: 'zbe-zaragoza', group: 'zbe', order: 14, tool: 'zbe', ciudad: 'zaragoza',
  related: ['impuesto-circulacion-zaragoza', 'pegatina-dgt', 'sin-etiqueta', 'multa-zbe'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-zaragoza', nav: 'ZBE Zaragoza', card: 'Centro histórico, laborables de 8 a 20 h',
    title: 'ZBE Zaragoza 2026: horario, registro y pegatina obligatoria',
    description: 'ZBE Zaragoza 2026: casco histórico sin etiqueta DGT de lunes a viernes de 8 a 20 h, pegatina visible obligatoria y 8 accesos al mes para el resto. Al día.',
    h1: 'ZBE de Zaragoza 2026: horario, registro y pegatina',
    intro: 'Zaragoza aplica su zona en el casco histórico, en horario laboral y exige llevar la pegatina a la vista. Comprueba si tu coche necesita registro.',
    resume: (h) => `La Zona de Bajas Emisiones de Zaragoza ocupa el centro histórico delimitado por las calles San Vicente de Paúl, Coso, Mayoral y Echegaray y Caballero. La ordenanza se aprobó definitivamente el 19 de julio de 2024 y, tras varias fases informativas, la cuarta y última empezó el 12 de diciembre de 2025: desde ese día un vehículo sin etiqueta ambiental de la DGT que no esté inscrito en el registro municipal puede ser denunciado. La restricción rige de lunes a viernes de 8.00 a 20.00 h; fuera de ese horario, en fines de semana y festivos, el acceso es libre. Los vehículos con etiqueta B, C, ECO o 0 no se registran, pero deben exhibir la pegatina en el parabrisas: no hacerlo es una falta leve, aparte de la grave de ${h.eur(c.multa.importe)} por entrar sin permiso. Quien entra por error y sale en menos de 15 minutos no es sancionado, y cualquier coche sin etiqueta puede pedir hasta 8 accesos al mes.`,
    faqs: (h) => [
      { q: 'Tengo plaza de garaje en el Coso y el coche no tiene etiqueta: ¿puedo entrar?', a: 'Sí, si inscribes el vehículo en el registro municipal como asociado a una plaza de garaje dentro de la ZBE. La autorización se renueva cada año y, hecha por la sede electrónica, es inmediata; en papel hay que esperar la respuesta escrita. Lo mismo vale para residentes con tarjeta ESRE y titulares de locales comerciales.' },
      { q: '¿Qué pasa si me meto en la ZBE de Zaragoza por equivocación?', a: 'El sistema detecta la entrada y no sanciona si el vehículo sale de la zona en menos de 15 minutos. Es una tolerancia pensada para quien se equivoca de calle al bordear el Coso; si pasas más tiempo dentro, la denuncia es la de una infracción grave.' },
      { q: '¿Quién vigila hoy la ZBE de Zaragoza?', a: 'La Policía Local, de forma presencial, mientras se adjudica el nuevo contrato de estacionamiento regulado, que incluye cámaras de lectura de matrículas conectadas a la DGT y al registro municipal. Por eso la pegatina visible es obligatoria: es la forma en que un agente comprueba la etiqueta sin consultar la base de datos.' },
    ],
    body: (h) => `
<h2>Una zona en el corazón del Casco</h2>
<p>El perímetro de Zaragoza es compacto y coincide con calles que ya tenían tráfico restringido a residentes, badenes y accesos controlados. La ZBE añade una condición más: la etiqueta. Las calles del perímetro sirven de borde, y las plazas de estacionamiento interiores, para residentes, no residentes, reparto, bicis y motos, solo pueden usarlas los vehículos que cumplen.</p>
<h2>El registro, la pieza clave</h2>
<p>Casi todas las excepciones pasan por inscribirse: personas con movilidad reducida, plazas de garaje, locales, residentes, servicios esenciales, transporte de enfermos, hoteles y aparcamientos públicos con control de acceso conectado. Para quien no encaja en ninguna, los 8 accesos mensuales cubren una visita médica o una mudanza sin tener que cambiar de coche.</p>
<h2>La pegatina sí cuenta aquí</h2>
<p>Zaragoza es una de las pocas ciudades donde llevar el distintivo es obligatorio. Se compra por unos 5 euros en Correos, talleres o gestorías; si no sabes cuál te corresponde, ${h.a('pegatina-dgt', 'la guía de la pegatina')} explica cómo pedirla y dónde colocarla.</p>`,
  },
  en: {
    slug: 'zbe-zaragoza', nav: 'Zaragoza ZBE', card: 'Historic centre, weekdays 8 am to 8 pm',
    title: 'Zaragoza ZBE 2026: Hours, Register and Compulsory Sticker',
    description: 'Zaragoza low-emission zone 2026: historic centre, no DGT label banned weekdays 8 am to 8 pm, sticker on show and 8 accesses a month for others. Dated.',
    h1: 'Zaragoza low-emission zone 2026: hours, register and sticker',
    intro: 'Zaragoza enforces its zone in the historic centre during working hours and requires the sticker to be on show. Check whether your car needs registering.',
    resume: (h) => `Zaragoza’s low-emission zone covers the historic centre bounded by San Vicente de Paúl, Coso, Mayoral and Echegaray y Caballero streets. The byelaw was finally approved on 19 July 2024 and, after several information phases, the fourth and last began on 12 December 2025: since then a vehicle without a DGT environmental label that is not in the council register can be fined. The restriction applies Monday to Friday from 8.00 to 20.00; outside those hours, at weekends and on public holidays, access is free. Vehicles with a B, C, ECO or zero label need no registration but must display the sticker on the windscreen: not doing so is a minor offence, separate from the serious ${h.eur(c.multa.importe)} one for entering without permission. Drivers who enter by mistake and leave within 15 minutes are not fined, and any unlabelled car can request up to 8 accesses a month.`,
    faqs: (h) => [
      { q: 'I have a garage space on the Coso and my car has no label: can I drive in?', a: 'Yes, if you enter the vehicle in the council register as linked to a garage space inside the zone. The permit is renewed every year and is immediate online; on paper you have to wait for a written reply. The same applies to residents with an ESRE parking card and owners of business premises.' },
      { q: 'What if I turn into the Zaragoza zone by mistake?', a: 'The system records the entry and issues no fine if the vehicle leaves within 15 minutes. It is a margin meant for drivers who take a wrong turn off the Coso; stay longer and the fine is the serious-offence one.' },
      { q: 'Who enforces the Zaragoza zone today?', a: 'The local police, in person, until the new regulated-parking contract is awarded, which includes number-plate cameras linked to the DGT and the council register. That is why the visible sticker is compulsory: it lets an officer check the label without querying the database.' },
    ],
    body: (h) => `
<h2>A zone at the heart of the old town</h2>
<p>Zaragoza’s boundary is compact and matches streets that already had residents-only traffic, speed bumps and controlled access. The zone adds one more condition: the label. Perimeter streets form the edge, and the parking spaces inside, for residents, visitors, deliveries, bikes and motorbikes, can only be used by vehicles that comply.</p>
<h2>The register is the key</h2>
<p>Nearly every exception goes through registering: reduced mobility, garage spaces, business premises, residents, essential services, patient transport, hotels and public car parks with connected entry control. For anyone who fits none of these, the 8 monthly accesses cover a hospital visit or a house move without changing car.</p>
<h2>The sticker does count here</h2>
<p>Zaragoza is one of the few cities where displaying the label is compulsory. It costs about 5 euros at post offices, garages or agencies; if you are unsure which one you are entitled to, ${h.a('pegatina-dgt', 'the sticker guide')} explains how to get it and where to put it.</p>`,
  },
});
