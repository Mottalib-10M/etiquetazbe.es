/** Chiffres de synthèse sur les ZBE, calculés depuis les données (jamais écrits à la main dans les textes). */
import { CIUDADES, etiquetasRestringidas, type Ciudad } from './engine/zbe';
import type { Etiqueta } from './engine/etiqueta';

/** Date de la dernière vérification des ordonnances. */
export const HOY_DATOS = '2026-10-16';
export const N_CIUDADES = CIUDADES.length;
/** Villes où un véhicule de l'extérieur avec cette étiquette ne circule pas librement à la date de vérification. */
export const restringen = (e: Etiqueta, fecha = HOY_DATOS): Ciudad[] => CIUDADES.filter((c) => etiquetasRestringidas(c, fecha).includes(e));
export const nombres = (cs: Ciudad[], l: 'es' | 'en') => {
  const n = cs.map((c) => c.nombre);
  if (n.length < 2) return n.join('');
  return `${n.slice(0, -1).join(', ')} ${l === 'en' ? 'and' : 'y'} ${n[n.length - 1]}`;
};
