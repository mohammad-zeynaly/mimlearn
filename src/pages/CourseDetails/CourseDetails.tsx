import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseVideoPlayer from "../../components/CourseVideoPlayer/CourseVideoPlayer";
import CourseDetailsSidebar from "../../components/CourseDetailsSidebar/CourseDetailsSidebar";
import { useParams } from "react-router-dom";

import allData from "../../data/allData";

import { CoursesType } from "../../types/coursesInterface";

const CourseDetails = (): JSX.Element => {
  const { courseName } = useParams();

  const mainCourse = allData.find(
    (course) => course?.title?.trim() === courseName
  ) as CoursesType;

  return (
    <>
      <Breadcrumb />
      <div className="container pt-12">
        <div className="flex items-center justify-between">
          <div className="w-[69%]">
            <CourseVideoPlayer mainCourse={mainCourse} />
          </div>
          <aside className="w-[29%] mr-5">
            <CourseDetailsSidebar mainCourse={mainCourse} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
