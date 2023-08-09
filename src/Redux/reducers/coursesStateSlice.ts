import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BasketProducts } from "../../types/coursesInterface";

const initialState: BasketProducts = {
  basketProduct: [
   
  ],
  totalPriceValue: 0,
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

    totalPrice: (state) => {
      console.log("total price state.basketProduct", state.basketProduct);
      const totalValue = state.basketProduct.reduce((total, product) => {
        if (product.count !== undefined && product.price !== undefined) {
          total += product.count * product.price;
        }
        return total;
      }, 0);
      state.totalPriceValue = totalValue;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase("fetch/get-courses", (state, action) => {});
  // },
});

export default coursesStateSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  setDataCartProductLocalStorage,
  totalPrice,
} = coursesStateSlice.actions;
