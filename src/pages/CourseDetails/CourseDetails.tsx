import { useParams } from "react-router-dom";
import { useStickyBox } from "react-sticky-box";
import { useAppSelector } from "../../Redux/store/store";
import { CoursesType } from "../../types/coursesInterface";
import allData from "../../data/allData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseVideoPlayer from "../../components/CourseVideoPlayer/CourseVideoPlayer";
import CourseDetailsSidebar from "../../components/CourseDetailsSidebar/CourseDetailsSidebar";
import CourseDetailsContent from "../../components/CourseDetailsContent/CourseDetailsContent";
import CourseComments from "../../components/CourseComments/CourseComments";

const CourseDetails = (): JSX.Element => {
  const { courseName } = useParams();

  const mainCourse = allData.find(
    (course) => course?.title?.trim() === courseName
  ) as CoursesType;

  const isFullWidthContent = useAppSelector(
    (state) => state.globalStates.isFullWidthContent
  );

  const courseDetailSidebarRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
  });

  return (
    <>
      <Breadcrumb />
      <div className="container pt-12 ">
        <div className="flex items-start justify-between">
          <div
            className={`${isFullWidthContent ? "w-full" : "w-full lg:w-[69%]"}`}
          >
            <CourseVideoPlayer mainCourse={mainCourse} />
            <CourseDetailsContent />
          </div>

          <aside
            ref={courseDetailSidebarRef}
            className={`${
              isFullWidthContent
                ? "hidden"
                : "hidden lg:block lg:w-[29%] mr-5 h-screen lg:mt-32 xl:mt-10 2xl:mt-0"
            } `}
          >
            <CourseDetailsSidebar mainCourse={mainCourse} />
          </aside>
        </div>
        <CourseComments />
      </div>
    </>
  );
};

export default CourseDetails;
