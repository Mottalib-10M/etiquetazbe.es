import { makeRouter, type RouteDef } from './routes-core';
import { PAGES } from '../lib/pages';
export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';
const R = (id: string, es: string, en: string, noindex = false): RouteDef<Locale> => ({ id, paths: { es: `/es/${es}/`, en: `/en/${en}/` }, ...(noindex ? { noindex } : {}) });
/** Pages de service. Les pages de contenu (villes, étiquettes, IVTM, guides) viennent de src/content/pages/ (lib/pages.ts). */
const CORE: RouteDef<Locale>[] = [
  { id: 'home', paths: { es: '/es/', en: '/en/' } },
  R('method', 'metodologia', 'method'),
  R('about', 'sobre-nosotros', 'about'),
  R('widget', 'widget', 'widget', true),
  R('contact', 'contacto', 'contact', true),
  R('editorial', 'politica-editorial', 'editorial-policy', true),
  R('privacy', 'privacidad', 'privacy', true),
  R('terms', 'aviso-legal', 'legal-notice', true),
  R('cookies', 'cookies', 'cookies', true),
];
export const ROUTES: RouteDef<Locale>[] = [CORE[0], ...PAGES.map((p) => R(p.id, p.es.slug, p.en.slug)), ...CORE.slice(1)];
export const { NOINDEX_PATHS, route, altPaths } = makeRouter(LOCALES, ROUTES);
