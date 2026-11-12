import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Rohit Kumar – Blog',
    description: 'Essays on decision-making, perception and flow from a pilot-turned-coach.',
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.excerpt, link: `/blog/${p.id}/` })),
  });
}
