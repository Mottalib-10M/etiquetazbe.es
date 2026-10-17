/** Anciennes URL des pages regroupées (RECETTE §3, 100 pages au plus) → ancre de leur page récapitulative. Lue par 404.astro. */
import { LOCALES } from '../i18n/routes';
import { TODAS } from './pages';
import { hrefDe } from './href';
export const REDIRECCIONES: Record<string, string> = Object.fromEntries(
  TODAS.filter((p) => p.agrupadaEn).flatMap((p) => LOCALES.map((l) => [`/${l}/${p[l].slug}/`, hrefDe(p.id, l)!])),
);
