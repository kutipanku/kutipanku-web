import { Quote } from '../@types';

export const getHomeQuotes = (): Quote[] => {
  return [
    {
      id: '1',
      content: "It always seems impossible until it's done.",
      author: 'Nelson Mandela',
      category: 'Motivation'
    },
    {
      id: '2',
      content: 'Life is 10% what happens to you and 90% how you react to it.',
      author: 'Charles R. Swindoll',
      category: 'Motivation'
    },
    {
      id: '3',
      content:
        "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      author: 'Francis of Assisi',
      category: 'Inspiration'
    },
    {
      id: '4',
      content:
        'There are two ways of spreading light: to be the candle or the mirror that reflects it.',
      author: 'Edith Wharton',
      category: 'Inspiration'
    },
    {
      id: '5',
      content:
        "I'd rather regret the things I've done than regret the things I haven't done.",
      author: 'Lucille Ball',
      category: 'Wisdom'
    },
    {
      id: '6',
      content:
        'The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.',
      author: 'Michelangelo',
      category: 'Wisdom'
    },
    {
      id: '5',
      content:
        'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
      author: 'Maimonides',
      category: 'Wisdom'
    }
  ];
};
