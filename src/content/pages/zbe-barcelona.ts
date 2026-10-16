import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('barcelona');
export default definePage({
  id: 'zbe-barcelona', group: 'zbe', order: 11, tool: 'zbe', ciudad: 'barcelona',
  related: ['impuesto-circulacion-barcelona', 'zbe-sant-cugat', 'sin-etiqueta', 'coche-extranjero-zbe'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-barcelona', nav: 'ZBE Barcelona', card: 'Rondes: sin etiqueta, laborables de 7 a 20 h',
    title: 'ZBE Barcelona 2026: horario, multa y quién puede entrar',
    description: 'ZBE Rondes de Barcelona 2026: sin etiqueta DGT prohibido de lunes a viernes de 7 a 20 h en 95 km², L’Hospitalet incluido. Multa de 200 € y 24 días. Al día.',
    h1: 'ZBE Rondes de Barcelona 2026: horario, excepciones y multa',
    intro: 'La zona de Barcelona es la más extensa del sur de Europa y multa desde 2020. Comprueba tu etiqueta y si te afecta el horario.',
    resume: (h) => `La ZBE Rondes de Barcelona cubre más de 95 km² entre la Ronda de Dalt y la Ronda del Litoral: todo Barcelona salvo la Zona Franca, Vallvidrera, el Tibidabo y les Planes, más L’Hospitalet de Llobregat, Sant Adrià de Besòs y parte de Esplugues y Cornellà. Los turismos y las motos sin etiqueta de la DGT no pueden circular por ella de lunes a viernes de 7.00 a 20.00 h desde el 1 de enero de 2020; las furgonetas desde abril de 2021, los camiones y microbuses desde 2022 y los autocares desde julio de 2022. Las etiquetas 0, ECO, C y B circulan sin restricción, y por las propias rondas puede ir cualquier vehículo. Fuera de ese horario y los fines de semana la zona no restringe. La sanción es única, de ${h.eur(c.multa.importe)}, con un recargo del 30 % durante los episodios de contaminación. Desde 2023 la ordenanza permite 24 días de acceso esporádico al año y autorizaciones para rentas bajas.`,
    faqs: (h) => [
      { q: '¿Puedo usar las rondas con un coche sin etiqueta?', a: 'Sí. La Ronda de Dalt y la Ronda del Litoral no forman parte de la ZBE y están abiertas a todos los vehículos a cualquier hora. Lo que no se puede, en días laborables de 7 a 20 h, es tomar una salida hacia el interior de la zona. Los paneles de mensaje variable de los accesos avisan antes de llegar.' },
      { q: '¿Cómo funcionan los 24 días de acceso esporádico?', a: 'La ordenanza vigente desde el 28 de enero de 2023 permite a un vehículo sin etiqueta entrar 24 días al año, incluidos los históricos y clásicos, pidiendo la autorización diaria en el registro metropolitano. Si se declara un episodio de contaminación por NO2, no se conceden permisos diarios nuevos mientras dure, salvo los pedidos antes.' },
      { q: '¿Qué pasa con un coche con matrícula francesa en Barcelona?', a: 'Tiene que registrarse en el sistema metropolitano. Si cumple los requisitos técnicos equivalentes a una etiqueta de la DGT, queda autorizado sin restricciones; si no, solo puede pedir autorizaciones diarias, con un máximo de diez al año según la información municipal para vehículos extranjeros.' },
    ],
    body: (h) => `
<h2>Una sola zona para cinco municipios</h2>
<p>A diferencia de Madrid, Barcelona no tiene capas: hay un perímetro metropolitano gestionado con el Área Metropolitana (AMB) y una regla, sin etiqueta no se entra en horario laborable. La consecuencia práctica es que un vecino de L’Hospitalet o de Sant Adrià está dentro de la zona aunque no viva en Barcelona, y que el mismo coche sin etiqueta que no puede ir a trabajar un martes a las nueve puede cruzar la ciudad un sábado sin problema.</p>
<h2>Las excepciones que más se piden</h2>
<p>La reforma de 2023 amplió las salidas para quien no puede cambiar de coche. Las personas con ingresos anuales inferiores a dos veces el IPREM, incrementado según los miembros del hogar, obtienen una autorización anual; los profesionales a los que faltan cinco años para jubilarse pueden seguir usando su vehículo de trabajo; quien acredita la compra de un coche que cumple tiene permiso mientras espera la entrega. Se mantienen las excepciones por enfermedad, tratamiento médico periódico y movilidad reducida.</p>
<h2>La etiqueta B, todavía libre</h2>
<p>Barcelona no ha fijado fecha para restringir la B, a diferencia de Palma, Málaga o Bilbao. Si tu coche es de gasolina de 2001 a 2005 o diésel de 2006 a 2015, hoy circula sin límite en la ZBE Rondes. Puedes ${h.a('etiqueta-b', 'ver qué ciudades ya la restringen')} y comprobar la del tuyo con el simulador.</p>`,
  },
  en: {
    slug: 'zbe-barcelona', nav: 'Barcelona ZBE', card: 'Rondes: no label, weekdays 7 am to 8 pm',
    title: 'Barcelona ZBE 2026: Hours, Fine and Who Can Drive In',
    description: 'Barcelona Rondes low-emission zone 2026: no DGT label banned weekdays 7 am to 8 pm across 95 km², L’Hospitalet included. €200 fine, 24 access days. Dated.',
    h1: 'Barcelona Rondes low-emission zone 2026: hours, exceptions, fine',
    intro: 'Barcelona’s zone is the largest in southern Europe and has been fining since 2020. Check your label and whether its hours affect you.',
    resume: (h) => `The ZBE Rondes de Barcelona covers more than 95 km² between the Ronda de Dalt and Ronda del Litoral ring roads: all of Barcelona except Zona Franca, Vallvidrera, Tibidabo and Les Planes, plus L’Hospitalet de Llobregat, Sant Adrià de Besòs and parts of Esplugues and Cornellà. Cars and motorbikes without a DGT label may not drive inside it from Monday to Friday, 7.00 to 20.00, since 1 January 2020; vans since April 2021, lorries and minibuses since 2022 and coaches since July 2022. The zero, ECO, C and B labels drive freely, and any vehicle may use the ring roads themselves. Outside those hours and at weekends nothing is restricted. There is a single ${h.eur(c.multa.importe)} fine, 30% higher during pollution episodes. Since 2023 the byelaw allows 24 occasional access days a year and permits for people on low incomes.`,
    faqs: (h) => [
      { q: 'Can I use the ring roads in a car without a label?', a: 'Yes. The Ronda de Dalt and Ronda del Litoral are not part of the zone and are open to every vehicle at all times. What you cannot do, on weekdays from 7 am to 8 pm, is take an exit into the zone. Electronic signs on the approach roads warn you in advance.' },
      { q: 'How do the 24 occasional access days work?', a: 'The byelaw in force since 28 January 2023 lets an unlabelled vehicle enter on 24 days a year, historic and classic cars included, by requesting a day permit in the metropolitan register. During a declared NO2 pollution episode no new day permits are granted, except those requested beforehand.' },
      { q: 'What about a French-registered car in Barcelona?', a: 'It must be registered in the metropolitan system. If it meets the technical requirements equivalent to a DGT label it is authorised without restriction; if not, it can only request day permits, up to ten a year according to the council’s information for foreign vehicles.' },
    ],
    body: (h) => `
<h2>One zone across five towns</h2>
<p>Unlike Madrid, Barcelona has no layers: there is one metropolitan boundary run with the Metropolitan Area (AMB) and one rule, no label means no entry during working hours. In practice someone living in L’Hospitalet or Sant Adrià is inside the zone without living in Barcelona, and the same unlabelled car that cannot drive to work on a Tuesday at nine can cross the city on a Saturday.</p>
<h2>The exceptions people ask for most</h2>
<p>The 2023 reform widened the options for those who cannot change car. People whose yearly income is below twice the IPREM index, adjusted for household size, get an annual permit; self-employed workers within five years of retirement may keep using their work vehicle; anyone who proves they have bought a compliant car is covered while waiting for delivery. Exceptions for illness, regular medical treatment and reduced mobility remain.</p>
<h2>The B label is still free</h2>
<p>Barcelona has set no date to restrict the B label, unlike Palma, Málaga or Bilbao. If your car is a petrol from 2001 to 2005 or a diesel from 2006 to 2015, it drives in the Rondes zone without limit today. You can ${h.a('etiqueta-b', 'see which cities already restrict it')} and check yours with the tool.</p>`,
  },
});
