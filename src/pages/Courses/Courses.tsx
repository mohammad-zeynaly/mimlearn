import { useState } from "react";
import { useStickyBox } from "react-sticky-box";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CoursesTopbar from "../../components/CoursesTopbar/CoursesTopbar";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";
import AllCourses from "../../components/AllCourses/AllCourses";

const Courses = (): JSX.Element => {
  const [displayMode, setDisplayMode] = useState<string>("row");

  const coursesSidebarRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
  });

  return (
    <>
      <Breadcrumb title="فروشگاه" currentPage="فروشگاه" />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 ">
          <div
            className="w-full lg:w-1/4 hidden lg:block"
            ref={coursesSidebarRef}
          >
            <FilterByPrice />
            <div className="border border-fourth mt-5">
              <img
                className="w-full object-cover"
                src="./assets/images/banner.png"
                alt="محل تبلیغ"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <CoursesTopbar
              displayMode={displayMode}
              setDisplayMode={setDisplayMode}
            />
            <AllCourses displayMode={displayMode} />
          </div>
        </div>
        <div className="w-3/4"></div>
        <div className="lg:hidden">
          <FilterByPrice />
        </div>
      </div>
    </>
  );
};
export default Courses;
