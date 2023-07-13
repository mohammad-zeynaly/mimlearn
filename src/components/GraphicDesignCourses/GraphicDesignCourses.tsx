import { SwiperSlide } from "swiper/react";
import CoursesTemplate from "../CoursesTemplate/CoursesTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";

const GraphicDesignCourses = (): JSX.Element => {
  const graphicCourses = useFilteredData("graphicCourse");
  return (
    <CoursesTemplate
      title="دوره‌ های آموزش طراحی گرافیک"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-56"
    >
      {/*----  swiper Installation ----*/}
      <SwiperTemplate>
        {graphicCourses.map((course) => (
          <SwiperSlide key={course.id} style={{ direction: "rtl" }}>
            <ProductBox {...course} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </CoursesTemplate>
  );
};

export default GraphicDesignCourses;
