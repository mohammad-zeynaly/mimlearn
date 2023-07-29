import { createSlice } from "@reduxjs/toolkit";
import { BasketProducts } from "../../types/coursesInterface";

const initialState: BasketProducts = {
  basketProduct: [
    {
      id: 9,
      title: "آموزش جاوا اسکریپت ",
      img: "./assets/images/products/product-3.png",
      prerequisite: "Html & Css",
      stars: 5,
      teacher: " محمد امین سعیدی",
      students: 1200,
      price: 880_000,
      caption:
        "آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است که بازار کار فوق العاده ای دارد",
      time: "91 ساعت و 20 دقیقه",
      type: "programmingCourses",
    },
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
