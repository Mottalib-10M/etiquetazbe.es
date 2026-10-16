import { definePage } from '../../lib/page-types';
import { ciudad } from '../../lib/engine/zbe';
const c = ciudad('madrid');
export default definePage({
  id: 'madrid-central', group: 'zbe', order: 9, tool: 'zbe', toolPreset: { ciudad: 'madrid' },
  related: ['zbe-madrid', 'etiqueta-c', 'etiqueta-eco', 'multa-zbe'], sources: ['lsv', 'dgt_consulta', 'ley7_2021'],
  es: {
    slug: 'madrid-central', nav: 'Madrid Central (Distrito Centro)', card: 'B y C de fuera solo a aparcamiento',
    title: 'Madrid Central 2026: quién entra en la ZBE Distrito Centro',
    description: 'Madrid Central 2026, hoy ZBE Distrito Centro: ECO y 0 entran libres, B y C de no residentes solo a aparcar y sin etiqueta prohibido. Multa de 200 €. Al día.',
    h1: 'Madrid Central en 2026: qué queda de la antigua zona',
    intro: 'Madrid Central ya no se llama así, pero sus reglas siguen: la zona de especial protección del Distrito Centro. Comprueba qué puedes hacer con tu etiqueta.',
    resume: (h) => `Madrid Central, la zona que el Ayuntamiento creó en noviembre de 2018, se convirtió con la ordenanza de 13 de septiembre de 2021 en la Zona de Bajas Emisiones de Especial Protección (ZBEDEP) Distrito Centro, en vigor desde el 22 de septiembre de 2021 y modificada por la Ordenanza 2/2026. Sus reglas para quien no vive en el distrito: los turismos con etiqueta ECO y 0 tienen acceso libre; los de etiqueta B y C solo pueden entrar para estacionar en un aparcamiento adherido al sistema o en una plaza reservada dentro de la zona, no para atravesarla; los vehículos sin etiqueta tienen prohibido el acceso desde el 1 de enero de 2025, salvo los históricos y los adaptados para personas con movilidad reducida dados de alta. Los empadronados en el distrito acceden con sus B y C, que se dan de alta de oficio, y pueden invitar hasta 20 veces al mes. El perímetro es de libre circulación. La multa es de ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: '¿Puedo cruzar Madrid Central con un coche de etiqueta C para llegar a Atocha?', a: 'No si no vives en el Distrito Centro: una C o una B de no residente solo puede entrar para ir a un aparcamiento adherido o a una plaza reservada dentro de la zona. Para cruzar hay que usar el perímetro, que es de libre circulación. Con una ECO o una 0 sí puedes atravesarla.' },
      { q: '¿Qué es un aparcamiento adherido en el Distrito Centro?', a: 'Es un aparcamiento público o privado conectado al sistema de gestión de accesos del Ayuntamiento: cuando un coche B o C de fuera entra en él, la cámara de acceso a la zona queda justificada. Si aparcas en la calle o en un parking no adherido, la entrada se trata como circulación no autorizada y se denuncia.' }, { q: `¿Un vecino de Lavapiés necesita invitación para su coche C?`, a: `No. Lavapiés forma parte del Distrito Centro, y los vehículos B y C de los empadronados en el distrito que están domiciliados en Madrid se dan de alta de oficio en el sistema de accesos. La invitación sirve para los coches de las visitas, hasta 20 al mes, no para los del propio residente.` }
    ],
    body: (h) => `
<h2>El nombre ha cambiado, el mapa no</h2>
<p>Quien busca «Madrid Central» encuentra hoy la ZBEDEP Distrito Centro, que se superpone a la ZBE de toda la ciudad. El perímetro sigue siendo el del distrito Centro, con sus calles de borde abiertas a todos, y la lógica es la misma de 2018: se puede llegar a un aparcamiento, no se puede usar el centro como paso. Las cámaras OCR leen la matrícula al entrar y comprueban si el vehículo está autorizado o va a un aparcamiento del sistema.</p>
<h2>Visitas, compras y hoteles</h2>
<p>Para una visita, la vía más simple es un aparcamiento adherido: el acceso queda justificado por la entrada en el parking. Un vecino del distrito puede dar invitaciones a coches B o C de familiares o proveedores. Los vehículos ECO y 0, en cambio, no necesitan ningún trámite para entrar ni para atravesar el distrito.</p>
<p>Fuera del distrito, las reglas son las de la ZBE municipal y las de Plaza Elíptica: ${h.a('zbe-madrid', 'consulta las tres zonas de Madrid')}.</p>`,
  },
  en: {
    slug: 'madrid-central', nav: 'Madrid Central (Centro district)', card: 'Out-of-town B and C only to park',
    title: 'Madrid Central 2026: Who Can Enter the Centro District ZBE',
    description: 'Madrid Central 2026, now the Centro district zone: ECO and zero drive freely, non-resident B and C only to a car park, no label banned. Fine of €200. Dated.',
    h1: 'Madrid Central in 2026: what is left of the old zone',
    intro: 'Madrid Central has a new name but its rules live on in the special protection zone of the Centro district. Check what you can do with your label.',
    resume: (h) => `Madrid Central, the zone the council created in November 2018, became the Centro District Special Protection Low-Emission Zone (ZBEDEP Distrito Centro) under the byelaw of 13 September 2021, in force since 22 September 2021 and amended by Byelaw 2/2026. Its rules for non-residents: cars with an ECO or zero label have free access; B and C cars may only enter to park in a car park that is part of the system or a reserved space inside the zone, not to drive through it; unlabelled vehicles have been banned since 1 January 2025, except historic vehicles and those adapted for reduced mobility that are registered. Residents of the district get in with their B and C cars, registered automatically, and may issue up to 20 passes a month. The perimeter roads are open to all. The fine is ${h.eur(c.multa.importe)}.`,
    faqs: (h) => [
      { q: 'Can I cross Madrid Central in a C-label car to reach Atocha station?', a: 'Not if you do not live in the Centro district: a non-resident C or B car may only enter to reach an approved car park or a reserved space inside the zone. To get across you must use the perimeter roads, which are open to all. With an ECO or zero-emission car you may drive through.' },
      { q: 'What is an approved car park in the Centro district?', a: 'A public or private car park linked to the council’s access management system: when an out-of-town B or C car enters it, the zone camera record is justified. If you park on the street or in a car park outside the system, the entry counts as unauthorised driving and is fined.' }, { q: `Does a Lavapiés resident need a pass for their C-label car?`, a: `No. Lavapiés is part of the Centro district, and B and C vehicles of residents registered in the district and in Madrid are entered in the access system automatically. Passes are for visitors’ cars, up to 20 a month, not for the resident’s own car.` }
    ],
    body: (h) => `
<h2>The name changed, the map did not</h2>
<p>Search for “Madrid Central” today and you land on the Centro district special protection zone, layered on top of the citywide zone. The boundary is still the Centro district, with its edge roads open to everyone, and the logic is the 2018 one: you may reach a car park, you may not use the centre as a through route. OCR cameras read the plate on entry and check whether the vehicle is authorised or heading for a car park in the system.</p>
<h2>Visits, shopping and hotels</h2>
<p>For a visit, the simplest route is an approved car park: entering it justifies the trip. A district resident can issue passes to relatives’ or suppliers’ B or C cars. ECO and zero-emission vehicles need no formality at all to enter or cross the district.</p>
<p>Outside the district, the citywide zone and Plaza Elíptica rules apply: ${h.a('zbe-madrid', 'see all three Madrid zones')}.</p>`,
  },
});
