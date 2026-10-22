import rss from '@astrojs/rss';
import { getIssues } from '../lib/issues.js';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts.js';

export function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: getIssues().map((i) => ({ title: i.title, description: i.description, pubDate: i.dateObj, link: i.url })),
    customData: '<language>en</language>',
  });
}
