/** Piezas comunes de los simuladores : filas, cabecera del resultado, pasos, acciones (copiar, enlace, imprimir). */
import { useEffect, useRef, useState } from 'react';
import { formatMoney, formatPercent, formatNumber, displayDate } from '../../lib/format';
import type { Etiqueta } from '../../lib/engine/etiqueta';

export type L = 'es' | 'en';
export const tx = <A,>(l: L, es: A, en: A) => (l === 'en' ? en : es);
export const fm = (l: L) => ({
  eur: (x: number) => formatMoney(x, Math.abs(x - Math.round(x)) > 0.004 ? 2 : 0, l),
  pct: (x: number, d = 0) => formatPercent(x, d, l),
  num: (x: number, d = 0) => formatNumber(x, d, l),
  date: (iso: string) => displayDate(iso, l === 'en' ? 'en-GB' : 'es-ES'),
});

export interface Fila { label: string; value: string; strong?: boolean; muted?: boolean; sep?: boolean }
export function Filas({ rows, caption }: { rows: Fila[]; caption?: string }) {
  return (
    <table className="mt-3 w-full text-sm tabular-nums">
      {caption && <caption className="mb-1 text-left text-xs font-semibold uppercase tracking-wide text-navy-600">{caption}</caption>}
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={`${r.sep ? 'border-t-2 border-navy-800' : 'border-t border-navy-200'} ${r.strong ? 'font-semibold text-navy-900' : r.muted ? 'text-navy-600' : 'text-navy-800'}`}>
            <th scope="row" className="py-1.5 pr-3 text-left font-normal">{r.label}</th>
            <td className="py-1.5 pl-2 text-right [overflow-wrap:anywhere]">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Pastilla con el color de la pegatina de la DGT (nunca su dibujo oficial). */
export function Pegatina({ e, size = 'md' }: { e: Etiqueta; size?: 'sm' | 'md' | 'lg' }) {
  const s = size === 'lg' ? 'h-16 w-16 text-xl' : size === 'sm' ? 'h-7 w-7 text-[0.65rem]' : 'h-10 w-10 text-sm';
  return <span className={`et et-${e} ${s}`} aria-hidden="true">{e === 'A' ? '—' : e}</span>;
}

export function Pasos({ lang, steps }: { lang: L; steps: string[] }) {
  if (!steps.length) return null;
  return (
    <details className="mt-4 rounded-lg border border-navy-200 bg-white p-3 text-sm">
      <summary className="cursor-pointer font-semibold text-navy-900">{tx(lang, 'Cómo se ha decidido, paso a paso', 'How the answer was reached, step by step')}</summary>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-navy-800">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
    </details>
  );
}

export function Acciones({ lang, text }: { lang: L; text: () => string }) {
  const [done, setDone] = useState('');
  const copy = (what: 'text' | 'link') => {
    const s = what === 'text' ? `${text()} · ${window.location.href}` : window.location.href;
    navigator.clipboard?.writeText(s).then(() => { setDone(what); setTimeout(() => setDone(''), 1500); });
  };
  const b = 'rounded-md border border-navy-300 bg-white px-3 py-1.5 text-sm font-medium text-navy-800 hover:bg-navy-50';
  return (
    <div className="no-print mt-4 flex flex-wrap gap-2">
      <button type="button" className={b} onClick={() => copy('text')}>{done === 'text' ? tx(lang, 'Copiado', 'Copied') : tx(lang, 'Copiar resultado', 'Copy result')}</button>
      <button type="button" className={b} onClick={() => copy('link')}>{done === 'link' ? tx(lang, 'Enlace copiado', 'Link copied') : tx(lang, 'Compartir enlace', 'Share link')}</button>
      <button type="button" className={b} onClick={() => window.print()}>{tx(lang, 'Imprimir', 'Print')}</button>
    </div>
  );
}

/**
 * Cabecera del resultado. En el móvil el resultado queda bajo los campos : mientras el simulador está a la
 * vista pero el resultado aún más abajo, una barra fija muestra la respuesta (RECETTE §5, regla del 2026-10-11).
 */
export function Cabecera({ label, valor, bajo, icono }: { label: string; valor: string; bajo?: string; icono?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [barra, setBarra] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const box = (el.closest('[data-resultat]') as HTMLElement | null) ?? el;
    const calc = (el.closest('.rechner') as HTMLElement | null) ?? box;
    const mirar = () => {
      const h = window.innerHeight;
      setBarra(window.innerWidth < 1024 && calc.getBoundingClientRect().top < h * 0.85 && box.getBoundingClientRect().top > h - 24);
    };
    mirar();
    window.addEventListener('scroll', mirar, { passive: true });
    window.addEventListener('resize', mirar);
    return () => { window.removeEventListener('scroll', mirar); window.removeEventListener('resize', mirar); };
  }, []);
  return (
    <div ref={ref}>
      <p className="text-sm font-medium text-navy-700">{label}</p>
      <div className="mt-1 flex items-center gap-3">
        {icono}
        <p className="font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{valor}</p>
      </div>
      {bajo && <p className="mt-1 text-sm text-navy-700">{bajo}</p>}
      {barra && (
        <button type="button" aria-hidden="true" tabIndex={-1} onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          className="no-print fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-accent-200 bg-white px-4 py-3 text-left shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
          <span className="text-sm font-medium text-navy-700">{label}</span>
          <span className="whitespace-nowrap font-serif text-xl font-bold text-navy-900">{valor}</span>
        </button>
      )}
    </div>
  );
}

export function Aviso({ lang, methodHref }: { lang: L; methodHref?: string }) {
  return (
    <p className="mt-3 text-xs text-navy-600">
      {tx(lang, 'Estimación con las ordenanzas y los criterios de la DGT comprobados el 15 de octubre de 2026. Manda la ordenanza vigente y, para la etiqueta, la consulta por matrícula de la DGT. ', 'Estimate based on the byelaws and DGT criteria checked on 15 October 2026. The byelaw in force and, for the label, the DGT number-plate lookup have the final word. ')}
      {methodHref && <a className="underline" href={methodHref}>{tx(lang, 'Cómo calculamos', 'How we calculate')}</a>}
    </p>
  );
}

export const caja = 'mt-6 rounded-xl border border-accent-200 bg-accent-50/50 p-4 sm:p-5 lg:mt-0 lg:sticky lg:top-20';
export const marco = 'rechner not-prose overflow-hidden rounded-xl border border-navy-200 bg-white';
export const rejilla = 'p-4 sm:p-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-6';
