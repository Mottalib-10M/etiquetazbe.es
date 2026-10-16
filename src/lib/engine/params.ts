/** Accès typé à params-2026.json : chaque valeur légale du site vient de là, jamais du texte (RECETTE §4). */
import raw from '../../data/params-2026.json';

export type SourceKey = keyof typeof raw.sources;
export type Params = typeof raw;
export const P: Params = raw;

/** Arrondi commercial au centime. */
export const r2 = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100;
/** « 2015-09 » → nombre comparable (2015 × 12 + 8). */
export const ym = (s: string) => { const [y, m] = s.split('-').map(Number); return y * 12 + (m || 1) - 1; };
