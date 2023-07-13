import { SwiperSlide } from "swiper/react";
import CoursesTemplate from "../CoursesTemplate/CoursesTemplate";
import SwiperTemplate from "../SwiperTemplate/SwiperTemplate";
import ProductBox from "../ProductBox/ProductBox";
import useFilteredData from "../../hooks/useFilteredData";

const ProgrammingCourses = (): JSX.Element => {
  const programmerCourse = useFilteredData("programmingCourses");

  return (
    <CoursesTemplate
      title="دوره‌ های آموزشی برنامه نویسی"
      caption="اینجا شروع آینده موفق شغلی شماست!"
      classNameParent="mt-16"
    >
      <SwiperTemplate>
        {programmerCourse.map((courses) => (
          <SwiperSlide>
            <ProductBox {...courses} />
          </SwiperSlide>
        ))}
      </SwiperTemplate>
    </CoursesTemplate>
  );
};

export default ProgrammingCourses;
