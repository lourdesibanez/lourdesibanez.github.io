import type { Lang } from '../i18n/ui';
import { getProjects } from './projects';

/** getStaticPaths for project detail pages, with a "next project" link that wraps around. */
export async function projectPaths(lang: Lang) {
  const projects = await getProjects(lang);
  return projects.map(({ slug, entry }, i) => {
    const n = projects[(i + 1) % projects.length];
    return { params: { slug }, props: { entry, next: { slug: n.slug, title: n.entry.data.title } } };
  });
}
