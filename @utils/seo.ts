import { MetaTag, CanonicalLink } from '~/@types';

export const generateHeaderMetaTag = (
  title?: string,
  description?: string,
  imageUrl?: string,
  url?: string
): MetaTag[] => {
  const generatedMetaTag: MetaTag[] = [
    {
      hid: 'title',
      name: 'title',
      content: title
    },
    {
      hid: 'description',
      name: 'description',
      content: description
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: imageUrl
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: title
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: imageUrl
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: imageUrl
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: title
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Kutipanku'
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'id_ID'
    },
    {
      hid: 'og:locale:alternate',
      property: 'og:locale:alternate',
      content: 'en_US'
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url
    }
  ];
  return generatedMetaTag;
};

export const generateCanonicalLink = (
  baseUrl: string,
  routePath: string
): CanonicalLink[] => {
  const generatedCanonicalLink: CanonicalLink[] = [
    {
      rel: 'canonical',
      href: baseUrl + routePath
    }
  ];
  return generatedCanonicalLink;
};
