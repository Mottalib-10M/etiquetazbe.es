import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('sant-cugat');
export default definePage({
  id: 'zbe-sant-cugat', group: 'zbe', order: 24, tool: 'zbe', ciudad: 'sant-cugat',
  related: ['zbe-barcelona', 'sin-etiqueta', 'moto-zbe', 'multa-zbe'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-sant-cugat', nav: 'ZBE Sant Cugat', card: 'Primera ZBE local del área metropolitana',
    title: 'ZBE Sant Cugat 2026: horario, multas y 10 días de acceso',
    description: 'ZBE de Sant Cugat 2026: 4 km² cerrados a vehículos sin etiqueta DGT laborables de 7 a 20 h. Multas de 100 a 500 €, 10 accesos al año y Park&Ride. Al día.',
    h1: 'ZBE de Sant Cugat 2026: la primera fuera de las rondas',
    intro: 'Sant Cugat estrenó en 2021 la primera ZBE local del área metropolitana de Barcelona, con el mismo horario que las Rondes. Comprueba si tu coche entra.',
    resume: (h) => `Sant Cugat del Vallès fue la primera ciudad catalana fuera del ámbito de la ZBE Rondes de Barcelona en desplegar su propia zona de bajas emisiones. Activada el 1 de mayo de 2021, ocupa unos 4 km² del municipio, entre la carretera de Vallvidrera, la Ronda Nord, la avinguda de Roquetes, el carrer de Sant Crist Llaceres y el passeig de Valldoreix. Los vehículos sin etiqueta de la DGT no pueden circular por ella de lunes a viernes de 7 a 20 h, excepto festivos. Las multas empezaron el 1 de noviembre de 2021 para turismos y motos, y el 1 de mayo de 2022 para furgonetas, camiones y autobuses; los grandes camiones del polígono de Can Magí tuvieron cinco años de margen. Las sanciones van desde ${h.eur(100)} en una infracción leve hasta ${h.eur(500)} en una muy grave, con ${h.eur(c.multa.importe)} en la grave y un 30 % más por reiteración. Cualquier vehículo puede pedir hasta 10 accesos esporádicos al año.`,
    faqs: (h) => [
      { q: '¿Dónde dejo el coche sin etiqueta si voy a Sant Cugat?', a: 'El Ayuntamiento tiene un aparcamiento disuasorio Park&Ride en la avinguda de Roquetes, conectado con el centro por un autobús con paso aproximado cada 10 minutos. Así se entra en la ciudad sin circular por la ZBE en horario de restricción. También se estudia otro aparcamiento cerca de la carretera de Rubí.' },
      { q: '¿Los autónomos con poco ingreso tienen moratoria en Sant Cugat?', a: 'Sí, para motos y coches dedicados exclusivamente a la actividad profesional de autónomos con ingresos inferiores a dos veces el IPREM. La moratoria hay que solicitarla en la web de la ZBE metropolitana; sin ella, el vehículo sin etiqueta queda sujeto al horario de restricción como cualquier otro.' }, { q: `¿La ZBE de Sant Cugat funciona en agosto y en festivos?`, a: `Funciona los días laborables de lunes a viernes, de 7 a 20 h, excepto festivos, también en verano. Los fines de semana y los días festivos no hay restricción. Si el día es laborable en agosto, las cámaras siguen controlando como el resto del año.` }
    ],
    body: (h) => `
<h2>Mismo registro que Barcelona</h2>
<p>Las autorizaciones de Sant Cugat se gestionan con el mismo registro metropolitano que la ZBE Rondes, así que un vehículo autorizado por enfermedad o por servicios esenciales tiene un único trámite. La diferencia está en los días esporádicos: Sant Cugat da un máximo de 10 al año, frente a los 24 de Barcelona desde 2023. Las cámaras están en los semáforos de acceso y un coche de la policía local también lee matrículas.</p>
<h2>Lo que dicen los datos</h2>
<p>El Ayuntamiento ha publicado que la ZBE está contribuyendo a reducir el parque de vehículos más contaminantes de la ciudad. La restricción sigue limitada a los vehículos sin etiqueta: las B y C circulan sin problema. Para saber cuál tiene tu coche o tu moto, ${h.a('moto-zbe', 'consulta la guía de motos')} o el simulador.</p>`,
  },
  en: {
    slug: 'zbe-sant-cugat', nav: 'Sant Cugat ZBE', card: 'First local zone in the Barcelona area',
    title: 'Sant Cugat ZBE 2026: Hours, Fines and 10 Access Days',
    description: 'Sant Cugat low-emission zone 2026: 4 km² closed to unlabelled vehicles on working weekdays, 7 am to 8 pm. Fines from €100 to €500, 10 access days. Dated.',
    h1: 'Sant Cugat low-emission zone 2026: the first outside the ring roads',
    intro: 'In 2021 Sant Cugat opened the first local zone in the Barcelona metropolitan area, with the same hours as the Rondes zone. Check whether your car can enter.',
    resume: (h) => `Sant Cugat del Vallès was the first Catalan town outside the ZBE Rondes de Barcelona to set up its own low-emission zone. Switched on on 1 May 2021, it covers about 4 km² of the town, between the Vallvidrera road, Ronda Nord, Avinguda de Roquetes, Carrer de Sant Crist Llaceres and Passeig de Valldoreix. Vehicles without a DGT label may not drive there Monday to Friday from 7 am to 8 pm, public holidays excepted. Fines started on 1 November 2021 for cars and motorbikes and on 1 May 2022 for vans, lorries and buses; heavy lorries in the Can Magí industrial estate got five years’ grace. Penalties run from ${h.eur(100)} for a minor offence to ${h.eur(500)} for a very serious one, with ${h.eur(c.multa.importe)} for a serious offence and 30% more for repeat offences. Any vehicle may request up to 10 occasional accesses a year.`,
    faqs: (h) => [
      { q: 'Where can I leave an unlabelled car when visiting Sant Cugat?', a: 'The council runs a Park&Ride car park on Avinguda de Roquetes, linked to the centre by a bus roughly every 10 minutes. That way you reach the town without driving in the zone during restricted hours. A second car park near the Rubí road is being studied.' },
      { q: 'Do low-income self-employed drivers get a grace period in Sant Cugat?', a: 'Yes, for cars and motorbikes used solely for the work of self-employed people earning under twice the IPREM index. It must be requested on the metropolitan ZBE website; without it, the unlabelled vehicle is subject to the restricted hours like any other.' }, { q: `Does Sant Cugat’s zone run in August and on public holidays?`, a: `It runs on working days, Monday to Friday from 7 am to 8 pm, public holidays excepted, summer included. At weekends and on public holidays there is no restriction. On an ordinary weekday in August the cameras check as they do the rest of the year.` }
    ],
    body: (h) => `
<h2>The same register as Barcelona</h2>
<p>Sant Cugat’s permits run through the same metropolitan register as the Rondes zone, so a vehicle authorised for illness or essential services needs a single application. The difference lies in occasional days: Sant Cugat allows up to 10 a year, against Barcelona’s 24 since 2023. Cameras sit at the traffic lights on the way in, and a local police car also reads plates.</p>
<h2>What the figures show</h2>
<p>The council has reported that the zone is helping to shrink the town’s stock of the most polluting vehicles. The restriction still only targets unlabelled vehicles: B and C cars drive freely. To find out which label your car or motorbike has, ${h.a('moto-zbe', 'see the motorbike guide')} or use the tool.</p>`,
  },
});
