import { createSlice } from "@reduxjs/toolkit";
import { BasketProducts } from "../../types/coursesInterface";

const initialState: BasketProducts = {
  basketProduct: [
    // {
    //   id: crypto.randomUUID(),
    //   name: "آموزش راه اندازه فورشگاه اینترنتی ، ووکامرس",
    //   img: "./assets/images/product-1.png",
    //   price: 8_000_00,
    //   count: 1,
    // },
  ],
};

const coursesStateSlice = createSlice({
  name: "courses",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("fetch/get-courses", (state, action) => {});
  },
});

export default coursesStateSlice.reducer;

// export {} coursesStateSlice.actions;
