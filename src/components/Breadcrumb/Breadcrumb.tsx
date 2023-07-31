import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

interface BreadcrumbType {
  title?: string;
  previousPage?: string;
  previousPageLink?: string;
  currentPage?: string;
}

const Breadcrumb = ({
  title,
  previousPage,
  previousPageLink,
  currentPage,
}: BreadcrumbType): JSX.Element => {
  const { courseName } = useParams();

  return (
    <div className="bg-[#353338] mt-28 text-white ">
      <div className="container py-8">
        <h2 className="text-2xl"> {title ? title : courseName} </h2>
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
          {previousPage && (
            <li className="flex items-center mr-3">
              <Link
                to={previousPageLink!}
                className="transition-all duration-150 hover:text-primary ml-1"
              >
                {previousPage}
              </Link>
              <FaAngleLeft />
            </li>
          )}
          {!currentPage && (
            <li className="flex items-center mr-3">
              <Link
                to="/courses"
                className="transition-all duration-150 hover:text-primary ml-1"
              >
                دوره ها
              </Link>
              <FaAngleLeft />
            </li>
          )}
          <li className="flex items-center mr-2">
            {currentPage ? currentPage : courseName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
