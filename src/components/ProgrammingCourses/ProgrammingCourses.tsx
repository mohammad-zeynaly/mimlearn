import { SwiperSlide } from "swiper/react";
import CoursesTemplate from "../CoursesTemplate/CoursesTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";
import { CoursesType } from "../../types/coursesInterface";

const ProgrammingCourses = (): JSX.Element => {
  const programmerCourse: CoursesType[] = useFilteredData("programmingCourses");

  return (
    <CoursesTemplate
      title="دوره‌ های آموزشی برنامه نویسی"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-16"
    >
      <SwiperTemplate>
        {programmerCourse.map((courses) => (
          <SwiperSlide key={courses.id}>
            <ProductBox {...courses} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </CoursesTemplate>
  );
};

export default ProgrammingCourses;
