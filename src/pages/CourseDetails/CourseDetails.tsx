import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseVideoPlayer from "../../components/CourseVideoPlayer/CourseVideoPlayer";
import CourseDetailsSidebar from "../../components/CourseDetailsSidebar/CourseDetailsSidebar";

const CourseDetails = (): JSX.Element => {
  return (
    <>
      <Breadcrumb />

      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[69%]">
            <CourseVideoPlayer />
          </div>
          <aside className="w-[29%] mr-5">
            <CourseDetailsSidebar />
          </aside>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
