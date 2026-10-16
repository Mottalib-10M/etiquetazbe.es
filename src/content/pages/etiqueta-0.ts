import { definePage } from '../../lib/page-types';
import { N_CIUDADES, restringen, nombres } from '../../lib/resumen-ciudades';
import { MUNICIPIOS, cuotaTurismo } from '../../lib/engine/ivtm';
const conBonif = MUNICIPIOS.filter((m) => m.bonificaciones.some((b) => b.para.includes('0') || b.para.includes('electrico')));
export default definePage({
  id: 'etiqueta-0', group: 'etiqueta', order: 2, tool: 'etiqueta', toolPreset: { energia: 'bev', anio: 2022, etiqueta: '0' },
  related: ['bonificacion-ivtm-coche-electrico', 'etiqueta-eco', 'impuesto-circulacion', 'zonas-bajas-emisiones'], sources: ['dgt_cero', 'dgt_distintivo', 'trlhl'],
  es: {
    slug: 'etiqueta-0-emisiones', nav: 'Etiqueta 0 emisiones', card: 'Azul: eléctricos y enchufables de 40 km',
    title: 'Etiqueta 0 emisiones 2026: qué coches la tienen y ventajas',
    description: 'Etiqueta 0 emisiones de la DGT en 2026: eléctricos, autonomía extendida, pila de combustible y enchufables de 40 km. Todas las ZBE y menos IVTM. Al día.',
    h1: 'Etiqueta 0 emisiones: quién la tiene y qué abre en 2026',
    intro: `La etiqueta azul no tiene restricción por su distintivo en ninguna ZBE revisada, hoy ni en los calendarios hasta 2039. Solo los cascos de acceso reservado le piden permiso.`,
    resume: (h) => `La etiqueta 0 emisiones, azul, identifica según la DGT a los vehículos más eficientes: eléctricos de batería (BEV), eléctricos de autonomía extendida (REEV), híbridos enchufables (PHEV) con una autonomía mínima de 40 kilómetros en modo exclusivamente eléctrico y vehículos de pila de combustible (FCEV); la página de la DGT añade los de combustión de hidrógeno (HICEV). No depende de la fecha de matriculación ni de la norma Euro: la decide la tecnología registrada. Ninguna de las ${N_CIUDADES} ordenanzas de esta web la restringe por su etiqueta, tampoco en las fases previstas hasta 2039, y en el Distrito Centro de Madrid atraviesa la zona sin necesidad de aparcar; solo ${nombres(restringen('0'), 'es')} tienen cascos de acceso reservado en los que hace falta autorización con cualquier etiqueta. Además, ${conBonif.length} de los ${MUNICIPIOS.length} municipios cuyas ordenanzas fiscales hemos leído bonifican el impuesto de circulación de los eléctricos: en Madrid, un CERO matriculado desde 2026 de 11,5 caballos fiscales paga ${h.eur(cuotaTurismo({ municipio: 'madrid', cvf: 11.5, etiqueta: '0', tecnologia: 'electrico' }).cuota)} al año en lugar de ${h.eur(cuotaTurismo({ municipio: 'madrid', cvf: 11.5 }).base)}.`,
    faqs: (h) => [
      { q: '¿Un híbrido enchufable con 39 km de autonomía tiene la etiqueta 0?', a: 'No: el umbral de la DGT es una autonomía mínima de 40 km en modo exclusivamente eléctrico. Con 39 km, el mismo coche tiene la etiqueta ECO, que también entra en todas las ZBE revisadas pero no siempre tiene la misma bonificación en el impuesto: en Murcia, por ejemplo, la 0 tiene un 75 % y la ECO un 30 % durante tres años.' },
      { q: '¿Cuántos caballos fiscales tiene un coche eléctrico?', a: 'Según el anexo V del Reglamento General de Vehículos, la potencia efectiva en kilovatios dividida entre 5,152, sin más fórmula. Un motor de 100 kW da 19,40 caballos fiscales, en el tramo de 16 a 19,99 del impuesto. La cifra exacta está en la casilla P.2.1 de la ficha técnica; a menudo es más baja, porque la potencia efectiva no es la potencia máxima.' }, { q: `¿Un coche de hidrógeno tiene la etiqueta 0?`, a: `Sí. La DGT incluye en la etiqueta 0 emisiones a los vehículos de pila de combustible (FCEV), que generan electricidad a partir de hidrógeno, y su página de la etiqueta azul añade los de combustión de hidrógeno (HICEV). Como los eléctricos de batería, no dependen de la fecha de matriculación ni de la norma Euro.` }
    ],
    body: (h) => `
<h2>La única sin calendario</h2>
<p>Todas las ordenanzas que endurecen sus reglas hacia 2030 dejan intactas la 0 y la ECO: Palma, Valladolid o Vitoria-Gasteiz las mantienen como las únicas de libre acceso al final de sus calendarios. La diferencia con la ECO aparece en las zonas de especial protección y en los impuestos, donde algunos ayuntamientos premian más la etiqueta azul.</p>
<h2>La autonomía, la clave de los enchufables</h2>
<p>Para un híbrido enchufable, la etiqueta depende de la autonomía eléctrica homologada que figure en el registro, no de la que consigas en uso real. Si dudas, indica la autonomía en el simulador: con 40 km o más aparece la 0. Para el impuesto, ${h.a('bonificacion-ivtm-coche-electrico', 'la guía de bonificaciones')} compara lo que pagas en cada ciudad.</p>`,
  },
  en: {
    slug: 'zero-emissions-label', nav: 'Zero emissions label', card: 'Blue: electric and 40 km plug-ins',
    title: 'Zero Emissions Label 2026: Which Cars Get It, Benefits',
    description: 'Spain’s blue DGT zero-emissions label in 2026: battery, range-extender, fuel-cell cars and 40 km plug-ins. Access to every ZBE and road-tax relief. Dated.',
    h1: 'Zero emissions label: who gets it and what it opens in 2026',
    intro: `The blue label faces no label-based restriction in any zone we checked, today or in timetables running to 2039. Only permit-only historic centres ask it for a pass.`,
    resume: (h) => `The blue zero-emissions label marks what the DGT calls the most efficient vehicles: battery electric (BEV), range-extender (REEV), plug-in hybrids (PHEV) with at least 40 kilometres of pure-electric range and fuel-cell vehicles (FCEV); the DGT page also lists hydrogen combustion vehicles (HICEV). It does not depend on the registration date or Euro standard: the registered technology decides. None of the ${N_CIUDADES} byelaws on this site restricts it by label, including in the phases planned up to 2039, and in Madrid’s Centro district it may drive through without having to park; only ${nombres(restringen('0'), 'en')} have permit-only historic centres where any label needs authorisation. On top of that, ${conBonif.length} of the ${MUNICIPIOS.length} towns whose tax byelaws we have read give electric cars road-tax relief: in Madrid, a CERO car registered from 2026 rated at 11.5 fiscal hp pays ${h.eur(cuotaTurismo({ municipio: 'madrid', cvf: 11.5, etiqueta: '0', tecnologia: 'electrico' }).cuota)} a year instead of ${h.eur(cuotaTurismo({ municipio: 'madrid', cvf: 11.5 }).base)}.`,
    faqs: (h) => [
      { q: 'Does a plug-in hybrid with 39 km of range get the zero label?', a: 'No: the DGT threshold is at least 40 km in pure-electric mode. At 39 km the same car gets the ECO label, which also enters every zone we checked but does not always get the same tax relief: in Murcia, for example, the zero label gets 75% and the ECO 30% for three years.' },
      { q: 'How many fiscal hp does an electric car have?', a: 'Under annex V of the General Vehicle Regulation, the effective power in kilowatts divided by 5.152, nothing more. A 100 kW motor gives 19.40 fiscal hp, in the 16 to 19.99 road-tax band. The exact figure is in box P.2.1 of the technical card; it is often lower, because effective power is not peak power.' }, { q: `Does a hydrogen car get the zero label?`, a: `Yes. The DGT includes fuel-cell vehicles (FCEV), which produce electricity from hydrogen, in the zero-emissions label, and its blue-label page also lists hydrogen combustion vehicles (HICEV). Like battery electric cars, they do not depend on the registration date or Euro standard.` }
    ],
    body: (h) => `
<h2>The only label with no timetable</h2>
<p>Every byelaw that tightens towards 2030 leaves the zero and ECO labels untouched: Palma, Valladolid and Vitoria-Gasteiz keep them as the only free-access labels at the end of their timetables. The difference from ECO shows in special protection zones and in taxes, where some councils reward the blue label more.</p>
<h2>Range is what counts for plug-ins</h2>
<p>For a plug-in hybrid, the label depends on the approved electric range on the register, not on what you get in real use. If unsure, enter the range in the tool: 40 km or more gives the zero label. For the tax, ${h.a('bonificacion-ivtm-coche-electrico', 'the relief guide')} compares what you pay in each city.</p>`,
  },
});
