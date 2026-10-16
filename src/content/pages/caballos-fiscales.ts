import { definePage } from '../../lib/page-types';
import { cvfCombustion, cvfElectrico } from '../../lib/engine/ivtm';
const ej: Array<[number, number]> = [[999, 3], [1197, 3], [1499, 4], [1598, 4], [1968, 4], [2993, 6]];
export default definePage({
  id: 'caballos-fiscales', group: 'ivtm', order: 2, tool: 'cvf',
  related: ['impuesto-circulacion', 'impuesto-circulacion-madrid', 'etiqueta-0', 'prorrateo-impuesto-circulacion'], sources: ['rgv_anexo5', 'trlhl'],
  es: {
    slug: 'caballos-fiscales', nav: 'Calcular caballos fiscales', card: 'Por cilindrada o por kW',
    title: 'Caballos fiscales 2026: fórmula, calculadora y tramo IVTM',
    description: 'Calcula los caballos fiscales de tu coche con la fórmula del anexo V del Reglamento General de Vehículos, por cilindrada o por kW, y su IVTM 2026. Al día.',
    h1: 'Caballos fiscales: cómo se calculan y qué impuesto pagas',
    intro: 'Introduce la cilindrada y el número de cilindros, o la potencia de un eléctrico: verás los caballos fiscales con dos decimales y el impuesto de circulación del tramo.',
    resume: (h) => `Los caballos de vapor fiscales (CVF) se calculan con el anexo V del Reglamento General de Vehículos, aprobado por el Real Decreto 2822/1998. Para un motor de explosión o combustión de cuatro tiempos, CVF = ${h.num(h.P.cvf.t_cuatro_tiempos, 2)} × (0,785 × D² × R)^0,6 × N, donde D es el diámetro del cilindro en centímetros, R el recorrido del pistón y N el número de cilindros; como 0,785 × D² × R es el volumen de un cilindro, la fórmula equivale a ${h.num(h.P.cvf.t_cuatro_tiempos, 2)} × (cilindrada ÷ cilindros)^0,6 × cilindros. En un motor de dos tiempos el factor es ${h.num(h.P.cvf.t_dos_tiempos, 2)}. Para los motores eléctricos y los rotativos, la potencia efectiva en kilovatios se divide entre ${h.num(h.P.cvf.divisor_electrico_kw, 3)}. El resultado se expresa con dos decimales aproximado por defecto y es el que figura en la casilla P.2.1 de la ficha técnica y el que usa el impuesto de circulación para elegir el tramo.`,
    faqs: (h) => [
      { q: '¿Por qué mi coche de 150 CV tiene solo 12 caballos fiscales?', a: 'Porque los caballos fiscales no miden la potencia sino el tamaño de los cilindros: dependen de la cilindrada y del número de cilindros, no del turbo, la inyección ni la electrónica. Un motor moderno de 1.5 litros y cuatro cilindros saca mucha más potencia que uno de los años noventa con la misma cilindrada, pero paga el mismo tramo.' },
      { q: '¿Cuántos caballos fiscales tiene un coche eléctrico de 150 kW?', a: `${h.num(cvfElectrico(150), 2)}, según la fórmula del anexo V: potencia efectiva en kW entre 5,152. Esa potencia efectiva la fija el laboratorio oficial y suele ser menor que la potencia máxima anunciada, así que la cifra de la ficha técnica puede ser inferior. Con más de 20 caballos estaría en el tramo más alto del impuesto.` }, { q: `¿Los caballos fiscales influyen en la etiqueta de la DGT?`, a: `No. La etiqueta depende de la tecnología del motor y de su norma Euro, no de su potencia fiscal: un gasolina Euro 6 de 20 caballos fiscales tiene la C igual que uno de 8. Los caballos fiscales solo deciden el tramo del impuesto de circulación, y en algunos casos el de otros tributos o tasas que los usan como referencia.` }
    ],
    body: (h) => `
<h2>Ejemplos con la fórmula oficial</h2>
${h.table(['Motor', 'Caballos fiscales', 'Tramo del IVTM'], ej.map(([cc, n]) => { const c = cvfCombustion(cc, n); return [`${h.num(cc)} cc, ${n} cilindros`, h.num(c, 2), c < 8 ? 'menos de 8' : c < 12 ? '8 a 11,99' : c < 16 ? '12 a 15,99' : c < 20 ? '16 a 19,99' : '20 o más']; }))}
<p>Fíjate en el salto entre los tres cilindros de 999 cc, por debajo de 8 caballos, y los de 1.197 cc, ya en el tramo de 8 a 11,99. Un motor pequeño de tres cilindros es el que más ahorra en el impuesto, y el cambio de tramo puede doblar la cuota.</p>`,
  },
  en: {
    slug: 'fiscal-horsepower', nav: 'Fiscal horsepower calculator', card: 'From engine size or kW',
    title: 'Fiscal Horsepower Spain 2026: Formula, Calculator, IVTM Band',
    description: 'Work out Spanish fiscal horsepower (CVF) with the official annex V formula, from engine size and cylinders or from kW for electric cars, plus the 2026 IVTM.',
    h1: 'Fiscal horsepower: how it is worked out and the tax you pay',
    intro: 'Enter the engine size and number of cylinders, or an electric car’s power: you get the fiscal horsepower to two decimals and the road-tax band.',
    resume: (h) => `Fiscal horsepower (caballos fiscales, CVF) is calculated under annex V of the General Vehicle Regulation, Royal Decree 2822/1998. For a four-stroke combustion engine, CVF = ${h.num(h.P.cvf.t_cuatro_tiempos, 2)} × (0.785 × D² × R)^0.6 × N, where D is the cylinder bore in centimetres, R the piston stroke and N the number of cylinders; since 0.785 × D² × R is the volume of one cylinder, the formula equals ${h.num(h.P.cvf.t_cuatro_tiempos, 2)} × (engine size ÷ cylinders)^0.6 × cylinders. For a two-stroke engine the factor is ${h.num(h.P.cvf.t_dos_tiempos, 2)}. For electric and rotary engines, the effective power in kilowatts is divided by ${h.num(h.P.cvf.divisor_electrico_kw, 3)}. The result is given to two decimals rounded down; it is the figure in box P.2.1 of the technical card and the one road tax uses to set the band.`,
    faqs: (h) => [
      { q: 'Why does my 150 hp car have only 12 fiscal hp?', a: 'Because fiscal horsepower measures cylinder size, not power: it depends on engine size and number of cylinders, not on turbocharging, injection or electronics. A modern 1.5-litre four-cylinder engine produces far more power than a 1990s one of the same size, but it falls in the same tax band.' },
      { q: 'How many fiscal hp does a 150 kW electric car have?', a: `${h.num(cvfElectrico(150), 2)}, under the annex V formula: effective power in kW divided by 5.152. That effective power is set by the official laboratory and is usually lower than the advertised peak power, so the figure on the technical card may be lower. Above 20 hp it would be in the top road-tax band.` }, { q: `Do fiscal horsepower figures affect the DGT label?`, a: `No. The label depends on the engine technology and its Euro standard, not on fiscal power: a 20 fiscal hp Euro 6 petrol car gets the C just like an 8 hp one. Fiscal horsepower only decides the road-tax band, and in some cases the band of other charges that use it as a reference.` }
    ],
    body: (h) => `
<h2>Examples with the official formula</h2>
${h.table(['Engine', 'Fiscal hp', 'Road-tax band'], ej.map(([cc, n]) => { const c = cvfCombustion(cc, n); return [`${h.num(cc)} cc, ${n} cylinders`, h.num(c, 2), c < 8 ? 'under 8' : c < 12 ? '8 to 11.99' : c < 16 ? '12 to 15.99' : c < 20 ? '16 to 19.99' : '20 or more']; }))}
<p>Note the jump between the 999 cc three-cylinder, under 8 hp, and the 1,197 cc one, already in the 8 to 11.99 band. A small three-cylinder engine saves the most tax, and moving up a band can double the bill.</p>`,
  },
});
