import { CoursesActionType, CoursesType } from "../../types/coursesInterface";

interface InitialStateType {
  displayMode: string;
  filteredPricePercent: number;
  priceRange: number;
  paginatedProduct: CoursesType[];
  currentPage: number;
  pageNumbers: number[];
  isSortedData: boolean;
}
export const reducer = (
  state: InitialStateType,
  action: CoursesActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_DISPLAY_MODE": {
      return { ...state, displayMode: action.payload };
    }
    case "SET_FILTERED_PRICE_PERCENT": {
      return { ...state, filteredPricePercent: action.payload };
    }
    case "SET_PRISE_RANGE": {
      return { ...state, priceRange: action.payload };
    }
    case "SET_PAGINATED_PRODUCT": {
      return { ...state, paginatedProduct: action.payload };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.payload };
    }
    case "SET_PAGE_NUMBERS": {
      return { ...state, pageNumbers: action.payload };
    }
    case "SET_ISSORTED_DATA": {
      return { ...state, isSortedData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const initialState: InitialStateType = {
  displayMode: "row",
  filteredPricePercent: 0,
  priceRange: 0,
  paginatedProduct: [],
  currentPage: 1,
  pageNumbers: [0],
  isSortedData: false,
};
