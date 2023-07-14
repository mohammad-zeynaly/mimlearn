export interface allDataType {
  id: number;
  title: string;
  img: string;
  stars: number;
  teacher: string;
  price: number;
  count: number;
  students: number;
  type: string;
  time: string;
  audio: string;
  caption: string;
}

export interface CoursesType {
  id: number;
  title: string;
  img: string;
  stars?: number;
  teacher?: string;
  students?: number;
  count?: number;
  price?: number;
  type: string;
}

export interface radioItemsType {
  id: number;
  time?: string;
  img: string;
  title: string;
  caption?: string;
  audio?: string;
  type: string;
}

export interface BasketProducts {
  basketProduct: CoursesType[];
}
