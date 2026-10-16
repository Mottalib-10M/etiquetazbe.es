/**
 * Distintivo ambiental de la DGT (0, ECO, C, B o sin distintivo « A »), d'après les critères publiés par la
 * DGT (params.distintivos). Le critère légal est la norme Euro inscrite au Registro de Vehículos ; la date
 * de première immatriculation n'est qu'un indice, que la DGT publie pour les turismos et furgonetas ligeras.
 * Quand la date tombe dans un mois de transition (un modèle pouvait déjà être homologué à la norme
 * suivante), le résultat est signalé « dudoso » : seule la consultation par matrícula tranche.
 */
import { P, ym } from './params';

export type Etiqueta = '0' | 'ECO' | 'C' | 'B' | 'A';
export type Categoria = 'turismo' | 'moto' | 'ciclomotor' | 'pesado';
export type Energia = 'gasolina' | 'diesel' | 'hev' | 'hev_diesel' | 'phev' | 'phev_diesel' | 'bev' | 'glp' | 'gnc';
/** Híbridos con motor térmico diésel : la ECO exige la C del diésel (Euro 6), no la de la gasolina (RGV, anexo II.E). */
export const esHibrido = (e: Energia) => e === 'hev' || e === 'hev_diesel' || e === 'phev' || e === 'phev_diesel';
export const esPhev = (e: Energia) => e === 'phev' || e === 'phev_diesel';
export interface Vehiculo {
  categoria: Categoria;
  energia: Energia;
  /** Autonomía eléctrica homologada en km (solo PHEV). */
  autonomiaKm?: number;
  /** Norma Euro si se conoce (casilla V.9 de la ficha técnica) ; 0 = no se conoce. */
  euro?: number;
  /** Primera matriculación, « AAAA-MM ». */
  matriculacion: string;
}
export interface ResultadoEtiqueta {
  etiqueta: Etiqueta;
  /** Qué ha decidido : la norma Euro indicada o la fecha de matriculación. */
  base: 'tecnologia' | 'euro' | 'fecha';
  /** La fecha cae en un periodo en que dos etiquetas son posibles. */
  dudoso: boolean;
  /** Etiqueta alternativa posible si es dudoso. */
  alternativa?: Etiqueta;
  /** Clave de la regla aplicada, para el texto explicativo. */
  regla: string;
}

const D = P.distintivos;
const enRango = (fecha: string, [a, b]: string[]) => ym(fecha) >= ym(a) && ym(fecha) <= ym(b);

/** Etiqueta de un motor de combustión según su carburante (sin tecnología ECO/0). */
function combustion(v: Vehiculo, combustible: 'gasolina' | 'diesel'): ResultadoEtiqueta {
  const euro = v.euro ?? 0;
  if (v.categoria === 'pesado') {
    if (euro) return { etiqueta: D.pesado.c_euro.includes(euro) ? 'C' : D.pesado.b_euro.includes(euro) ? 'B' : euro > 6 ? 'C' : 'A', base: 'euro', dudoso: false, regla: 'pesado_euro' };
    const f = ym(v.matriculacion);
    if (f >= ym(D.pesado.c_desde)) return { etiqueta: 'C', base: 'fecha', dudoso: false, regla: 'pesado_fecha' };
    if (f >= ym(D.pesado.b_desde)) return { etiqueta: 'B', base: 'fecha', dudoso: false, regla: 'pesado_fecha' };
    return { etiqueta: 'A', base: 'fecha', dudoso: false, regla: 'pesado_fecha' };
  }
  if (v.categoria === 'moto' || v.categoria === 'ciclomotor') {
    const M = D.moto;
    // Anexo II.E del RGV : B = Euro 2 ; C = Euro 3 y Euro 4. La Euro 5 no figura en el texto : C, marcada dudosa.
    if (euro) {
      if (M.c_euro.includes(euro)) return { etiqueta: 'C', base: 'euro', dudoso: false, regla: 'moto_euro' };
      if (euro >= 5) return { etiqueta: 'C', base: 'euro', dudoso: true, alternativa: 'B', regla: 'moto_euro5' };
      return { etiqueta: M.b_euro.includes(euro) ? 'B' : 'A', base: 'euro', dudoso: false, regla: 'moto_euro' };
    }
    const f = ym(v.matriculacion);
    // Fechas de obligatoriedad para todas las matriculaciones nuevas (Directiva 2002/51/CE, Reglamento (UE) 168/2013) ;
    // entre la fecha de los nuevos tipos y la de todos, un modelo pudo estar ya homologado en la etapa siguiente.
    if (v.categoria === 'ciclomotor') {
      const C = D.ciclomotor;
      if (f >= ym(C.c_desde)) return { etiqueta: 'C', base: 'fecha', dudoso: false, regla: 'ciclomotor_fecha' };
      if (f >= ym(C.c_nuevos_tipos)) return { etiqueta: 'B', base: 'fecha', dudoso: true, alternativa: 'C', regla: 'ciclomotor_transicion' };
      if (f >= ym(C.b_desde)) return { etiqueta: 'B', base: 'fecha', dudoso: false, regla: 'ciclomotor_fecha' };
      return { etiqueta: 'A', base: 'fecha', dudoso: true, alternativa: 'B', regla: 'ciclomotor_fecha' };
    }
    if (f >= ym(M.c_desde)) return { etiqueta: 'C', base: 'fecha', dudoso: false, regla: 'moto_fecha' };
    if (f >= ym(M.c_nuevos_tipos)) return { etiqueta: 'B', base: 'fecha', dudoso: true, alternativa: 'C', regla: 'moto_transicion' };
    if (f >= ym(M.b_desde)) return { etiqueta: 'B', base: 'fecha', dudoso: false, regla: 'moto_fecha' };
    if (f >= ym(M.b_nuevos_tipos)) return { etiqueta: 'A', base: 'fecha', dudoso: true, alternativa: 'B', regla: 'moto_transicion' };
    return { etiqueta: 'A', base: 'fecha', dudoso: false, regla: 'moto_fecha' };
  }
  const T = D.turismo;
  if (euro) {
    const c = combustible === 'gasolina' ? T.c_gasolina_euro : T.c_diesel_euro;
    const b = combustible === 'gasolina' ? T.b_gasolina_euro : T.b_diesel_euro;
    const e: Etiqueta = c.includes(euro) || euro > 6 ? 'C' : b.includes(euro) ? 'B' : 'A';
    return { etiqueta: e, base: 'euro', dudoso: false, regla: `${combustible}_euro` };
  }
  const f = ym(v.matriculacion);
  const cDesde = combustible === 'gasolina' ? T.c_gasolina_desde : T.c_diesel_desde;
  const bDesde = combustible === 'gasolina' ? T.b_gasolina_desde : T.b_diesel_desde;
  const tC = combustible === 'gasolina' ? D.transicion.gasolina_c : D.transicion.diesel_c;
  const tB = combustible === 'gasolina' ? D.transicion.gasolina_b : D.transicion.diesel_b;
  if (f >= ym(cDesde)) return { etiqueta: 'C', base: 'fecha', dudoso: false, regla: `${combustible}_fecha` };
  if (enRango(v.matriculacion, tC)) return { etiqueta: 'B', base: 'fecha', dudoso: true, alternativa: 'C', regla: `${combustible}_transicion_c` };
  if (f >= ym(bDesde)) return { etiqueta: 'B', base: 'fecha', dudoso: false, regla: `${combustible}_fecha` };
  if (enRango(v.matriculacion, tB)) return { etiqueta: 'A', base: 'fecha', dudoso: true, alternativa: 'B', regla: `${combustible}_transicion_b` };
  return { etiqueta: 'A', base: 'fecha', dudoso: false, regla: `${combustible}_fecha` };
}

export function etiquetaDe(v: Vehiculo): ResultadoEtiqueta {
  const autonomia = v.autonomiaKm ?? 0;
  if (v.energia === 'bev') return { etiqueta: '0', base: 'tecnologia', dudoso: false, regla: 'bev' };
  if (esPhev(v.energia) && autonomia >= 40) return { etiqueta: '0', base: 'tecnologia', dudoso: false, regla: 'phev40' };
  if (esHibrido(v.energia) || v.energia === 'glp' || v.energia === 'gnc') {
    // Categoría L : la ECO va a PHEV < 40 km y HEV sin exigir los criterios de la C (RGV, anexo II.E).
    if ((v.categoria === 'moto' || v.categoria === 'ciclomotor') && esHibrido(v.energia)) return { etiqueta: 'ECO', base: 'tecnologia', dudoso: false, regla: 'moto_eco' };
    // Turismos y pesados : « en todo caso, deberán cumplir los criterios de la clasificación C » del carburante
    // de su motor térmico (diésel Euro 6 ; gasolina Euro 4, 5 o 6). Los de gas se comparan como gasolina.
    const diesel = v.energia === 'hev_diesel' || v.energia === 'phev_diesel';
    const base = combustion(v, diesel ? 'diesel' : 'gasolina');
    if (base.etiqueta === 'C') return { ...base, etiqueta: 'ECO', base: base.base === 'euro' ? 'euro' : 'tecnologia', regla: 'eco' };
    return { ...base, regla: `eco_sin_c_${base.regla}`, alternativa: base.dudoso ? 'ECO' : undefined };
  }
  return combustion(v, v.energia === 'diesel' ? 'diesel' : 'gasolina');
}

/** Primera fecha de matriculación que da derecho a cada etiqueta, por carburante (tabla de las páginas). */
export function fechasMinimas() {
  const T = D.turismo;
  return {
    gasolina: { C: T.c_gasolina_desde, B: T.b_gasolina_desde },
    diesel: { C: T.c_diesel_desde, B: T.b_diesel_desde },
    pesado: { C: D.pesado.c_desde, B: D.pesado.b_desde },
    moto: { C: D.moto.c_desde, B: D.moto.b_desde },
    ciclomotor: { C: D.ciclomotor.c_desde, B: D.ciclomotor.b_desde },
  };
}

export const ORDEN: Etiqueta[] = ['0', 'ECO', 'C', 'B', 'A'];
