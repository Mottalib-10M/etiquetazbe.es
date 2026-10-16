import { definePage } from '../../lib/page-types';
import { MUNICIPIOS, cuotaTurismo } from '../../lib/engine/ivtm';
const tabla = (l: 'es' | 'en', h: { eur: (n: number) => string; a: (id: string, t: string) => string }) => MUNICIPIOS.map((m) => [h.a(`impuesto-circulacion-${m.slug}`, m.nombre), h.eur(cuotaTurismo({ municipio: m.slug, cvf: 7 }).cuota), h.eur(cuotaTurismo({ municipio: m.slug, cvf: 11.5 }).cuota), h.eur(cuotaTurismo({ municipio: m.slug, cvf: 14 }).cuota), h.eur(cuotaTurismo({ municipio: m.slug, cvf: 21 }).cuota), m.regimen === 'foral' ? (l === 'es' ? 'foral' : 'foral') : (l === 'es' ? 'común' : 'standard')]);
export default definePage({
  id: 'impuesto-circulacion', group: 'ivtm', order: 1, tool: 'ivtm',
  related: ['caballos-fiscales', 'bonificacion-ivtm-coche-electrico', 'prorrateo-impuesto-circulacion', 'impuesto-circulacion-madrid'], sources: ['trlhl', 'rgv_anexo5', 'dgt_consulta'],
  es: {
    slug: 'impuesto-de-circulacion', nav: 'Calcular el impuesto de circulación', card: 'IVTM 2026 de tu municipio',
    title: 'Impuesto de circulación 2026: calcular el IVTM de tu coche',
    description: 'Calcula el impuesto de circulación 2026 de tu coche: cuota de 13 ordenanzas fiscales o mínimo estatal, caballos fiscales por cilindrada, bonificación.',
    h1: 'Impuesto de circulación 2026: calcula el IVTM de tu coche',
    intro: 'Elige el municipio del permiso de circulación y los caballos fiscales; si no los sabes, calcúlalos desde la cilindrada o la potencia eléctrica.',
    resume: (h) => `El impuesto sobre vehículos de tracción mecánica, el IVTM o impuesto de circulación, lo cobra cada año el ayuntamiento del domicilio que figura en el permiso de circulación a quien sea titular del vehículo el 1 de enero. El artículo 95 del texto refundido de la Ley Reguladora de las Haciendas Locales fija para los turismos una cuota mínima por caballos fiscales: ${h.P.ivtm_art95.turismos.map((t) => h.eur(t.cuota)).join(', ')} euros en los cinco tramos, desde menos de 8 hasta 20 o más. Cada ayuntamiento puede multiplicarla por un coeficiente de hasta ${h.P.ivtm_art95.coeficiente_maximo} y bonificar hasta el ${h.pct(h.P.ivtm_art95.bonificacion_max_carburante)} a los vehículos por su carburante o su motor, y hasta el 100 % a los históricos o de más de 25 años. Están exentos, entre otros, los vehículos de personas con discapacidad igual o superior al 33 % para su uso exclusivo. En la primera matriculación y en la baja definitiva la cuota se prorratea por trimestres. País Vasco y Navarra tienen sus propias normas forales.`,
    faqs: (h) => [
      { q: '¿Quién paga el impuesto de circulación si vendo el coche en marzo?', a: 'Quien era titular el 1 de enero, porque el impuesto se devenga ese día y la venta entre particulares no se prorratea. Comprador y vendedor pueden pactar repartirse el importe, pero el ayuntamiento cobra al titular a 1 de enero. Además, la DGT no tramita el cambio de titularidad si no está pagado el impuesto del año anterior.' },
      { q: '¿Dónde pago el IVTM si me mudo de ciudad?', a: 'En el municipio del domicilio que conste en el permiso de circulación. Para pagarlo en el nuevo ayuntamiento hay que comunicar el cambio de domicilio a la DGT, que lo traslada al Registro de Vehículos; el cambio cuenta a partir del año siguiente. En muchas ZBE, ese domicilio también decide si tu coche se considera de la ciudad.' },
      { q: '¿Qué vehículos están exentos del impuesto de circulación?', a: 'El artículo 93 del texto refundido exime, entre otros, a los vehículos para personas con movilidad reducida, a los matriculados a nombre de personas con discapacidad de al menos el 33 % para su uso exclusivo, a las ambulancias, a los autobuses de transporte público urbano y a la maquinaria agrícola con cartilla. La exención de discapacidad se pide al ayuntamiento y vale para un solo vehículo.' },
    ],
    body: (h) => `
<h2>Lo mismo, en 13 ciudades</h2>
<p>La tabla compara la cuota anual de 2026 para cuatro coches tipo, de 7, 11,5, 14 y 21 caballos fiscales, en las ordenanzas que hemos leído. Las diferencias llegan a ser de más del doble para un mismo coche, y en los territorios forales la escala es otra.</p>
${h.table(['Municipio', '7 CVF', '11,5 CVF', '14 CVF', '21 CVF', 'Régimen'], tabla('es', h))}
<h2>Los caballos fiscales no son los CV del motor</h2>
<p>El impuesto no usa la potencia en caballos de vapor que anuncia el fabricante, sino la potencia fiscal del anexo V del Reglamento General de Vehículos, que en los motores de combustión depende de la cilindrada y del número de cilindros. Un motor de 1.598 cc y cuatro cilindros tiene 11,64 caballos fiscales, aunque rinda 120 CV. El dato está en la casilla P.2.1 de la ficha técnica. ${h.a('caballos-fiscales', 'La página de caballos fiscales')} explica la fórmula y la aplica.</p>`,
  },
  en: {
    slug: 'spanish-road-tax-calculator', nav: 'Road tax calculator', card: 'Your town’s 2026 IVTM',
    title: 'Road Tax Spain 2026: IVTM Calculator for Your Car by Town',
    description: 'Work out your 2026 Spanish road tax (IVTM): rates from 13 town byelaws or the national minimum, fiscal hp from engine size or kW, relief, pro-rating. Dated.',
    h1: 'Spanish road tax 2026: work out your car’s IVTM',
    intro: 'Choose the town on the registration document and the fiscal horsepower; if you do not know it, work it out from the engine size or electric power.',
    resume: (h) => `The vehicle tax known as IVTM, or impuesto de circulación, is charged every year by the council of the address on the registration document to whoever owns the vehicle on 1 January. Section 95 of the Local Finance Act sets a minimum for cars by fiscal horsepower: ${h.P.ivtm_art95.turismos.map((t) => h.eur(t.cuota)).join(', ')} across the five bands, from under 8 to 20 or more. Each council may multiply it by up to ${h.P.ivtm_art95.coeficiente_maximo} and grant up to ${h.pct(h.P.ivtm_art95.bonificacion_max_carburante)} relief by fuel or engine, and up to 100% for historic vehicles or those over 25 years old. Exempt vehicles include those registered to people with a disability of 33% or more for their sole use. On first registration and permanent deregistration the amount is pro-rated by quarter. The Basque Country and Navarre have their own foral rules.`,
    faqs: (h) => [
      { q: 'Who pays the road tax if I sell the car in March?', a: 'Whoever owned it on 1 January, because the tax falls due that day and private sales are not pro-rated. Buyer and seller can agree to split it, but the council charges the owner on 1 January. The DGT also refuses to transfer ownership if the previous year’s tax is unpaid.' },
      { q: 'Where do I pay the IVTM if I move to another town?', a: 'To the town on the registration document. To pay in your new town you must report the change of address to the DGT, which updates the vehicle register; it counts from the following year. In many low-emission zones, that address also decides whether your car counts as local.' },
      { q: 'Which vehicles are exempt from Spanish road tax?', a: 'Section 93 of the Act exempts, among others, vehicles for people with reduced mobility, those registered to people with a disability of at least 33% for their sole use, ambulances, urban public buses and farm machinery with an agricultural log. The disability exemption is requested from the council and covers one vehicle.' },
    ],
    body: (h) => `
<h2>The same car in 13 towns</h2>
<p>The table compares the 2026 annual amount for four typical cars, at 7, 11.5, 14 and 21 fiscal hp, under the byelaws we have read. The same car can pay more than twice as much from one town to another, and the foral territories use a different scale.</p>
${h.table(['Town', '7 hp', '11.5 hp', '14 hp', '21 hp', 'Regime'], tabla('en', h))}
<h2>Fiscal horsepower is not engine horsepower</h2>
<p>The tax does not use the horsepower the manufacturer advertises but the fiscal power in annex V of the General Vehicle Regulation, which for combustion engines depends on engine size and number of cylinders. A 1,598 cc four-cylinder engine has 11.64 fiscal hp, even if it produces 120 hp. The figure is in box P.2.1 of the technical card. ${h.a('caballos-fiscales', 'The fiscal horsepower page')} explains and applies the formula.</p>`,
  },
});
