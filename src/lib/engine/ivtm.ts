/**
 * Impuesto de circulación (IVTM). Cuota mínima del artículo 95.1 del TRLHL por tramo de caballos fiscales,
 * multiplicada por el coeficiente de cada ayuntamiento (como máximo 2) o sustituida por la tarifa de su
 * ordenanza fiscal 2026 (src/data/ivtm-2026.json), menos la bonificación que la ordenanza prevé para el
 * vehículo. Caballos fiscales : anexo V del Reglamento General de Vehículos.
 */
import { P, r2 } from './params';
import raw from '../../data/ivtm-2026.json';
import type { Etiqueta } from './etiqueta';

export interface Tramo { desde: number; hasta: number | null; cuota: number }
export interface Bonificacion {
  /** A quién se aplica : etiqueta DGT, tecnología o antigüedad. */
  para: Array<'0' | 'ECO' | 'electrico' | 'hibrido' | 'gas' | 'historico'>;
  pct: number;
  /** Años desde la matriculación durante los que se aplica (vacío = sin límite). */
  anos?: number;
  /** Requiere solicitud expresa. */
  solicitud?: boolean;
  /** La ordenanza excluye los híbridos diésel. */
  excluye_diesel?: boolean;
  /** Antigüedad mínima en años (solo « historico »). */
  edad_min?: number;
  nota: string;
  nota_en: string;
}
export interface Municipio {
  slug: string; nombre: string; provincia: string;
  regimen?: 'comun' | 'foral';
  turismos: Tramo[];
  coeficiente?: number | null;
  motos?: Array<{ clave: string; cuota: number }>;
  bonificaciones: Bonificacion[];
  /** Bonificaciones no leídas en una fuente oficial : el simulador no las aplica y lo dice. */
  bonificaciones_pendientes?: boolean;
  pago?: { es: string; en: string };
  ordenanza: { nombre: string; url: string };
  fuentes: Array<{ url: string; label: string; cita?: string }>;
  verificado: string;
  nota?: { es: string; en: string };
}
export const MUNICIPIOS: Municipio[] = (raw as { municipios: Municipio[] }).municipios.slice().sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
export const municipio = (slug: string) => MUNICIPIOS.find((m) => m.slug === slug);

/** Recorta a dos decimales « aproximada por defecto » (anexo V RGV). */
const trunc2 = (x: number) => Math.floor(x * 100 + 1e-9) / 100;

/** Caballos fiscales de un motor de combustión : T · (cilindrada por cilindro)^0,6 · N. */
export function cvfCombustion(cilindradaCc: number, cilindros: number, dosTiempos = false): number {
  if (cilindradaCc <= 0 || cilindros <= 0) return 0;
  const T = dosTiempos ? P.cvf.t_dos_tiempos : P.cvf.t_cuatro_tiempos;
  return trunc2(T * Math.pow(cilindradaCc / cilindros, P.cvf.exponente) * cilindros);
}
/** Caballos fiscales de un motor eléctrico : potencia efectiva en kW / 5,152. */
export function cvfElectrico(kw: number): number { return kw > 0 ? trunc2(kw / P.cvf.divisor_electrico_kw) : 0; }

export const TRAMOS_ESTADO: Tramo[] = P.ivtm_art95.turismos as Tramo[];
export function tramo(tramos: Tramo[], cvf: number): { tramo: Tramo; indice: number } {
  const i = tramos.findIndex((t) => cvf >= t.desde && (t.hasta === null || cvf < t.hasta + 0.01));
  const indice = i < 0 ? tramos.length - 1 : i;
  return { tramo: tramos[indice], indice };
}

export interface CuotaIVTM { cvf: number; tramo: number; base: number; minimaEstatal: number; bonificacion?: Bonificacion; pct: number; cuota: number; maxima: number }

/** Cuota anual de un turismo. Sin municipio : cuota mínima estatal (coeficiente 1) y la máxima legal (×2). */
export function cuotaTurismo(o: { municipio?: string; cvf: number; etiqueta?: Etiqueta; tecnologia?: 'electrico' | 'hibrido' | 'gas' | 'combustion'; diesel?: boolean; antiguedadAnos?: number }): CuotaIVTM {
  const est = tramo(TRAMOS_ESTADO, o.cvf);
  const m = o.municipio ? municipio(o.municipio) : undefined;
  const t = m ? tramo(m.turismos, o.cvf) : est;
  const base = t.tramo.cuota;
  const bon = m ? bonificacionAplicable(m, o) : undefined;
  const pct = bon?.pct ?? 0;
  return { cvf: o.cvf, tramo: t.indice, base, minimaEstatal: est.tramo.cuota, bonificacion: bon, pct, cuota: r2(base * (1 - pct)), maxima: r2(est.tramo.cuota * P.ivtm_art95.coeficiente_maximo) };
}

export function bonificacionAplicable(m: Municipio, o: { etiqueta?: Etiqueta; tecnologia?: string; diesel?: boolean; antiguedadAnos?: number }): Bonificacion | undefined {
  const edad = o.antiguedadAnos ?? 0;
  const ok = m.bonificaciones.filter((b) => (b.anos === undefined || edad < b.anos) && !(b.excluye_diesel && o.diesel && o.tecnologia === 'hibrido') && b.para.some((x) =>
    (x === '0' && o.etiqueta === '0') || (x === 'ECO' && o.etiqueta === 'ECO') ||
    (x === 'electrico' && o.tecnologia === 'electrico') || (x === 'hibrido' && o.tecnologia === 'hibrido') ||
    (x === 'gas' && o.tecnologia === 'gas') || (x === 'historico' && edad >= (b.edad_min ?? P.ivtm_art95.antiguedad_historicos_anos))));
  return ok.sort((a, b) => b.pct - a.pct)[0];
}

/** Prorrateo por trimestres naturales en la primera adquisición o la baja definitiva (art. 96.3 TRLHL). */
export function prorrateo(cuota: number, mes: number, tipo: 'alta' | 'baja'): number {
  const trimestre = Math.floor((mes - 1) / 3) + 1; // 1..4
  const trimestres = tipo === 'alta' ? 5 - trimestre : trimestre;
  return r2(cuota * trimestres / 4);
}
