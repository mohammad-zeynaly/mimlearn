export interface Courses {
  id: string;
  name: string;
  img: string;
  price: number;
  count: number;
  students?: number;
}

export interface BasketProducts {
  basketProduct: Courses[];
}
