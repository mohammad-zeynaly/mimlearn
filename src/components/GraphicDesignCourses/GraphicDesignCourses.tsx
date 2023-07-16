import { SwiperSlide } from "swiper/react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";
import { CoursesType } from "../../types/coursesInterface";

const GraphicDesignCourses = (): JSX.Element => {
  const graphicCourses: CoursesType[] = useFilteredData("graphicCourse");
  return (
    <SectionTemplate
      title="دوره‌ های آموزش طراحی گرافیک"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-44 sm:mt-56"
    >
      {/*----  swiper Installation ----*/}
      <SwiperTemplate>
        {graphicCourses.map((course) => (
          <SwiperSlide key={course.id} style={{ direction: "rtl" }}>
            <ProductBox {...course} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default GraphicDesignCourses;
