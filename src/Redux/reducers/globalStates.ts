import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface globalState {
  isShowShoppingCart: boolean;
  isShowOverlay: boolean;
  isShowLoginForm: boolean;
  isShowMobileMenu: boolean;
  isShowVideoPlayer: boolean;
}

const initialState: globalState = {
  isShowShoppingCart: false,
  isShowOverlay: false,
  isShowLoginForm: false,
  isShowMobileMenu: false,
  isShowVideoPlayer: false,
};

const toggleOverlay = (state: globalState) => {
  state.isShowOverlay = !state.isShowOverlay;
};

const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: initialState,
  reducers: {
    isShowShoppingCartHandler: (state) => {
      state.isShowShoppingCart = !state.isShowShoppingCart;
      toggleOverlay(state);
    },
    isShowOverlayHandler: (state) => {
      state.isShowOverlay = !state.isShowOverlay;
    },
    closeAllShows: (state) => {
      state.isShowOverlay = false;
      state.isShowShoppingCart = false;
      state.isShowLoginForm = false;
      state.isShowMobileMenu = false;
      state.isShowVideoPlayer = false;
    },
    isShowLoginFormHandler: (state) => {
      state.isShowLoginForm = !state.isShowLoginForm;
      toggleOverlay(state);
    },
    isShowMobileMenuHandler: (state) => {
      state.isShowOverlay = !state.isShowOverlay;
      toggleOverlay(state);
    },
    isShowVideoPlayerHandler: (state, action) => {
      state.isShowVideoPlayer = action.payload;
      toggleOverlay(state);
    },
  },
});

export default globalStatesSlice.reducer;
export const {
  isShowShoppingCartHandler,
  isShowOverlayHandler,
  isShowLoginFormHandler,
  isShowMobileMenuHandler,
  closeAllShows,
  isShowVideoPlayerHandler,
} = globalStatesSlice.actions;
