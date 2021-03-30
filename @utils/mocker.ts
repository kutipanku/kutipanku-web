import { Quote } from '../@types';

const quoteList: Quote[] = [
  {
    id: '1',
    content: {
      en: "It always seems impossible until it's done.",
      id:
        'Sesuatu akan selalu terlihat tidak mungkin sampai suatu saat kamu akhirnya melakukannya.'
    },
    author: 'Nelson Mandela',
    category: 'Motivation'
  },
  {
    id: '2',
    content: {
      en: 'Life is 10% what happens to you and 90% how you react to it.',
      id:
        'Hidup adalah 10% apa yang terjadi pada kamu dan 90% bagaimana kamu bereaksi terhadapnya.'
    },
    author: 'Charles R. Swindoll',
    category: 'Motivation'
  },
  {
    id: '3',
    content: {
      en:
        "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      id:
        'Mulailah dengan melakukan apa yang perlu; lalu lakukan apa yang mungkin; dan tiba-tiba kamu melakukan yang tidak mungkin.'
    },
    author: 'Francis of Assisi',
    category: 'Inspiration'
  },
  {
    id: '4',
    content: {
      en:
        'There are two ways of spreading light: to be the candle or the mirror that reflects it.',
      id:
        'Ada dua cara untuk menyebarkan cahaya: menjadi lilin atau cermin yang memantulkannya.'
    },
    author: 'Edith Wharton',
    category: 'Inspiration'
  },
  {
    id: '5',
    content: {
      en:
        "I'd rather regret the things I've done than regret the things I haven't done.",
      id:
        'Saya lebih memilih menyesali hal-hal yang telah saya lakukan daripada menyesali hal-hal yang belum saya lakukan.'
    },
    author: 'Lucille Ball',
    category: 'Wisdom'
  },
  {
    id: '6',
    content: {
      en:
        'The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.',
      id:
        'Bahaya yang lebih besar bagi kebanyakan dari kita tidak terletak pada menetapkan tujuan kita terlalu tinggi dan gagal; tetapi dalam menetapkan tujuan kita terlalu rendah, dan mencapai sasaran kita.'
    },
    author: 'Michelangelo',
    category: 'Wisdom'
  },
  {
    id: '7',
    content: {
      en:
        'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
      id:
        'Beri seseorang seekor ikan dan kamu telah memberinya makan selama sehari; ajari seseorang untuk memancing dan kamu telah memberinya makan seumur hidup.'
    },
    author: 'Maimonides',
    category: 'Wisdom'
  }
];

const quoteNotFound: Quote = {
  id: 'undefined',
  content: {
    en: 'Quote not found!',
    id: 'Kutipan tidak dapat ditemukan!'
  },
  author: '',
  category: 'Unknown'
};

export const getHomeQuotes = (): Quote[] => {
  return quoteList;
};

export const getQuoteById = (id: string): Quote => {
  const quote = quoteList.find((quote) => quote.id === id);
  if (quote) {
    return quote;
  } else {
    return quoteNotFound;
  }
};

export const getRandomQuote = (): Quote => {
  const random = Math.floor(Math.random() * quoteList.length);
  const quote = quoteList[random];
  return quote;
};
