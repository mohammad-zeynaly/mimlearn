import { SwiperSlide } from "swiper/react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";
import { CoursesType } from "../../types/coursesInterface";

const ProgrammingCourses = (): JSX.Element => {
  const programmerCourse: CoursesType[] = useFilteredData("programmingCourses");

  return (
    <SectionTemplate
      title="دوره‌ های آموزشی برنامه نویسی"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-20"
    >
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
        {programmerCourse.map((courses) => (
          <SwiperSlide key={courses.id}>
            <ProductBox {...courses} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </SectionTemplate>
  );
};

export default ProgrammingCourses;
