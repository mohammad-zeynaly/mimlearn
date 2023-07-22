import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Breadcrumb = (): JSX.Element => {
  const { courseName } = useParams();

  return (
    <div className="bg-[#353338] mt-6 text-white ">
      <div className="container py-8">
        <h2 className="text-2xl"> {courseName} </h2>
        <ul className="flex items-center mt-4 text-sm">
          <li className="flex items-center">
            <Link
              to="/"
              className="transition-all duration-150 hover:text-primary ml-1"
            >
              خانه
            </Link>
            <FaAngleLeft />
          </li>
          <li className="flex items-center mr-3">
            <Link
              to="/allCourses"
              className="transition-all duration-150 hover:text-primary ml-1"
            >
              دوره ها
            </Link>
            <FaAngleLeft />
          </li>
          <li className="flex items-center mr-3">{courseName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
