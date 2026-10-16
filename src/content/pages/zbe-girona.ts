import { definePage } from '../../lib/page-types';
export default definePage({
  id: "zbe-girona", group: 'zbe', order: 50, tool: 'zbe', ciudad: "girona",
  related: ["zbe-barcelona", "zbe-lleida", "zbe-tarragona", "sin-etiqueta"], sources: ['ley7_2021', 'lsv', 'dgt_consulta'],
  es: {
    slug: "zbe-girona",
    nav: "ZBE Girona",
    card: "Sin etiqueta de fuera, 24 días al año",
    title: "ZBE Girona 2026: horario, 24 días libres y domiciliados",
    description: "ZBE de Girona 2026: de la Devesa al Barri Vell, laborables de 7 a 20 h, cerrada a coches sin etiqueta DGT de fuera tras 24 días al año. Multa de 200 €. Al día.",
    h1: "ZBE de Girona 2026: 24 días al año y luego multa",
    intro: "Girona controla desde septiembre de 2025 la entrada de coches sin etiqueta de fuera. Cada matrícula tiene 24 días libres al año.",
    resume: () => "Girona aprobó definitivamente su ordenanza de ZBE el 9 de diciembre de 2024 y la publicó en el BOP de Girona el 20 de diciembre de 2024. La zona entró en funcionamiento el lunes 15 de septiembre de 2025 y abarca del parque de la Devesa a la calle Emili Grahit y de la calle Riu Güell a la calle del Carme y el Barri Vell. Las restricciones rigen los días laborables de lunes a viernes de 7.00 a 20.00 horas. Solo afectan a los vehículos sin etiqueta ambiental de fuera de Girona y a los domiciliados en la ciudad a partir de 2025; las etiquetas B, C, ECO y 0 circulan libremente. Los vehículos sin etiqueta de fuera pueden entrar hasta 24 días al año sin pedir permiso. El control se hace con 20 cámaras en 13 puntos, y la multa es de 200 euros, 100 si se paga en 20 días. Las furgonetas y vehículos de reparto pueden pedir una moratoria de 2 o 3 años.",
    faqs: () => [{ q: "Vengo de fuera de Girona con un coche sin etiqueta: ¿me multarán la primera vez?", a: "No. Los vehículos sin etiqueta de fuera de Girona pueden entrar hasta 24 días al año dentro del horario sin pedir ningún permiso. A partir de la entrada siguiente, la plataforma de la ATM envía la matrícula al Ayuntamiento, que tramita una denuncia de 200 euros (100 si se paga en 20 días)." }, { q: "Mi coche sin etiqueta está domiciliado en Girona: ¿puedo circular?", a: "Sí, si el permiso de circulación ya tenía domicilio en Girona en 2024; no hace falta pedir autorización. Los vehículos sin etiqueta que se domicilien en Girona en 2025 o después no están exentos. Para ellos rigen los 24 días libres al año." }, { q: "¿Hay que llevar la pegatina en la ZBE de Girona?", a: "No. Las cámaras leen la matrícula y conocen la etiqueta ambiental de cada vehículo sin necesidad de llevarla pegada en el cristal. Lo que cuenta es la clasificación de la matrícula en el registro de la DGT: si es errónea, hay que corregirla allí. Los vehículos extranjeros con requisitos equivalentes deben registrarse." }],
    body: (h) => `
<h2>Cómo cuentan los 24 días</h2>
<p>Girona no multa la primera entrada. Sus 20 cámaras en 13 puntos registran las matrículas, y la plataforma de la Autoritat del Transport Metropolità solo envía al Ayuntamiento las de los vehículos sin etiqueta que superan 24 entradas en un año, para tramitar la denuncia. Funciona de lunes a viernes laborables de 7 a 20 h; los fines de semana y festivos no hay restricción.</p>
<h2>Domiciliados de 2024 y de después</h2>
<p>Los vehículos sin etiqueta domiciliados en Girona en 2024 están exentos; los domiciliados a partir de 2025 no. El reparto con furgonetas y camiones sin etiqueta puede pedir una moratoria de dos o tres años, y hay autorizaciones por tratamientos médicos o rentas inferiores a 2 veces el IPREM. En el área de Barcelona, ${h.a('zbe-barcelona', "la ZBE Rondes")} sigue otras reglas.</p>`,
  },
  en: {
    slug: "zbe-girona",
    nav: "Girona ZBE",
    card: "Out-of-town unlabelled cars, 24 days a year",
    title: "Girona ZBE 2026: Hours, 24 Free Days and Local Vehicles",
    description: "Girona low-emission zone 2026: Devesa to the old quarter, working days 7 am to 8 pm, closed to out-of-town unlabelled cars after 24 days a year. €200 fine.",
    h1: "Girona low-emission zone 2026: 24 days a year, then a fine",
    intro: "Since September 2025 Girona has controlled out-of-town unlabelled cars. Each number plate gets 24 free days a year.",
    resume: () => "Girona gave final approval to its low-emission zone byelaw on 9 December 2024 and published it in the provincial gazette on 20 December 2024. The zone went live on Monday 15 September 2025 and runs from Devesa park to Carrer Emili Grahit and from Carrer Riu Güell to Carrer del Carme and the Old Quarter. Restrictions apply on working days, Monday to Friday, from 7am to 8pm. They only affect vehicles with no environmental label from outside Girona and those registered in the city from 2025 onwards; B, C, ECO and 0 labels drive in freely. No-label vehicles from elsewhere can enter up to 24 days a year without asking for a permit. Enforcement uses 20 cameras at 13 points, and the fine is €200, or €100 if paid within 20 days. Vans and delivery vehicles can apply for a 2- or 3-year grace period.",
    faqs: () => [{ q: "I'm coming from outside Girona in a car with no label: will I be fined the first time?", a: "No. No-label vehicles from outside Girona can enter up to 24 days a year during restricted hours without asking for a permit. From the next entry, the ATM platform sends the plate to the council, which issues a €200 fine (€100 if paid within 20 days)." }, { q: "My car has no label but is registered in Girona: can I drive in?", a: "Yes, if its registration address was already in Girona in 2024; no permit is needed. No-label vehicles registered in Girona in 2025 or later are not exempt. For them the 24 free days a year apply, and after that a fine." }, { q: "Do I need the sticker in Girona’s zone?", a: "No. The cameras read the number plate and know each vehicle's environmental label without it being stuck on the windscreen. What counts is how the plate is classified on the DGT register: if it is wrong, it must be corrected there. Foreign vehicles meeting equivalent standards must be registered." }],
    body: (h) => `
<h2>How the 24 days are counted</h2>
<p>Girona does not fine the first entry. Its 20 cameras at 13 points record plates, and the metropolitan transport authority’s platform only sends the council those unlabelled vehicles that exceed 24 entries in a year, so a fine can be issued. It runs on working weekdays from 7 am to 8 pm; at weekends and on public holidays there is no restriction.</p>
<h2>Registered in 2024, or later</h2>
<p>Unlabelled vehicles registered in Girona in 2024 are exempt; those registered from 2025 are not. Delivery vans and lorries without a label can request a two- or three-year grace period, and permits cover regular medical treatment or incomes below twice the IPREM index. Around Barcelona, ${h.a('zbe-barcelona', "the Rondes zone")} follows different rules.</p>`,
  },
});
