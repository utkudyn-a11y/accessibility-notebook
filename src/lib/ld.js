import { AUTHOR, SITE_TITLE, SITE_URL } from '../consts.js';
export function articleLd({ title, description, url, image, date }) {
  const author = { '@type': 'Person', name: AUTHOR.name };
  if (AUTHOR.url) author.url = AUTHOR.url;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: `${date}T09:00:00+03:00`,
    url: new URL(url, SITE_URL).href,
    image: new URL(image, SITE_URL).href,
    inLanguage: 'en',
    author,
    publisher: { '@type': 'Organization', name: SITE_TITLE, logo: { '@type': 'ImageObject', url: new URL('/icon-512.png', SITE_URL).href } },
    mainEntityOfPage: new URL(url, SITE_URL).href,
  };
}
