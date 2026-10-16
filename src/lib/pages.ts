/** Registre des pages de contenu : chaque fichier de `src/content/pages/` est chargé ici. */
import type { PageDef, Group } from './page-types';

const mods = import.meta.glob<{ default: PageDef }>('../content/pages/*.ts', { eager: true });

export const PAGES: PageDef[] = Object.entries(mods)
  .map(([file, m]) => {
    const g = m.default;
    const base = file.split('/').pop()!.replace(/\.ts$/, '');
    if (g.id !== base) throw new Error(`${file}: id « ${g.id} » distinct du nom de fichier`);
    return g;
  })
  .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));

export const GROUPS: Group[] = ['zbe', 'etiqueta', 'ivtm', 'guia'];
export const pageById = (id: string) => PAGES.find((p) => p.id === id);
export const pageDeCiudad = (slug: string) => PAGES.find((p) => p.ciudad === slug && p.tool === 'zbe');
export const pageDeMunicipio = (slug: string) => PAGES.find((p) => p.municipio === slug);
