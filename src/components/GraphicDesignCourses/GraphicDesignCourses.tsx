import { SwiperSlide } from "swiper/react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";
import { CoursesType } from "../../types/coursesInterface";
import { useAppSelector } from "../../Redux/store/store";

const GraphicDesignCourses = (): JSX.Element => {
  const allCourses = useAppSelector((state) => state.courses.allCourses);
  const graphicCourses = useFilteredData(
    allCourses,
    "graphicCourse"
  ) as CoursesType[];

  return (
    <SectionTemplate
      title="دوره‌ های آموزش طراحی گرافیک"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-44 sm:mt-56"
    >
      {/*----  swiper Installation ----*/}
      <SwiperTemplate
        between={24}
        breakPoint={{
          1250: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          },
        }}
      >
        {graphicCourses?.map((course) => (
          <SwiperSlide key={course.id} style={{ direction: "rtl" }}>
            <ProductBox {...course} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default GraphicDesignCourses;
