/** Outils d'écriture (`Helpers`) passés au corps de chaque page. */
import { type Locale } from '../i18n/routes';
import { hrefDe } from './href';
import { P } from './engine/params';
import type { SourceKey } from './engine/params';
import type { Helpers } from './page-types';
import { formatMoney, formatNumber, formatPercent, displayDate } from './format';
import { LANG_TAGS } from '../data/site-config';

const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
/** Montant : sans décimales s'il est rond, avec ses centimes s'il vient d'une ordonnance (RECETTE §4.1). */
export const eurAuto = (n: number, lang: Locale) => formatMoney(n, Math.abs(n - Math.round(n)) > 0.004 ? 2 : 0, lang);

export function helpers(lang: Locale): Helpers {
  return {
    lang, P,
    a: (id, text) => { const u = hrefDe(id, lang); return u ? `<a href="${u}">${text}</a>` : text; },
    eur: (n, d) => (d === undefined ? eurAuto(n, lang) : formatMoney(n, d, lang)),
    num: (n, d = 0) => formatNumber(n, d, lang),
    pct: (x, d = 0) => formatPercent(x, d, lang),
    date: (iso) => displayDate(iso, LANG_TAGS[lang]),
    src: (key: SourceKey, text?: string) => { const s = P.sources[key]; return `<a href="${s.url}" target="_blank" rel="nofollow noopener noreferrer">${text ?? s.label[lang]}</a>`; },
    ext: (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`,
    table: (headers, rows, caption, align = []) => {
      const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
      return `<div class="not-prose my-6 overflow-x-auto"><table class="w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="border-b border-navy-300 bg-navy-50 px-3 py-2 font-semibold text-navy-900 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r, ri) => `<tr class="${ri % 2 ? 'bg-navy-50/40' : ''}">${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumber(c, 0, lang)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    },
  };
}
