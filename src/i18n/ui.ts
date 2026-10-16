import type { Locale } from './routes';
const es = {
  updatedOn: 'Actualizado el', editorialPolicy: 'Política editorial', contactLabel: 'Contacto', reviewedBy: 'Comprobado por',
  skipToContent: 'Ir al contenido', mainNav: 'Navegación principal', breadcrumbLabel: 'Ruta de navegación', breadcrumbHome: 'Inicio', menuOpen: 'Abrir el menú',
  faqTitle: 'Lo que preguntan los conductores', relatedCalculators: 'Sigue con', sourcesTitle: 'Ordenanzas y normas consultadas', writtenBy: 'Redactado por',
  asOf: 'Reglas', lastUpdated: 'comprobadas en las fuentes oficiales el', footerValidated: 'Criterios de la DGT, 15 ordenanzas de ZBE y 13 ordenanzas fiscales leídas en su texto oficial', footerBrowser: 'Todo se calcula en tu navegador · no se envía ni se guarda nada · gratis y sin registro',
  footerDisclaimer: 'ZBE y Etiqueta es un servicio independiente de Radif Partners. No somos la DGT ni ningún ayuntamiento, no vendemos pegatinas y no tramitamos recursos. El resultado es una estimación según las ordenanzas publicadas: manda la ordenanza vigente y, para tu etiqueta, la consulta por matrícula de la DGT. Es una estimación orientativa que no sustituye a la ordenanza ni al criterio del ayuntamiento.', footerPopular: '', notFound: 'No hay ninguna página en esta dirección.',
  readMore: 'Seguir leyendo',
};
const en: typeof es = {
  updatedOn: 'Updated on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Checked by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'What drivers ask', relatedCalculators: 'Continue with', sourcesTitle: 'Byelaws and laws consulted', writtenBy: 'Written by',
  asOf: 'Rules', lastUpdated: 'checked against the official sources on', footerValidated: 'DGT criteria, 15 low-emission-zone byelaws and 13 road-tax byelaws read in their official text', footerBrowser: 'Everything is worked out in your browser · nothing is sent or stored · free, no sign-up',
  footerDisclaimer: 'ZBE & DGT Label is an independent service by Radif Partners. We are not the DGT or any city council, we do not sell stickers and we do not file appeals. Results are estimates based on the published byelaws: the byelaw in force and, for your label, the DGT number-plate lookup have the final word. This is an estimate only and does not replace the byelaw or the council’s decision.', footerPopular: '', notFound: 'There is no page at this address.',
  readMore: 'Read more',
};
export function t(lang: Locale) { return lang === 'en' ? en : es; }
