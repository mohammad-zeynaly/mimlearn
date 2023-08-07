import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/store/store";
import { CoursesType } from "../../types/coursesInterface";
import allData from "../../data/allData";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseVideoPlayer from "../../components/CourseVideoPlayer/CourseVideoPlayer";
import CourseDetailsSidebar from "../../components/CourseDetailsSidebar/CourseDetailsSidebar";
import CourseDetailsContent from "../../components/CourseDetailsContent/CourseDetailsContent";
import CourseComments from "../../components/CourseComments/CourseComments";
import Button from "../../components/Button/Button";
import { addToCart } from "../../Redux/reducers/coursesStateSlice";

const CourseDetails = (): JSX.Element => {
  const { courseName } = useParams();

  const mainCourse = allData.find(
    (course) => course?.title?.trim() === courseName
  ) as CoursesType;

  const isFullWidthContent = useAppSelector(
    (state) => state.globalStates.isFullWidthContent
  );

  const getAllCourses = useAppSelector((state) => state.courses.basketProduct);

  const dispatch = useAppDispatch();

  const addProductToCart = (): void => {
    const itIsAProduct = getAllCourses?.some(
      (course) => course.title === mainCourse.title
    );

    console.log("isInProduct.=> ", itIsAProduct);

    if (!itIsAProduct) dispatch(addToCart(mainCourse));
  };

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
            className={`${
              isFullWidthContent
                ? "hidden"
                : "hidden lg:block lg:w-[29%] mr-5 sticky top-0 max-h-[700px] overflow-y-hidden"
            } `}
          >
            {/* h-screen lg:mt-32 xl:mt-10 2xl:mt-0*/}
            <CourseDetailsSidebar mainCourse={mainCourse} addProductToCart={addProductToCart} />
          </aside>
        </div>
        <CourseComments />
      </div>
      <Button
        className="w-full bg-[#1fbd50] text-white py-3 fixed bottom-0 z-30 lg:hidden"
        onClick={addProductToCart}
      >
        ثبت نام دوره
      </Button>
    </>
  );
};

export default CourseDetails;
