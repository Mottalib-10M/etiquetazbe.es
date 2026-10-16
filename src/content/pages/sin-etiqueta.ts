import { definePage } from '../../lib/page-types';
import { N_CIUDADES, restringen, nombres } from '../../lib/resumen-ciudades';
import { CIUDADES, etiquetasRestringidas } from '../../lib/engine/zbe';
const n = CIUDADES.filter((c) => etiquetasRestringidas(c, '2026-10-16').includes('A')).length;
export default definePage({
  id: 'sin-etiqueta', group: 'etiqueta', order: 6, tool: 'etiqueta', toolPreset: { energia: 'gasolina', anio: 1998, etiqueta: 'A' },
  related: ['etiqueta-b', 'multa-zbe', 'zbe-barcelona', 'coche-extranjero-zbe'], sources: ['dgt_distintivo', 'dgt_consulta', 'lsv'],
  es: {
    slug: 'coche-sin-etiqueta', nav: 'Coche sin etiqueta', card: 'Gasolina antes de 2001, diésel antes de 2006',
    title: 'Coche sin etiqueta DGT 2026: dónde puede circular y opciones',
    description: 'Coche sin etiqueta DGT en 2026: gasolina anterior a 2001 y diésel anterior a 2006. ZBE donde no entra, excepciones, accesos puntuales y multa. Al día.',
    h1: 'Coche sin etiqueta en 2026: dónde no entra y qué opciones hay',
    intro: 'Sin etiqueta no significa sin derecho a circular: fuera de las zonas de bajas emisiones, el coche se usa con normalidad. Dentro, cada ciudad tiene sus salidas.',
    resume: (h) => `Un vehículo no tiene derecho a distintivo ambiental cuando no cumple ni los requisitos de la etiqueta B: en turismos, los de gasolina anteriores a la norma Euro 3, matriculados en general antes de 2001, y los diésel anteriores a la Euro 4, antes de 2006; en motos, los anteriores a la Euro 2. La DGT los cuenta en el 50 % más contaminante del parque. Pueden circular por carreteras y por cualquier ciudad sin ZBE, pero ${n} de las ${N_CIUDADES} ciudades con ZBE de esta web los restringen ya al menos para los vehículos de fuera: Barcelona en días laborables de 7 a 20 h, Madrid en toda la ciudad, Málaga, Granada o Vitoria-Gasteiz si no están domiciliados allí. Casi todas ofrecen salidas: accesos esporádicos (24 días al año en Barcelona, 48 en València, 8 al mes en Zaragoza), parkings, residentes, rentas bajas y vehículos históricos. Entrar sin permiso cuesta ${h.eur(h.P.multa.zbe_grave)}.`,
    faqs: (h) => [
      { q: '¿Puedo conseguir una etiqueta para un coche que no la tiene?', a: 'No pagando ni con un trámite: la DGT solo emite la pegatina a los vehículos que tienen derecho por su clasificación. Si la clasificación es errónea, por ejemplo un gasolina de 2000 que en realidad está homologado en Euro 3, la ficha técnica sirve para pedir la corrección y entonces sí corresponde la B.' },
      { q: '¿Un coche histórico sin etiqueta puede entrar en las ZBE?', a: 'En muchas ciudades sí: Madrid exceptúa a los vehículos históricos dados de alta en su sistema, y Barcelona los incluye en sus 24 días de acceso esporádico al año. Hace falta que el vehículo esté matriculado o catalogado como histórico, no basta con su antigüedad, y en algunas ciudades inscribirlo en el registro municipal.' }, { q: `¿Puedo circular por la autovía con un coche sin etiqueta?`, a: `Sí. Las zonas de bajas emisiones solo afectan a las calles de su perímetro: las autovías, las carreteras y las rondas de circunvalación quedan fuera, como la M-40 en Madrid o las rondas de Barcelona. La restricción empieza al entrar en la zona. Durante los episodios de contaminación, algunas ciudades pueden limitar además otras vías.` }
    ],
    body: (h) => `
<h2>Las salidas más útiles</h2>
<p>Para un uso puntual, los accesos esporádicos son la vía más sencilla: Barcelona da 24 días al año, València 48 accesos y Zaragoza 8 al mes, y Sant Cugat 10 al año. Para ir al centro, varias ciudades permiten llegar a un aparcamiento público: Granada si se aparca más de una hora, Sevilla con sus bolsas disuasorias de la Cartuja. Para un uso diario, las excepciones por renta baja (Barcelona, Granada, Sant Cugat), por edad o por movilidad reducida son las que más cuentan.</p>
<h2>Vecinos con coche sin etiqueta</h2>
<p>El vecino domiciliado tiene casi siempre más plazo que el visitante: Valencia hasta finales de 2027, Vitoria-Gasteiz hasta septiembre de 2027 para los residentes, Granada sin fecha, Madrid con su régimen transitorio condicionado a la calidad del aire. Comprueba en el simulador tu caso exacto con el domicilio del vehículo. Y si te multan, ${h.a('multa-zbe', 'la guía de la multa')} explica plazos y pronto pago.</p>`,
  },
  en: {
    slug: 'car-without-label', nav: 'Car without a label', card: 'Petrol before 2001, diesel before 2006',
    title: 'Car Without a DGT Label 2026: Where It Can Go, Options',
    description: 'Car with no DGT label in Spain in 2026: petrol before 2001, diesel before 2006. Zones it cannot enter, exceptions, access days, historic cars, €200 fine.',
    h1: 'Car without a label in 2026: where it cannot go and the options',
    intro: 'No label does not mean no right to drive: outside low-emission zones the car is used as normal. Inside them, each city has its own ways in.',
    resume: (h) => `A vehicle gets no environmental label when it does not even meet the B requirements: for cars, petrol models below Euro 3, generally registered before 2001, and diesels below Euro 4, before 2006; for motorbikes, those below Euro 2. The DGT counts them in the most polluting 50% of the fleet. They can use main roads and any town without a zone, but ${n} of the ${N_CIUDADES} cities with zones on this site already restrict them at least for out-of-town vehicles: Barcelona on weekdays from 7 am to 8 pm, Madrid across the whole city, Málaga, Granada or Vitoria-Gasteiz unless registered there. Almost all offer ways in: occasional access (24 days a year in Barcelona, 48 in València, 8 a month in Zaragoza), car parks, residents, low incomes and historic vehicles. Driving in without permission costs ${h.eur(h.P.multa.zbe_grave)}.`,
    faqs: (h) => [
      { q: 'Can I get a label for a car that has none?', a: 'Not by paying or filling in a form: the DGT only issues the sticker to vehicles entitled to it by their classification. If the classification is wrong, say a 2000 petrol car actually approved to Euro 3, the technical card is your evidence for a correction, and then the B applies.' },
      { q: 'Can a historic car without a label enter the zones?', a: 'In many cities, yes: Madrid exempts historic vehicles registered in its system, and Barcelona includes them in its 24 occasional access days a year. The vehicle has to be registered or catalogued as historic, age alone is not enough, and some cities also require it to be entered in the council register.' }, { q: `Can I use the motorway in an unlabelled car?`, a: `Yes. Low-emission zones only cover the streets inside their boundary: motorways, main roads and ring roads stay outside, such as the M-40 in Madrid or Barcelona’s ring roads. The restriction starts when you enter the zone. During pollution episodes some cities may also limit other roads.` }
    ],
    body: (h) => `
<h2>The most useful ways in</h2>
<p>For occasional use, access days are simplest: Barcelona gives 24 days a year, València 48 accesses, Zaragoza 8 a month and Sant Cugat 10 a year. To reach the centre, several cities let you drive to a public car park: Granada if you park for more than an hour, Seville with its Cartuja car parks. For daily use, exceptions for low incomes (Barcelona, Granada, Sant Cugat), age or reduced mobility matter most.</p>
<h2>Residents with an unlabelled car</h2>
<p>Locally registered residents almost always get more time than visitors: València until the end of 2027, Vitoria-Gasteiz until September 2027 for residents, Granada with no date, Madrid with its transitional regime tied to air quality. Check your exact case in the tool with the vehicle’s address. If you are fined, ${h.a('multa-zbe', 'the fine guide')} explains deadlines and early payment.</p>`,
  },
});
