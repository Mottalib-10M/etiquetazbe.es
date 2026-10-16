/** Helpers communs des mini-simulateurs (ignorés par le registre : préfixe « _ »). */
import { formatMoney, formatPercent, formatNumber, displayDate } from '../format';
export type L = 'es' | 'en';
export const T = <A>(l: L, es: A, en: A) => (l === 'en' ? en : es);
export const eur = (x: number, l: L) => formatMoney(x, Math.abs(x - Math.round(x)) > 0.004 ? 2 : 0, l);
export const pct = (x: number, l: L, d = 0) => formatPercent(x, d, l);
export const num = (x: number, l: L, d = 0) => formatNumber(x, d, l);
export const fecha = (iso: string, l: L) => displayDate(iso, l === 'en' ? 'en-GB' : 'es-ES');
export const HOY = '2026-10-15';
export const energiaOpt = (l: L) => [['0', T(l, 'Gasolina', 'Petrol')], ['1', T(l, 'Diésel', 'Diesel')], ['2', T(l, 'Híbrido no enchufable', 'Self-charging hybrid')], ['3', T(l, 'GLP o gas natural', 'LPG or natural gas')], ['4', T(l, 'Eléctrico', 'Electric')]].map(([value, label]) => ({ value, label }));
export const ENERGIAS = ['gasolina', 'diesel', 'hev', 'glp', 'bev'] as const;
export const mesOpt = (l: L) => (l === 'en' ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']).map((label, i) => ({ value: String(i + 1), label }));
export const ym = (a: number, m: number) => `${Math.min(Math.max(Math.round(a) || 2010, 1950), 2026)}-${String(Math.round(m) || 1).padStart(2, '0')}`;
