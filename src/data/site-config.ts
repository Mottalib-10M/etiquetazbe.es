/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://etiquetazbe.es";
export const SITE_NAMES: Record<string, string> = {"es": "ZBE y Etiqueta", "en": "ZBE & DGT Label"};
export const LANG_TAGS: Record<string, string> = {"es": "es-ES", "en": "en-ES"};
export const OG_LOCALES: Record<string, string> = {"es": "es_ES", "en": "en_GB"};
export const LOCALE_TAG = 'es-ES';
/** Formatage des nombres par langue de page : virgule décimale en espagnol, point en anglais (RECETTE §4). */
export const LOCALE_BY_LANG: Record<string, string> = { es: 'es-ES', en: 'en-GB' };
export const CURRENCY = 'EUR';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-10-15';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"es": "Editor de simuladores y guías prácticas · Movilidad urbana, zonas de bajas emisiones y fiscalidad del vehículo", "en": "Publisher of calculators and practical guides · Urban mobility, Spanish low-emission zones and vehicle tax"};
export const AUTHOR_DESC: Record<string, string> = {"es": "Radif Partners publica simuladores gratuitos sobre el coche en España. Cada regla de una zona de bajas emisiones y cada cuota del impuesto de circulación de esta web se ha leído en la ordenanza municipal o en el BOE, con el enlace y la fecha de comprobación junto al dato.", "en": "Radif Partners publishes free tools about driving in Spain. Every low-emission-zone rule and every road-tax figure on this site was read in the municipal byelaw or the Spanish official gazette, with the link and the check date shown next to it."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"es": ["Zonas de bajas emisiones (ZBE)", "Distintivo ambiental de la DGT", "Impuesto sobre vehículos de tracción mecánica (IVTM)", "Caballos fiscales", "Normas de emisiones Euro"], "en": ["Spanish low-emission zones (ZBE)", "DGT environmental label", "Spanish vehicle road tax (IVTM)", "Fiscal horsepower (CVF)", "Euro emission standards"]};
export const CONTACT_EMAIL = "contacto@etiquetazbe.es";
export const THEME_COLOR = '#AA151B';
export const LOGO_SYMBOL = 'ZBE';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau, aucun cookie, Clarity chargé en mode sans cookie (consentv2 denied).
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
export const GA4_ID = 'G-QM6ECFJW7X';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = 'yz4ced0cq5';
export const INDEXNOW_KEY = '9a83ae0d1bbed67ac743958d281e1df8';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',  // éditeur de tous les sites du portefeuille (RECETTE §8)
  legalForm: '',  // vide : publication à titre personnel, pas de société (comme les autres sites du portefeuille)
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "Francia / France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "NIF-IVA / VAT",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
