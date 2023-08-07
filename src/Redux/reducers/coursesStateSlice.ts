import { createSlice } from "@reduxjs/toolkit";
import { BasketProducts } from "../../types/coursesInterface";

const initialState: BasketProducts = {
  basketProduct: [],
};

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
    addToCart: (state, action) => {
      state.basketProduct.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.basketProduct));
    },

    removeFromCart: (state, action) => {
      console.log("inside reducer removeFromCart", action);
      const filteredDeleteProduct = state.basketProduct.filter(
        (course) => course.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(filteredDeleteProduct));

      state.basketProduct = filteredDeleteProduct;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetch/get-courses", (state, action) => {});
  },
});

export default coursesStateSlice.reducer;
export const { addToCart, removeFromCart, setDataCartProductLocalStorage } =
  coursesStateSlice.actions;
