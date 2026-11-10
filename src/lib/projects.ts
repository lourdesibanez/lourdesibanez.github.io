import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

/** Projects for one language, sorted by `order`. Entry ids look like "es/assist". */
export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`));
  return all
    .map((entry) => ({ slug: entry.id.slice(lang.length + 1), entry }))
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}
