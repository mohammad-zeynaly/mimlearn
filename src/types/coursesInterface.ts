export interface Courses {
  id: number;
  title: string;
  img: string;
  stars: number;
  teacher: string;
  price: number;
  count?: number;
  students?: number;
  type: string;
}

export interface BasketProducts {
  basketProduct: Courses[];
}
