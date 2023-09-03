import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiDataType, CoursesType } from "../../types/coursesInterface";
import {
  getAllCourses,
  getArticles,
  getComments,
  getTeachers,
} from "../../services/educationalServices";

const initialState: apiDataType = {
  basketProduct: [],
  selectedUpdateProduct: {
    id: 6,
    title: "آموزش این دیزاین ",
    img: "./assets/images/products/product-6.png",
    prerequisite: "پیش نیاز ندارد",
    stars: 5,
    teacher: "مصطفی میر هادی",
    students: 45,
    price: 460_000,
    count: 1,
    caption:
      "در پکیج آموزش  این دیزاین بعد از آموزش کامل تمام ابزارهای مورد نیاز برای ساخت انواع جلد کتاب ، در اختیار شما قرار گرفته است.",
    time: "8 ساعت و 35 دقیقه",
    type: "graphicCourse",
    sortType: "date",
  } as CoursesType,
  allComments: [],
  allCourses: [],
  allArticles: [],
  allTeachers: [],
  totalPriceValue: 0,
};

export const fetchGetTheAllCourses = createAsyncThunk(
  "course/fetchCourses",
  async () => {
    const response = await getAllCourses();
    return response.data;
  }
);

export const fetchGetTheArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await getArticles();
    return response.data;
  }
);

export const fetchGetTheTeachers = createAsyncThunk(
  "teachers/allTeachers",
  async () => {
    const response = await getTeachers();
    return response.data;
  }
);

export const fetchGetTheComments = createAsyncThunk(
  "customers/customersComments",
  async () => {
    const response = await getComments();
    return response.data;
  }
);

const coursesStateSlice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    setDataCartProductLocalStorage: (state) => {
      let getProductInLocalStorage = JSON.parse(
        localStorage.getItem("products")!
      );

      state.basketProduct = getProductInLocalStorage;
    },

    selectedProductCountUpdate: (state, action) => {
      const { id, count } = action.payload;
      let mainProduct = state.basketProduct.find(
        (product) => product.id === id
      );

      state.selectedUpdateProduct = mainProduct;

      if (state.selectedUpdateProduct?.id === id) {
        state.selectedUpdateProduct = {
          ...mainProduct,
          count: count,
        } as CoursesType;

        const mainProductIndexInBasketProduct = state.basketProduct.findIndex(
          (product) => product.id === state.selectedUpdateProduct?.id
        );

        state.basketProduct[mainProductIndexInBasketProduct] =
          state.selectedUpdateProduct;

        localStorage.setItem("products", JSON.stringify(state.basketProduct));
      }
    },
    addToCart: (state, action) => {
      state.basketProduct.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.basketProduct));
    },

    removeFromCart: (state, action) => {
      const filteredDeleteProduct = state.basketProduct.filter(
        (course) => course.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(filteredDeleteProduct));

      state.basketProduct = filteredDeleteProduct;
    },

    totalPrice: (state) => {
      const totalValue = state.basketProduct.reduce((total, product) => {
        if (product.count !== undefined && product.price !== undefined) {
          total += product.count * product.price;
        }
        return total;
      }, 0);
      state.totalPriceValue = totalValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTheAllCourses.rejected, (state, action) => {
        console.error("Failed To Fetch AllCourses");
      })
      .addCase(fetchGetTheAllCourses.pending, (state, action) => {
        console.info("pending promise fetchGetTheAllCourses");
      })
      .addCase(fetchGetTheAllCourses.fulfilled, (state, action) => {
        state.allCourses = action.payload;
      })
      .addCase(fetchGetTheArticles.fulfilled, (state, action) => {
        state.allArticles = action.payload;
      })
      .addCase(fetchGetTheTeachers.fulfilled, (state, action) => {
        state.allTeachers = action.payload;
      })
      .addCase(fetchGetTheComments.fulfilled, (state, action) => {
        state.allComments = action.payload;
      });
  },
});

export default coursesStateSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  setDataCartProductLocalStorage,
  totalPrice,
  selectedProductCountUpdate,
} = coursesStateSlice.actions;
