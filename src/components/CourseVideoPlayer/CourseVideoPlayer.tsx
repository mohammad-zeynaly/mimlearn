import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";
import allData from "../../data/allData";
import { CoursesType } from "../../types/coursesInterface";

const CourseVideoPlayer = (): JSX.Element => {
  const { courseName } = useParams();

  const mainCourse = allData.find(
    (course) => course?.title?.trim() === courseName
  ) as CoursesType;

  return (
    <section className="">
      <VideoPlayer {...mainCourse} />
      ویدیو پلیر
    </section>
  );
};

export default CourseVideoPlayer;
