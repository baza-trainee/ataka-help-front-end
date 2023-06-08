export type Cards = {
  cards: [
    {
      id: number;
      title: string;
      thumb: string;
      alt: string;
      description: string[];
    },
  ];
  total: number;
};
