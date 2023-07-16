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
      <SwiperTemplate>
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
