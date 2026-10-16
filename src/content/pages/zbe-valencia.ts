import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('valencia');
export default definePage({
  id: 'zbe-valencia', group: 'zbe', order: 12, tool: 'zbe', ciudad: 'valencia',
  related: ['impuesto-circulacion-valencia', 'sin-etiqueta', 'multa-zbe', 'zonas-bajas-emisiones'], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: 'zbe-valencia', nav: 'ZBE València', card: 'Por fases según dónde está registrado el coche',
    title: 'ZBE València 2026: fases por provincia, fechas y multas',
    description: 'ZBE València 2026: sin etiqueta de fuera de la provincia ya pagan 200 €; los de la provincia desde el 1/1/2027 y los de la ciudad desde 2028. Con fuentes.',
    h1: 'ZBE de València 2026: qué coches sin etiqueta ya pagan multa',
    intro: 'València restringe solo a los turismos y motos sin etiqueta, pero por fases según el municipio donde está registrado el vehículo. Comprueba la tuya.',
    resume: (h) => `La zona de bajas emisiones de València, regulada por una ordenanza propia, multa desde el 1 de diciembre de 2025 tras una fase informativa. Afecta solo a los «vehículos más contaminantes»: turismos, ciclomotores y motocicletas con clasificación A en el Registro de Vehículos de la DGT, es decir, sin etiqueta. El calendario depende del municipio de registro del vehículo, no del empadronamiento de quien conduce: los registrados fuera de la provincia de Valencia ya no pueden acceder; los de otros municipios de la provincia pueden circular sin restricción hasta el 31 de diciembre de 2026; los registrados en la propia ciudad, hasta el 31 de diciembre de 2027. Una moratoria alarga los plazos hasta finales de 2027 para los municipios afectados por la DANA de 2024 y hasta 2028 para las pedanías dañadas. Las etiquetas B, C, ECO y 0 no tienen restricción. La multa es la de una infracción grave, ${h.eur(c.multa.importe)}, y la controlan 278 cámaras.`,
    faqs: (h) => [
      { q: 'Vivo en Torrent y mi coche no tiene etiqueta: ¿cuándo me multarán en València?', a: 'Si el coche está registrado en Torrent, desde el 1 de enero de 2027: hasta el 31 de diciembre de 2026 los vehículos de otros municipios de la provincia pueden acceder, circular y estacionar sin restricciones. Comprueba además si Torrent figura en el anexo del Decreto 164/2024 de municipios afectados por la DANA: en ese caso la moratoria llega hasta finales de 2027.' },
      { q: '¿Cuántas veces puede entrar al año un coche sin etiqueta con permiso?', a: 'La ordenanza da 48 accesos puntuales al año a los vehículos más contaminantes que no pueden circular según el calendario, previa comunicación y, en su caso, pago de la tasa del trámite. No se acumulan: los que no uses en un año se pierden. El procedimiento está en el anexo III de la ordenanza.' },
      { q: '¿Afecta la ZBE de València a las furgonetas?', a: 'No en la definición actual: la ordenanza considera «más contaminantes» a los turismos, ciclomotores y motocicletas sin etiqueta, con clasificación por uso familiar, sin especificar o todoterreno. Las furgonetas y camiones sin etiqueta no entran en esa definición, aunque sí los vehículos extranjeros con características equivalentes a un turismo sin etiqueta.' },
    ],
    body: (h) => `
<h2>La matrícula importa más que el padrón</h2>
<p>València es la ciudad donde más se equivocan los resúmenes. El criterio no es dónde vives sino el «municipio de registro», el que consta en el Registro de Vehículos de la DGT. Un vecino que se ha mudado a la ciudad pero no ha cambiado el domicilio del coche sigue en la fase de su municipio anterior; a la inversa, cambiar el domicilio del vehículo a València retrasa su restricción hasta 2028. El trámite de cambio de domicilio en la DGT también traslada el impuesto de circulación al nuevo ayuntamiento.</p>
<h2>Un perímetro de calles, no de barrios</h2>
<p>El anexo I de la ordenanza define la zona por una lista de vías perimetrales, que no forman parte del ámbito: se puede circular por ellas sin etiqueta y la restricción empieza al entrar. Dentro siguen valiendo las limitaciones del Área de Prioridad Residencial de Ciutat Vella Nord, que ya existían para todos los vehículos no autorizados.</p>
<h2>Lo que viene</h2>
<p>Las fechas de 2027 y 2028 ya están en la ordenanza y el simulador las aplica: elige otro día en «Más opciones» para ver cómo cambia la respuesta. La ordenanza no prevé, por ahora, ninguna restricción para la etiqueta B. Para recurrir una denuncia o conocer el importe exacto, consulta ${h.a('multa-zbe', 'la guía de multas')}.</p>`,
  },
  en: {
    slug: 'zbe-valencia', nav: 'València ZBE', card: 'Phased by where the car is registered',
    title: 'València ZBE 2026: Phases by Province, Dates and Fines',
    description: 'València low-emission zone 2026: unlabelled cars from outside the province pay €200; from the province from 1/1/2027, from the city from 2028. Sourced.',
    h1: 'València low-emission zone 2026: which unlabelled cars are fined',
    intro: 'València only restricts cars and motorbikes without a label, but in phases depending on the town where the vehicle is registered. Check yours.',
    resume: (h) => `València’s low-emission zone, set up by its own byelaw, has been issuing fines since 1 December 2025 after an information phase. It only covers the “most polluting vehicles”: cars, mopeds and motorbikes rated A on the DGT vehicle register, meaning no label. The timetable depends on the town where the vehicle is registered, not on where the driver lives: vehicles registered outside Valencia province can no longer enter; those from other towns in the province may drive freely until 31 December 2026; those registered in the city itself, until 31 December 2027. A grace period stretches those deadlines to the end of 2027 for towns hit by the 2024 DANA floods and to 2028 for the damaged outlying districts. B, C, ECO and zero labels are not restricted. The fine is the serious-offence amount, ${h.eur(c.multa.importe)}, and 278 cameras enforce it.`,
    faqs: (h) => [
      { q: 'I live in Torrent and my car has no label: when will València fine me?', a: 'If the car is registered in Torrent, from 1 January 2027: until 31 December 2026 vehicles from other towns in the province may enter, drive and park freely. Also check whether Torrent is listed in the annex of Decree 164/2024 on towns hit by the floods: if so, the grace period runs to the end of 2027.' },
      { q: 'How often can an unlabelled car enter with a permit?', a: 'The byelaw grants 48 one-off accesses a year to the most polluting vehicles that cannot drive under the timetable, after notification and, where applicable, payment of the processing fee. They do not carry over: any unused in a year are lost. The procedure is in annex III of the byelaw.' },
      { q: 'Does the València zone affect vans?', a: 'Not under the current definition: the byelaw treats as “most polluting” unlabelled cars, mopeds and motorbikes in the family, unspecified or off-road use classes. Unlabelled vans and lorries fall outside that definition, although foreign vehicles equivalent to an unlabelled car are included.' },
    ],
    body: (h) => `
<h2>The registration matters more than where you live</h2>
<p>València is where summaries go wrong most often. The test is not where you live but the “town of registration” on the DGT vehicle register. A resident who has moved into the city without changing the car’s address stays in the phase of the old town; conversely, moving the vehicle’s address to València delays its restriction until 2028. Changing the address with the DGT also moves the road tax to the new council.</p>
<h2>A boundary of streets, not neighbourhoods</h2>
<p>Annex I of the byelaw defines the zone by a list of perimeter roads that are themselves outside it: you can use them without a label and the restriction starts once you turn in. Inside, the existing limits of the Ciutat Vella Nord residential priority area still apply to every unauthorised vehicle.</p>
<h2>What comes next</h2>
<p>The 2027 and 2028 dates are already in the byelaw and the tool applies them: pick another day under “More options” to see the answer change. For now the byelaw sets no restriction on the B label. To appeal a fine or check the exact amount, see ${h.a('multa-zbe', 'the fines guide')}.</p>`,
  },
});
