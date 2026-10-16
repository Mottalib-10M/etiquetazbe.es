import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'etiqueta-eco', group: 'etiqueta', order: 3, tool: 'etiqueta', toolPreset: { energia: 'hev', anio: 2019, etiqueta: 'ECO' },
  related: ['etiqueta-0', 'etiqueta-c', 'bonificacion-ivtm-coche-electrico', 'madrid-central'], sources: ['dgt_eco', 'dgt_distintivo', 'dgt_c'],
  es: {
    slug: 'etiqueta-eco', nav: 'Etiqueta ECO', card: 'Híbridos, gas y enchufables de menos de 40 km',
    title: 'Etiqueta ECO 2026: híbridos, GLP y gas, requisitos de la DGT',
    description: 'Etiqueta ECO de la DGT en 2026: híbridos, enchufables de menos de 40 km, GLP y gas que cumplan la C. Dónde entra, Madrid Central y bonificación. Al día.',
    h1: 'Etiqueta ECO en 2026: qué coches la tienen de verdad',
    intro: 'La ECO no la da solo el motor híbrido o de gas: también hace falta cumplir los requisitos de la etiqueta C. Así se explican los coches de GLP que se quedan en B.',
    resume: (h) => `La etiqueta ECO de la DGT corresponde a los turismos y comerciales ligeros clasificados como híbridos enchufables con autonomía inferior a 40 km, híbridos no enchufables (HEV) y vehículos propulsados por gas natural comprimido o licuado (GNC, GNL) o por gas licuado del petróleo (GLP). En todos los casos deben cumplir además los criterios de la etiqueta C: nivel Euro 4, 5 o 6 si el motor es de gasolina y Euro 6 si es diésel. Para los vehículos de más de 8 plazas y de mercancías se exige Euro VI sea cual sea el combustible, y en las motos basta con ser híbrido. Con la ECO se entra en las 15 zonas de bajas emisiones de esta web sin restricción y se atraviesa el Distrito Centro de Madrid sin tener que aparcar. Varios ayuntamientos bonifican el impuesto de circulación: Madrid un 75 % durante seis años para los ECO matriculados desde 2026, Barcelona un 50 % durante cinco años para los de gasolina de hasta 120 g/km de CO2.`,
    faqs: (h) => [
      { q: 'Mi coche de 2004 está transformado a GLP: ¿tiene la ECO?', a: 'No por la transformación. La DGT exige que el vehículo de gas cumpla también los criterios de la etiqueta C, y un gasolina de 2004 suele ser Euro 3, que da la B. Por eso el simulador devuelve la B para un GLP antiguo. Un coche de GLP de fábrica o transformado con motor Euro 4 o posterior sí tiene la ECO.' },
      { q: '¿Los híbridos ligeros (mild hybrid) tienen etiqueta ECO?', a: 'Depende de cómo los clasifique la DGT en el registro como híbridos no enchufables. Muchos microhíbridos de 48 voltios figuran como HEV y tienen la ECO, pero no todos. La forma segura de saberlo es la consulta por matrícula en la sede de la DGT, que devuelve el distintivo que le corresponde al vehículo.' }, { q: `¿Un híbrido enchufable con 45 km de autonomía es ECO?`, a: `No: con 40 km o más de autonomía en modo exclusivamente eléctrico, la DGT le da la etiqueta 0 emisiones, no la ECO. La ECO es para los enchufables con menos de 40 km. La autonomía que cuenta es la homologada que figura en el Registro de Vehículos, no la que consigas en el uso diario.` }
    ],
    body: (h) => `
<h2>Dos condiciones, no una</h2>
<p>La confusión más común con la ECO es pensar que basta con el tipo de motor. La DGT lo escribe así: «Deben cumplir los criterios de la etiqueta C». Un híbrido no enchufable moderno los cumple siempre; un coche antiguo adaptado a gas, no. Por eso hay vehículos de GLP con etiqueta B circulando, y también por eso la transformación a gas no es una vía para ganar la ECO en un coche muy viejo.</p>
<h2>Dónde marca la diferencia</h2>
<p>En casi todas las zonas la C basta hoy para entrar. La ECO aporta dos cosas: el paso libre por el Distrito Centro de Madrid, donde una C de fuera solo puede ir a un aparcamiento, y seguridad a largo plazo, porque los calendarios de Palma, Valladolid y Vitoria-Gasteiz la mantienen como libre en 2030. En el impuesto, ${h.a('bonificacion-ivtm-coche-electrico', 'las bonificaciones')} varían mucho de una ciudad a otra.</p>`,
  },
  en: {
    slug: 'eco-label', nav: 'ECO label', card: 'Hybrids, gas and plug-ins under 40 km',
    title: 'ECO Label Spain 2026: Hybrids, LPG and Gas, DGT Rules',
    description: 'Spain’s DGT ECO label in 2026: hybrids, plug-ins under 40 km, LPG and natural gas meeting the C criteria. Where it enters, Madrid Central, road-tax relief.',
    h1: 'ECO label in 2026: which cars really get it',
    intro: 'The ECO label is not granted by the hybrid or gas engine alone: the car must also meet the C-label requirements. That is why some LPG cars stay on a B.',
    resume: (h) => `The DGT’s ECO label goes to cars and light commercial vehicles registered as plug-in hybrids with under 40 km of range, self-charging hybrids (HEV) and vehicles running on compressed or liquefied natural gas (CNG, LNG) or liquefied petroleum gas (LPG). In every case they must also meet the C-label criteria: Euro 4, 5 or 6 for a petrol engine and Euro 6 for a diesel. For vehicles with more than 8 seats and goods vehicles Euro VI is required whatever the fuel, and motorbikes only need to be hybrid. With the ECO label you can enter all 15 low-emission zones on this site without restriction and cross Madrid’s Centro district without having to park. Several councils give road-tax relief: Madrid 75% for six years for ECO cars registered from 2026, Barcelona 50% for five years for petrol ones emitting up to 120 g/km of CO2.`,
    faqs: (h) => [
      { q: 'My 2004 car was converted to LPG: does it get the ECO label?', a: 'Not because of the conversion. The DGT requires gas vehicles to also meet the C criteria, and a 2004 petrol car is usually Euro 3, which means a B. That is why the tool returns a B for an old LPG car. A factory LPG car, or one converted with a Euro 4 or later engine, does get the ECO.' },
      { q: 'Do mild hybrids get the ECO label?', a: 'It depends on how the DGT records them, as self-charging hybrids or not. Many 48-volt mild hybrids are listed as HEV and get the ECO, but not all. The safe way to know is the number-plate lookup on the DGT online office, which returns the label the vehicle is entitled to.' }, { q: `Is a plug-in hybrid with 45 km of range an ECO car?`, a: `No: with 40 km or more of pure-electric range, the DGT gives it the zero-emissions label, not ECO. ECO is for plug-ins with under 40 km. The range that counts is the approved figure on the vehicle register, not what you achieve in daily driving.` }
    ],
    body: (h) => `
<h2>Two conditions, not one</h2>
<p>The most common mistake with the ECO label is to think the engine type is enough. The DGT puts it plainly: they “must meet the criteria of the C label”. A modern self-charging hybrid always does; an old car adapted to gas does not. That is why some LPG cars carry a B, and why converting a very old car to gas is not a route to the ECO.</p>
<h2>Where it makes a difference</h2>
<p>In almost every zone a C is enough today. The ECO adds two things: free passage through Madrid’s Centro district, where an out-of-town C may only go to a car park, and long-term security, because the Palma, Valladolid and Vitoria-Gasteiz timetables keep it free in 2030. On tax, ${h.a('bonificacion-ivtm-coche-electrico', 'relief')} varies a lot from city to city.</p>`,
  },
});
