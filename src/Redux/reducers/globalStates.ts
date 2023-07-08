import { createSlice } from "@reduxjs/toolkit";

export interface globalState {
  isShowShoppingCart: boolean;
}

const initialState: globalState = {
  isShowShoppingCart: false,
};

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: initialState,
  reducers: {
    isShowShoppingCartHandler: (state) => {
      console.log(state.isShowShoppingCart);
      state.isShowShoppingCart = !state.isShowShoppingCart;
    },
  },
});

export default globalStatesSlice.reducer;
export const { isShowShoppingCartHandler } = globalStatesSlice.actions;
