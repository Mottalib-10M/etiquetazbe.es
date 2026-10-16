import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('malaga');
export default definePage({
  id: 'zbe-malaga', group: 'zbe', order: 15, tool: 'zbe', ciudad: 'malaga',
  related: ['impuesto-circulacion-malaga', 'etiqueta-b', 'coche-extranjero-zbe', 'zbe-granada'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-malaga', nav: 'ZBE Málaga', card: 'Etiqueta B de fuera prohibida desde el 30/11/2026',
    title: 'ZBE Málaga 2026: etiqueta B desde el 30 de noviembre',
    description: 'ZBE Málaga 2026: sin etiqueta no domiciliado prohibido desde el 30/11/2025 y la B de fuera desde el 30/11/2026. 404 hectáreas y multa de 200 €. Al día.',
    h1: 'ZBE de Málaga 2026: lo que cambia el 30 de noviembre',
    intro: 'Málaga endurece su zona cada 30 de noviembre. Este año le toca a la etiqueta B de los coches que no pagan el impuesto en la ciudad.',
    resume: (h) => `La Zona de Bajas Emisiones de Málaga ocupa 404 hectáreas del centro, dentro de un perímetro que va del Paseo Marítimo Antonio Machado a la avenida de Andalucía, la Alameda de Capuchinos y el Paseo Marítimo Pablo Ruiz Picasso. La regula la Ordenanza de Movilidad publicada en el Boletín Oficial de la Provincia el 29 de noviembre de 2024 y avanza por años: desde el 30 de noviembre de 2025 los coches y motos sin etiqueta que no estaban domiciliados en el impuesto de vehículos de Málaga antes del 30 de noviembre de 2024 no pueden entrar; desde el 30 de noviembre de 2026 la restricción alcanza a la etiqueta B de los no domiciliados antes de esa fecha. Las etiquetas C, ECO y 0, y los vehículos domiciliados, siguen entrando. El control lo hacen 34 puertas de entrada y 33 de salida que leen la matrícula, por lo que no hace falta llevar la pegatina. Circular sin cumplir es una infracción grave de ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'Me mudo a Málaga en diciembre de 2026 con un coche B: ¿podré entrar en el centro?', a: 'Con la redacción de la ordenanza, la B solo se admite si el vehículo estaba domiciliado en el impuesto de Málaga antes del 30 de noviembre de 2026. Un traslado posterior no da derecho, aunque pagues allí el IVTM. Si el plazo te pilla de lleno, consulta en el Área de Movilidad si existe una vía de autorización para tu caso.' },
      { q: '¿Las furgonetas de reparto tienen restricción en Málaga?', a: 'No durante los cuatro primeros años de la ordenanza: las furgonetas de cualquier etiqueta, incluso sin ella, circulan libremente hasta diciembre de 2028. A partir del quinto año solo podrán hacerlo las domiciliadas en Málaga o con etiqueta. Los camiones, el transporte colectivo, el taxi, los VTC y los históricos tienen acceso libre.' },
      { q: '¿Cuántos coches entran cada día en la ZBE de Málaga?', a: 'Según el informe municipal del primer trimestre de 2026, en un día laborable medio de marzo de 2026 entraron unos 179.700 vehículos, de los que algo más de 113.800 eran de Málaga y unos 63.000 de fuera. En 2023, antes de la ZBE, la media laborable era de 206.500 accesos.' },
    ],
    body: (h) => `
<h2>El domicilio fiscal decide</h2>
<p>Málaga no pregunta dónde vive el conductor sino si el vehículo está dado de alta en su impuesto de circulación, gestionado por GESTRISAM. El sistema de cámaras cruza la matrícula con ese padrón y con los datos de la DGT, de modo que un coche B de un vecino de Torremolinos o Rincón de la Victoria que entra a diario en el centro dejará de poder hacerlo desde el 30 de noviembre de 2026, aunque su conductor trabaje en Málaga. Para los vecinos con coche domiciliado no cambia nada.</p>
<h2>Fechas que corren solas</h2>
<p>La ordenanza fija sus plazos por años de vigencia, sin necesidad de un nuevo acuerdo municipal: el tercer año empieza el 30 de noviembre de 2026 y el quinto, para las furgonetas, en diciembre de 2028. El simulador aplica ese calendario tal como se publicó; si una resolución judicial o una modificación lo cambia, lo actualizaremos con su fecha y su fuente.</p>
<h2>Turistas y coches de alquiler</h2>
<p>Un coche de alquiler matriculado en España tiene su etiqueta en la DGT; si es una B y no está domiciliado en Málaga, desde el 30 de noviembre no podrá entrar en la ZBE. Pide a la empresa una C, ECO o 0 si vas a moverte por el centro, o deja el coche en un aparcamiento exterior. Para vehículos con matrícula extranjera, ${h.a('coche-extranjero-zbe', 'la guía de coches extranjeros')} explica cómo se calcula la equivalencia.</p>`,
  },
  en: {
    slug: 'zbe-malaga', nav: 'Málaga ZBE', card: 'Out-of-town B label banned from 30/11/2026',
    title: 'Málaga ZBE 2026: B Label Banned From 30 November, Cameras',
    description: 'Málaga low-emission zone 2026: unlabelled outside cars banned since 30/11/2025, out-of-town B label from 30/11/2026. 404 hectares, cameras, €200 fine.',
    h1: 'Málaga low-emission zone 2026: what changes on 30 November',
    intro: 'Málaga tightens its zone every 30 November. This year it is the turn of B-label cars that do not pay road tax in the city.',
    resume: (h) => `Málaga’s low-emission zone covers 404 hectares of the centre, inside a boundary running from Paseo Marítimo Antonio Machado to Avenida de Andalucía, Alameda de Capuchinos and Paseo Marítimo Pablo Ruiz Picasso. It is governed by the Mobility Byelaw published in the provincial gazette on 29 November 2024 and tightens year by year: since 30 November 2025 unlabelled cars and motorbikes that were not on Málaga’s vehicle-tax roll before 30 November 2024 may not enter; from 30 November 2026 the ban extends to B-label vehicles not registered there before that date. C, ECO and zero labels, and locally registered vehicles, still get in. Enforcement is by 34 entry and 33 exit gates that read number plates, so no sticker is needed. Driving in without complying is a serious offence costing ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'I am moving to Málaga in December 2026 with a B-label car: can I drive into the centre?', a: 'Under the byelaw wording, a B car is only admitted if it was on Málaga’s vehicle-tax roll before 30 November 2026. A later move does not qualify, even if you pay the road tax there. If the deadline catches you, ask the council’s mobility department whether a permit route exists for your case.' },
      { q: 'Are delivery vans restricted in Málaga?', a: 'Not during the first four years of the byelaw: vans of any label, even none, drive freely until December 2028. From the fifth year only locally registered or labelled vans may do so. Lorries, public transport, taxis, ride-hailing cars and historic vehicles have free access.' },
      { q: 'How many vehicles enter the Málaga zone each day?', a: 'According to the council’s first-quarter 2026 report, about 179,700 vehicles entered on an average weekday in March 2026, just over 113,800 from Málaga and some 63,000 from elsewhere. In 2023, before the zone, the weekday average was 206,500 entries. The council publishes these figures in quarterly reports.' },
    ],
    body: (h) => `
<h2>The tax address decides</h2>
<p>Málaga does not ask where the driver lives but whether the vehicle is on its road-tax roll, run by GESTRISAM. The camera system matches the plate against that roll and DGT data, so a B-label car from Torremolinos or Rincón de la Victoria that drives into the centre every day will no longer be allowed from 30 November 2026, even if its driver works in Málaga. Nothing changes for residents whose car is registered locally.</p>
<h2>Dates that run by themselves</h2>
<p>The byelaw sets its deadlines by years in force, with no further council decision needed: the third year starts on 30 November 2026 and the fifth, for vans, in December 2028. The tool applies that timetable as published; if a court ruling or an amendment changes it, we will update it with its date and source.</p>
<h2>Tourists and hire cars</h2>
<p>A hire car registered in Spain has its label on the DGT system; if it is a B and not registered in Málaga, from 30 November it cannot enter the zone. Ask the company for a C, ECO or zero car if you plan to drive around the centre, or leave it in a car park outside. For foreign-plated vehicles, ${h.a('coche-extranjero-zbe', 'the foreign cars guide')} explains how the equivalent label is worked out.</p>`,
  },
});
