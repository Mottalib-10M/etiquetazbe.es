import { definePage } from '../../lib/page-types';
export default definePage({
  id: 'etiqueta-dgt', group: 'etiqueta', order: 1, tool: 'etiqueta',
  related: ['etiqueta-c', 'etiqueta-b', 'etiqueta-c-diesel-2014-2015', 'pegatina-dgt'], sources: ['dgt_distintivo', 'dgt_consulta', 'dgt_c', 'dgt_b'],
  es: {
    slug: 'que-etiqueta-tiene-mi-coche', nav: '¿Qué etiqueta tiene mi coche?', card: 'Por motor, año y norma Euro',
    title: 'Etiqueta DGT 2026: qué etiqueta tiene mi coche, por año',
    description: 'Etiqueta DGT de tu coche en 2026 según motor, año y norma Euro: 0, ECO, C, B o sin etiqueta, con los criterios exactos y las ZBE donde entra hoy. Al día.',
    h1: '¿Qué etiqueta tiene mi coche? Criterios de la DGT en 2026',
    intro: 'Tres datos bastan: el motor, la fecha de primera matriculación y, si la tienes, la norma Euro de la ficha técnica. La respuesta incluye las ciudades donde entras.',
    resume: (h) => `La DGT clasifica los vehículos en cuatro distintivos y deja sin etiqueta a la mitad más contaminante del parque. Etiqueta 0 emisiones: eléctricos de batería, de autonomía extendida, de pila de combustible e híbridos enchufables con al menos 40 km de autonomía. ECO: híbridos enchufables con menos autonomía, híbridos no enchufables y vehículos de gas natural o GLP, siempre que cumplan los criterios de la C. C: turismos y furgonetas ligeras de gasolina matriculados desde enero de 2006 (Euro 4, 5 o 6) y diésel desde septiembre de 2015 (Euro 6). B: gasolina desde el 1 de enero de 2001 (Euro 3) y diésel desde 2006 (Euro 4 o 5). Para los vehículos de más de 8 plazas y los de mercancías, la C llega con la Euro VI, desde 2014, y la B con la Euro IV o V, desde 2006. La consulta por matrícula en la sede de la DGT es gratuita, y la pegatina cuesta ${h.eur(h.P.distintivos.precio_pegatina)}.`,
    faqs: (h) => [
      { q: '¿Dónde miro la norma Euro de mi coche?', a: 'En la casilla V.9 de la ficha técnica (tarjeta ITV), que indica la directiva de emisiones con la que se homologó el vehículo; a veces aparece como el número de la directiva europea en lugar de «Euro 4» o «Euro 6». Si esa casilla está vacía, la DGT clasifica por la fecha de matriculación y por los datos del fabricante.' },
      { q: '¿Es obligatorio llevar la pegatina de la DGT?', a: 'La DGT dice que obtenerla y colocarla es voluntario y que, si se pone, va en el ángulo inferior derecho del parabrisas delantero. Algunas ordenanzas, como las de Zaragoza o Pamplona, obligan a llevarla visible para circular por su ZBE; en otras, como Málaga o Bilbao, las cámaras leen la matrícula y la pegatina no es necesaria.' },
      { q: '¿Puede cambiar la etiqueta de mi coche?', a: 'La etiqueta depende de cómo está clasificado el vehículo en el Registro de Vehículos. Si crees que hay un error, por ejemplo un diésel Euro 6 de 2015 clasificado como B, la ficha técnica es la prueba para pedir la corrección a la DGT. Una reforma como la instalación de GLP no convierte un coche antiguo en ECO si su motor no cumplía los requisitos de la C.' },
    ],
    body: (h) => `
<h2>Fecha o norma Euro: cuál manda</h2>
<p>Las fechas que publica la DGT son una regla práctica: indican desde cuándo todos los coches nuevos tenían que cumplir cada norma. Pero un modelo podía estar homologado antes, y entonces su etiqueta es la de su norma, no la de su año. El simulador marca como «fecha de transición» los meses en que eso pasa con frecuencia, por ejemplo los diésel de septiembre de 2014 a agosto de 2015, y te pide la norma Euro para salir de dudas.</p>
<h2>Turismos, motos y pesados</h2>
<p>Para las motos y ciclomotores la DGT da la B a la Euro 2 y la C a la Euro 3 o 4, sin fechas oficiales; los híbridos, enchufables o no, llevan la ECO. Para autobuses, camiones y furgonetas pesadas la clasificación no depende del combustible: cuenta la norma Euro VI, IV o V. Cambia el tipo de vehículo en el simulador para ver la diferencia.</p>
<p>Después, la etiqueta se cruza con las ordenanzas: una B entra hoy libremente en Barcelona y en Zaragoza, pero no en Bilbao ni en el Distrito Centro de Madrid si viene de fuera. Si tu duda es la de los diésel de 2014 y 2015, ${h.a('etiqueta-c-diesel-2014-2015', 'esta guía la explica a fondo')}.</p>`,
  },
  en: {
    slug: 'which-dgt-label-does-my-car-have', nav: 'Which label does my car have?', card: 'By engine, year and Euro standard',
    title: 'DGT Label 2026: Which Label Does My Car Get, by Year',
    description: 'Your car’s Spanish DGT label in 2026 from engine, registration year and Euro standard: zero, ECO, C, B or none, with the exact rules and zones it enters.',
    h1: 'Which DGT label does my car have? The 2026 criteria',
    intro: 'Three facts are enough: the engine, the date of first registration and, if you have it, the Euro standard on the technical card. The answer includes the cities you can enter.',
    resume: (h) => `The DGT, Spain’s traffic authority, sorts vehicles into four labels and leaves the most polluting half of the fleet with none. Zero-emission label: battery, range-extender and fuel-cell cars and plug-in hybrids with at least 40 km of electric range. ECO: plug-ins with less range, self-charging hybrids and natural-gas or LPG vehicles, as long as they meet the C criteria. C: petrol cars and light vans first registered from January 2006 (Euro 4, 5 or 6) and diesels from September 2015 (Euro 6). B: petrol from 1 January 2001 (Euro 3) and diesel from 2006 (Euro 4 or 5). For vehicles with more than 8 seats and goods vehicles, the C comes with Euro VI, from 2014, and the B with Euro IV or V, from 2006. The DGT’s number-plate lookup is free, and the sticker costs ${h.eur(h.P.distintivos.precio_pegatina)}.`,
    faqs: (h) => [
      { q: 'Where do I find my car’s Euro standard?', a: 'In box V.9 of the technical card (ficha técnica), which states the emissions directive the car was approved under; it sometimes shows the EU directive number rather than “Euro 4” or “Euro 6”. If the box is empty, the DGT classifies the car by its registration date and the manufacturer’s data.' },
      { q: 'Do I have to display the DGT sticker?', a: 'The DGT says getting and fitting it is voluntary and that, if fitted, it goes in the lower right corner of the windscreen. Some byelaws, such as Zaragoza’s and Pamplona’s, require it on show to drive in their zone; in others, such as Málaga or Bilbao, cameras read the plate and the sticker is not needed.' },
      { q: 'Can my car’s label change?', a: 'The label depends on how the vehicle is classified on the vehicle register. If you think there is a mistake, say a Euro 6 diesel from 2015 rated B, the technical card is your evidence to ask the DGT to correct it. A conversion such as fitting LPG does not turn an old car into an ECO if its engine did not meet the C requirements.' },
    ],
    body: (h) => `
<h2>Date or Euro standard: which decides</h2>
<p>The dates published by the DGT are a rule of thumb: they show from when every new car had to meet each standard. A model could be approved earlier, though, and then its label follows the standard, not the year. The tool flags as “changeover dates” the months when that was common, such as diesels from September 2014 to August 2015, and asks for the Euro standard to settle it.</p>
<h2>Cars, motorbikes and heavy vehicles</h2>
<p>For motorbikes and mopeds the DGT gives the B to Euro 2 and the C to Euro 3 or 4, with no official dates; hybrids, plug-in or not, get the ECO. For buses, lorries and heavy vans the fuel does not matter: Euro VI, IV or V decides. Change the vehicle type in the tool to see the difference.</p>
<p>The label is then matched against the byelaws: a B drives freely into Barcelona and Zaragoza today, but not into Bilbao or Madrid’s Centro district if it comes from elsewhere. If your question is about 2014 and 2015 diesels, ${h.a('etiqueta-c-diesel-2014-2015', 'this guide covers it in depth')}.</p>`,
  },
});
