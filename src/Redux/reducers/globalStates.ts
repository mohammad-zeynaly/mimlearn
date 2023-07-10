import { createSlice } from "@reduxjs/toolkit";

export interface globalState {
  isShowShoppingCart: boolean;
  isShowOverlay: boolean;
  isShowLoginForm: boolean;
  isShowMobileMenu: boolean;
}

const initialState: globalState = {
  isShowShoppingCart: false,
  isShowOverlay: false,
  isShowLoginForm: false,
  isShowMobileMenu: false,
};

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: initialState,
  reducers: {
    isShowShoppingCartHandler: (state) => {
      state.isShowShoppingCart = !state.isShowShoppingCart;
      state.isShowOverlay = !state.isShowOverlay;
    },
    isShowOverlayHandler: (state) => {
      state.isShowOverlay = false;
      state.isShowShoppingCart = false;
      state.isShowLoginForm = false;
      state.isShowMobileMenu = false;
    },
    isShowLoginFormHandler: (state) => {
      state.isShowLoginForm = !state.isShowLoginForm;
      state.isShowOverlay = !state.isShowOverlay;
    },
    isShowMobileMenuHandler: (state) => {
      state.isShowOverlay = !state.isShowOverlay;
      state.isShowMobileMenu = !state.isShowMobileMenu;
    },
  },
});

export default globalStatesSlice.reducer;
export const {
  isShowShoppingCartHandler,
  isShowOverlayHandler,
  isShowLoginFormHandler,
  isShowMobileMenuHandler,
} = globalStatesSlice.actions;
