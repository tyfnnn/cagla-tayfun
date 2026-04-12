export interface Memory {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export const memories: Memory[] = [
  {
    date: '2026-03-06',
    title: 'İlk Günümüz',
    description: 'Her şeyin başladığı o güzel gün... Kalbimizde sonsuza dek yaşayacak.',
    image: '/images/memories/ilk-gun.jpg',
  },
  {
    date: '2026-03-14',
    title: 'İlk Buluşmamız',
    description: 'Birlikte geçirdiğimiz ilk özel an. Saatler dakikalar gibi geçti.',
    image: '/images/memories/ilk-bulusma.jpg',
  },
  {
    date: '2026-04-01',
    title: 'İlk Gezimiz',
    description: 'Birlikte keşfetmeye başladığımız ilk yer. Yeni maceralarımızın başlangıcı.',
    image: '/images/memories/ilk-gezi.jpg',
  },
];
