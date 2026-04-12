export interface Place {
  name: string;
  note?: string;
  lat: number;
  lng: number;
}

export const places: Place[] = [
  {
    name: 'İstanbul',
    note: 'Her şeyin başladığı şehir',
    lat: 41.0082,
    lng: 28.9784,
  },
  {
    name: 'Kadıköy',
    note: 'En sevdiğimiz semt',
    lat: 40.9808,
    lng: 29.029,
  },
  {
    name: 'Kapadokya',
    note: 'Balon turumuz — unutulmaz bir deneyim',
    lat: 38.6431,
    lng: 34.8287,
  },
];
