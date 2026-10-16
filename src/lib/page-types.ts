/**
 * Une page = UN fichier dans `src/content/pages/`. Il porte les deux langues, le texte, la FAQ, les sources,
 * le mini-simulateur et les liens. Le cœur (routes, menus, pied de page, sitemap, hreflang, schémas) le lit.
 */
import type { SourceKey, Params } from './engine/params';

export type Lang = 'es' | 'en';
/** Rubrique de menu : ZBE par ville, étiquettes DGT, impuesto de circulación, guides pratiques. */
export type Group = 'zbe' | 'etiqueta' | 'ivtm' | 'guia';
export interface FAQ { q: string; a: string }

export interface Helpers {
  lang: Lang;
  /** Lien interne par identifiant de page. */
  a: (id: string, text: string) => string;
  eur: (n: number, decimals?: number) => string;
  num: (n: number, decimals?: number) => string;
  pct: (x: number, decimals?: number) => string;
  /** Date ISO écrite en toutes lettres. */
  date: (iso: string) => string;
  /** Tableau de style journal. */
  table: (headers: string[], rows: Array<Array<string | number>>, caption?: string, align?: Array<'l' | 'r'>) => string;
  /** Lien vers une source officielle de params-2026.json. */
  src: (key: SourceKey, text?: string) => string;
  /** Lien externe officiel quelconque (ordonnance municipale). */
  ext: (url: string, text: string) => string;
  P: Params;
}

export interface PageText {
  /** Segment d'URL sans barre, sans année. */
  slug: string;
  nav: string;
  card: string;
  /** 50 à 60 caractères, terme-clé d'abord, avec 2026 (RECETTE §11). */
  title: string;
  /** 150 à 160 caractères, avec 2026. */
  description: string;
  h1: string;
  /** Une phrase sous le H1. */
  intro: string;
  /** Bloc citable, au moins 120 mots, avec les chiffres (RECETTE §21). */
  resume: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  /** Corps HTML. `<!--mini:kind-->` insère un mini-simulateur supplémentaire. */
  body: (h: Helpers) => string;
}

export type Tool = 'zbe' | 'etiqueta' | 'ivtm' | 'cvf' | 'ciudades';

export interface PageDef {
  id: string;
  group: Group;
  order: number;
  /** Mini-simulateur placé après le bloc citable (fichier `src/lib/minis/<kind>.ts`). Sans objet si `tool`. */
  mini?: string;
  miniDefaults?: Record<string, number>;
  /** Cible du lien du mini-simulateur (défaut : accueil). */
  miniHref?: string;
  /** Outil complet de la page. */
  tool?: Tool;
  /** Préréglage de l'outil : ville ZBE, municipio IVTM, carburant… */
  toolPreset?: Record<string, string | number | boolean>;
  /** Ville ZBE décrite (src/data/zbe/<slug>.json) : la page affiche ses règles, son calendrier et ses sources. */
  ciudad?: string;
  /** Municipio IVTM décrit (src/data/ivtm-2026.json). */
  municipio?: string;
  /** Page sans URL propre (RECETTE §3, 100 pages au plus) : son texte et sa fiche sont rendus, en accordéon, dans
   *  la page récapitulative dont c'est l'identifiant, à l'ancre `#<id>`. */
  agrupadaEn?: string;
  related: string[];
  sources: SourceKey[];
  es: PageText;
  en: PageText;
}

export const definePage = (g: PageDef): PageDef => g;
