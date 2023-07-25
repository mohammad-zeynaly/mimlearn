import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CoursesTopbar from "../../components/CoursesTopbar/CoursesTopbar";
import FilterByPrice from "../../components/FilterByPrice/FilterByPrice";

const Courses = (): JSX.Element => {
  const [displayMode, setDisplayMode] = useState<string>("row");

  return (
    <>
      <Breadcrumb title="فروشگاه" currentPage="فروشگاه" />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="w-full lg:w-1/4 hidden sm:block">
            <FilterByPrice />
          </div>
          <div className="w-full lg:w-3/4">
            <CoursesTopbar
              displayMode={displayMode}
              setDisplayMode={setDisplayMode}
            />
          </div>
        </div>
        <div className="sm:hidden">
          <FilterByPrice />
        </div>
      </div>
    </>
  );
};
export default Courses;
