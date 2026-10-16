import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('palma');
export default definePage({
  id: 'zbe-palma', group: 'zbe', agrupadaEn: 'zonas-bajas-emisiones', order: 18, tool: 'zbe', ciudad: 'palma',
  related: ['coche-extranjero-zbe', 'etiqueta-b', 'etiqueta-c', 'zonas-bajas-emisiones'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-palma', nav: 'ZBE Palma', card: 'B prohibida desde 2027, C desde 2030',
    title: 'ZBE Palma 2026: etiqueta B en 2027 y coches extranjeros',
    description: 'ZBE del centro de Palma 2026: sin etiqueta prohibido desde julio de 2025, la B desde el 1/1/2027 y la C desde 2030. Registro de coches extranjeros. Al día.',
    h1: 'ZBE de Palma 2026: tres periodos hasta 2030',
    intro: 'Palma fija por normas Euro qué entra en el centro en cada periodo. En enero de 2027 sale la etiqueta B, también para los coches de alquiler.',
    resume: (h) => `La ordenanza de zonas de bajas emisiones de Palma se aprobó el 13 de noviembre de 2024, se publicó en el BOIB el 21 de diciembre y entró en vigor al día siguiente con la ZBE del Centre, fase I. Tras una moratoria de seis meses, las sanciones empezaron el 1 de julio de 2025. La norma define tres periodos por normas Euro: hasta el 31 de diciembre de 2026 entran los turismos de gasolina Euro 3 o superior y los diésel Euro 4 o superior, es decir, las etiquetas B, C, ECO y 0; del 1 de enero de 2027 al 31 de diciembre de 2029 solo la gasolina Euro 4 y el diésel Euro 6, lo que deja fuera a la B; desde el 1 de enero de 2030, solo los vehículos de energías alternativas (eléctricos, híbridos y gas), que corresponden a la 0 y la ECO. Las cámaras de los accesos funcionan sin barreras y la infracción se sanciona con ${h.eur(c.multa.importe)}. Desde marzo de 2026 los vehículos extranjeros que cumplan pueden inscribirse.`,
    faqs: (h) => [
      { q: 'Llego en ferry con mi coche alemán: ¿puedo entrar en el centro de Palma?', a: 'Sí, si cumple la norma Euro del periodo y lo inscribes en el registro de autorizaciones al menos 5 días naturales antes de entrar, con pasaporte o documento oficial, ficha técnica con la norma Euro, permiso de circulación, prueba de titularidad y el billete de llegada a la isla. El permiso dura 30 días naturales.' },
      { q: '¿Afecta la restricción de 2027 a las motos?', a: 'Para los vehículos de dos ruedas el corte es distinto: hasta 2026 entran los Euro 2 o superiores, de 2027 a 2029 los Euro 3 o superiores, y desde 2030 solo eléctricos, híbridos y de gas. Una moto Euro 2, con etiqueta B, deja de poder entrar el 1 de enero de 2027, igual que un turismo B.' },
      { q: '¿Puedo llevar a mi hijo al colegio dentro de la ZBE con un coche sin etiqueta?', a: 'Es uno de los supuestos de autorización registral: la recogida o acompañamiento de menores y personas dependientes a escuelas dentro de la ZBE. En marzo de 2026 el Ayuntamiento amplió la autorización de los menores de 12 años a todos los menores de edad. Hay que inscribir el vehículo en el registro municipal.' },
    ],
    body: (h) => `
<h2>Normas Euro en lugar de etiquetas</h2>
<p>Palma no escribe «etiqueta B» en su ordenanza: enumera normas Euro y tecnologías. Para un coche matriculado en España es lo mismo, porque la etiqueta de la DGT se deriva de esa norma, pero para un coche extranjero es una ventaja: basta con la ficha técnica para saber si cumple. La revisión del anexo 2 publicada en el BOIB del 24 de marzo de 2026 unificó estas reglas y abrió el acceso a las matrículas extranjeras que cumplen el periodo.</p>
<h2>Los alquileres y el 1 de enero de 2027</h2>
<p>Un coche de alquiler matriculado en España tiene su etiqueta en la DGT como cualquier otro: si es una C, sigue entrando hasta 2029; si es una B, desde enero de 2027 no podrá circular por el centro. Si alquilas para moverte por Palma, comprueba la etiqueta del coche que te asignan; para ir a la playa o a otros municipios, la ZBE no te afecta.</p>
<p>La ordenanza prevé que el ámbito se amplíe por fases mediante sus anexos. Para ver si tu coche cumple en cada periodo, usa el simulador cambiando la fecha o ${h.a('etiqueta-c', 'consulta la etiqueta C')}, la que marcará el límite entre 2027 y 2029.</p>`,
  },
  en: {
    slug: 'zbe-palma', nav: 'Palma ZBE', card: 'B banned from 2027, C from 2030',
    title: 'Palma ZBE 2026: B Label Out in 2027, Foreign Cars Rules',
    description: 'Palma low-emission zone 2026: no label banned since July 2025, B label from 1/1/2027 and C from 2030. Five-day registration for foreign plates. Dated.',
    h1: 'Palma low-emission zone 2026: three periods to 2030',
    intro: 'Palma sets by Euro standard what may enter the centre in each period. In January 2027 the B label goes, hire cars included.',
    resume: (h) => `Palma’s low-emission zone byelaw was approved on 13 November 2024, published in the Balearic gazette (BOIB) on 21 December and came into force the next day with phase I, the Centre zone. After a six-month grace period, fines began on 1 July 2025. The rules define three periods by Euro standard: until 31 December 2026 petrol cars of Euro 3 or above and diesels of Euro 4 or above may enter, which means B, C, ECO and zero labels; from 1 January 2027 to 31 December 2029 only petrol Euro 4 and diesel Euro 6, which shuts out the B; from 1 January 2030, only alternative-energy vehicles (electric, hybrid and gas), matching the zero and ECO labels. Cameras at the entries work without barriers and the offence carries a ${h.eur(c.multa.importe)} fine. Since March 2026 compliant foreign vehicles can register.`,
    faqs: (h) => [
      { q: 'I am arriving by ferry with my German car: can I drive into central Palma?', a: 'Yes, if it meets the Euro standard for the period and you enter it in the authorisation register at least 5 calendar days before driving in, with a passport or official ID, the technical document showing the Euro standard, the registration certificate, proof of ownership and your ticket to the island. The permit lasts 30 calendar days.' },
      { q: 'Does the 2027 restriction affect motorbikes?', a: 'Two-wheelers have different cut-offs: until 2026 Euro 2 or above may enter, from 2027 to 2029 Euro 3 or above, and from 2030 only electric, hybrid and gas models. A Euro 2 motorbike, which has a B label, can no longer enter from 1 January 2027, just like a B car.' },
      { q: 'Can I take my child to school inside the zone in an unlabelled car?', a: 'It is one of the registered-permit cases: dropping off or collecting minors and dependent people at schools inside the zone. In March 2026 the council widened the permit from children under 12 to all minors. The vehicle has to be entered in the council register.' },
    ],
    body: (h) => `
<h2>Euro standards rather than labels</h2>
<p>Palma’s byelaw never says “B label”: it lists Euro standards and technologies. For a Spanish-registered car it amounts to the same thing, because the DGT label is derived from that standard, but for a foreign car it helps: the technical document is enough to see whether it complies. The revised annex 2 published in the BOIB on 24 March 2026 brought these rules together and opened access to foreign plates that meet the period.</p>
<h2>Hire cars and 1 January 2027</h2>
<p>A hire car registered in Spain has a DGT label like any other: a C keeps entering until 2029; a B can no longer drive in the centre from January 2027. If you hire a car to get around Palma, check the label of the one you are given; for trips to beaches or other towns the zone does not affect you.</p>
<p>The byelaw allows the area to grow in phases through its annexes. To see whether your car complies in each period, use the tool and change the date, or ${h.a('etiqueta-c', 'read about the C label')}, which marks the limit between 2027 and 2029.</p>`,
  },
});
