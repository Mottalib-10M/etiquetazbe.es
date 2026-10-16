/** Adresse d'une page par identifiant : sa route, ou l'ancre de son accordéon dans la page récapitulative. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { pageById } from './pages';
export function hrefDe(id: string, lang: Locale): string | undefined {
  if (ROUTES.some((r) => r.id === id)) return route(id, lang);
  const hub = pageById(id)?.agrupadaEn;
  return hub && ROUTES.some((r) => r.id === hub) ? `${route(hub, lang)}#${id}` : undefined;
}
