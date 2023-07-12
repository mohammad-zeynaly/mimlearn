import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import { SwiperSlide } from "swiper/react";

const CoursesTemplate = (): JSX.Element => {
  return (
    <section className="mt-56">
      <div className="container">
        <h2 className="text-2xl font-vazirMedium text-center">
          دوره‌ های آموزش طراحی گرافیک
        </h2>
        <h3 className="text-center mt-3 flex items-center after:block after:border-t after:border-[#D5D5D5] after:flex-grow after:mr-3 before:block before:border-t before:border-[#D5D5D5] before:flex-grow before:ml-3">
          اینجا شروع آینده موفق شغلی شماست!
        </h3>
        <div className="mt-4">
          <SwiperTemplate>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
          </SwiperTemplate>
        </div>
      </div>
    </section>
  );
};

export default CoursesTemplate;
