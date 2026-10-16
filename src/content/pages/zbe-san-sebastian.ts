import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('san-sebastian');
export default definePage({
  id: 'zbe-san-sebastian', group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 21, tool: 'zbe', ciudad: 'san-sebastian',
  related: ['impuesto-circulacion-san-sebastian', 'zbe-bilbao', 'coche-extranjero-zbe', 'etiqueta-b'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-donostia-san-sebastian', nav: 'ZBE Donostia', card: 'Centro, 1,2 km²; la B fuera desde 2028',
    title: 'ZBE Donostia 2026: San Sebastián, etiqueta B desde 2028',
    description: 'ZBE de Donostia / San Sebastián 2026: 1,2 km² del centro cerrados a coches sin etiqueta DGT; la B, desde 2028. Registro para matrículas extranjeras. Al día.',
    h1: 'ZBE de Donostia / San Sebastián 2026: dos fases',
    intro: 'Donostia restringe hoy los coches sin etiqueta en su centro y en 2028 sumará la etiqueta B. Los coches extranjeros necesitan siempre autorización.',
    resume: (h) => `La Zona de Bajas Emisiones de Donostia / San Sebastián ocupa 1,2 km² del centro de la ciudad. La ordenanza para la mejora de la calidad del aire que la regula se aprobó el 21 de noviembre de 2024 y entró en vigor el 17 de diciembre; las cámaras empezaron a funcionar en enero de 2025 con notificaciones informativas en enero y febrero, y las multas en marzo. En la primera fase, de 2025 a 2027, no pueden acceder los vehículos sin etiqueta ambiental, salvo autorización puntual, temporal o permanente. En la segunda, desde 2028, tampoco podrán los de etiqueta B ni los vehículos sin etiqueta que estaban exceptuados, con una salida para los residentes de más de 70 años. Todos los vehículos con matrícula extranjera, aunque cumplan la norma Euro, deben pedir autorización previa. La sanción es de ${h.eur(c.multa.importe)}, con un 30 % más por reincidencia en un año.`,
    faqs: (h) => [
      { q: 'Vengo de Francia con un coche de 2018: ¿tengo que hacer algún trámite en Donostia?', a: 'Sí: la web municipal indica que todos los vehículos con matrícula extranjera deben solicitar autorización previa para entrar en la ZBE, aunque cumplan la norma Euro. Un turismo de gasolina o diésel matriculado después del 1 de enero de 2006 obtiene el acceso; los híbridos, de gas y eléctricos también, sea cual sea su fecha.' },
      { q: '¿Puede un residente de la ZBE de Donostia seguir usando su coche sin etiqueta?', a: 'Durante la primera fase, con autorización: los residentes y titulares de plaza de garaje en la zona la tramitan como permanente. Desde 2028 la ordenanza endurece el régimen y solo se autorizarán vehículos sin etiqueta de residentes de más de 70 años, según la información municipal.' }, { q: `¿Cómo compruebo en Donostia si mi coche puede entrar?`, a: `La web municipal tiene un buscador: introduces la matrícula y te dice si el vehículo puede acceder a la zona de bajas emisiones. Para los coches con matrícula española usa la clasificación de la DGT; para los extranjeros hay que pedir autorización previa en el formulario específico del Ayuntamiento.` }
    ],
    body: (h) => `
<h2>Una zona pequeña con mucho tráfico</h2>
<p>El perímetro de 1,2 km² cubre el centro de una ciudad que recibe muchos visitantes en coche, también desde Francia. La primera fase solo excluye a los vehículos sin etiqueta, los más antiguos del parque; el salto real llegará en 2028, cuando la restricción alcance a la etiqueta B, la de los gasolina de 2001 a 2005 y los diésel de 2006 a 2015.</p>
<h2>Autorizaciones por casos</h2>
<p>El sistema de autorizaciones es muy detallado: por acceso, por mes, por temporada o permanentes, según se trate de reparto, talleres, prácticas de autoescuela, cuidado de personas dependientes o actividad recurrente de trabajo o estudios. La web municipal permite comprobar con la matrícula si un vehículo puede entrar, además de pedir los permisos.</p>
<p>Gipuzkoa tiene régimen foral y el impuesto de circulación de Donostia usa tramos propios, distintos del resto de España: ${h.a('impuesto-circulacion-san-sebastian', 'mira el cuadro de 2026')}.</p>`,
  },
  en: {
    slug: 'zbe-donostia-san-sebastian', nav: 'Donostia ZBE', card: 'Centre, 1.2 km²; B label out from 2028',
    title: 'Donostia ZBE 2026: San Sebastián, B Label Out From 2028',
    description: 'Donostia / San Sebastián low-emission zone 2026: 1.2 km² of the centre closed to unlabelled cars, B label from 2028, permits for foreign plates. Dated.',
    h1: 'Donostia / San Sebastián low-emission zone 2026: two phases',
    intro: 'Donostia restricts unlabelled cars in its centre today and will add the B label in 2028. Foreign-plated cars always need a permit.',
    resume: (h) => `Donostia / San Sebastián’s low-emission zone covers 1.2 km² of the city centre. The air-quality byelaw behind it was approved on 21 November 2024 and came into force on 17 December; cameras started in January 2025, with warning notices in January and February and fines from March. In the first phase, 2025 to 2027, vehicles without an environmental label may not enter unless they hold a one-off, temporary or permanent permit. In the second, from 2028, B-label vehicles and the unlabelled vehicles previously exempted will be shut out too, with a way out for residents over 70. Every foreign-plated vehicle, even one meeting the Euro standard, must apply for prior authorisation. The fine is ${h.eur(c.multa.importe)}, 30% more for a repeat offence within a year.`,
    faqs: (h) => [
      { q: 'I am driving from France in a 2018 car: do I need to do anything in Donostia?', a: 'Yes: the council website says every foreign-plated vehicle must apply for prior authorisation to enter the zone, even if it meets the Euro standard. A petrol or diesel car registered after 1 January 2006 gets access; hybrids, gas and electric cars do too, whatever their date.' },
      { q: 'Can a resident of the Donostia zone keep using an unlabelled car?', a: 'During the first phase, with a permit: residents and garage-space holders in the zone apply for a permanent one. From 2028 the byelaw tightens and, according to the council, unlabelled vehicles will only be authorised for residents over 70. The permit is requested through the council website.' }, { q: `How do I check in Donostia whether my car can enter?`, a: `The council website has a lookup: enter the plate and it tells you whether the vehicle may enter the low-emission zone. For Spanish-registered cars it uses the DGT classification; foreign cars need prior authorisation through the council’s dedicated form. The check takes a few seconds.` }
    ],
    body: (h) => `
<h2>A small zone with heavy traffic</h2>
<p>The 1.2 km² boundary covers the centre of a city that receives many visitors by car, including from France. The first phase only excludes unlabelled vehicles, the oldest on the road; the real jump comes in 2028, when the restriction reaches the B label, held by petrol cars from 2001 to 2005 and diesels from 2006 to 2015.</p>
<h2>Permits case by case</h2>
<p>The permit system is very detailed: per trip, per month, per season or permanent, for deliveries, garages, driving lessons, care of dependent people or regular work or study. The council website lets you check by number plate whether a vehicle may enter, as well as apply for permits.</p>
<p>Gipuzkoa has its own tax regime and Donostia’s road tax uses bands that differ from the rest of Spain: ${h.a('impuesto-circulacion-san-sebastian', 'see the 2026 table')}.</p>`,
  },
});
