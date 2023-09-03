export interface allDataType {
  id: number;
  title?: string;
  img?: string;
  imgBig?: string;
  stars?: number;
  teacher?: string;
  name?: string;
  price?: number;
  count?: number;
  students?: number;
  type: string;
  sortType?: string;
  time?: string;
  audio?: string;
  avatar?: React.JSX.Element;
  caption?: string;
  author?: string;
  email?: string;
  phone?: string;
  instagramAccount?: string;
  telegramAccount?: string;
  Location?: string;
  role?: string;
  prerequisite?: string;
}

export interface CoursesType {
  id: number;
  title?: string;
  img?: string;
  stars?: number;
  teacher?: string;
  students?: number;
  count?: number;
  price?: number;
  prerequisite?: string;
  caption?: string;
  time?: string;
  type: string;
  sortType?: string;
}

export interface radioItemsType {
  id: number;
  time?: string;
  img?: string;
  title?: string;
  caption?: string;
  audio?: string;
  type: string;
}
export interface MagazineBoxType {
  id: number;
  title?: string;
  img?: string;
  imgBig?: string;
  caption?: string;
  type: string;
}

export interface CommentsType {
  id: number;
  caption?: string;
  author?: string;
  role?: string;
  type: string;
}

export interface TeacherItemType {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  instagramAccount?: string;
  telegramAccount?: string;
  Location?: string;
  role?: string;
  img?: string;
  type?: string;
}

export interface communicationWithTheTeacherItemsType {
  id: number;
  title?: string;
  caption?: string;
  avatar?: React.JSX.Element;
  type: string;
}

export interface AccordionMenuSItemType {
  id: string;
  title: string;
}

export interface BasketProductsType {
  basketProduct: CoursesType[];
  allCourses: CoursesType[];
  selectedUpdateProduct: CoursesType | undefined;
  totalPriceValue: number;
}
