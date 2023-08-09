import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import useNumberPersian from "../../hooks/useNumberPersian";
interface ProductBoxType {
  id: number;
  title?: string;
  img?: string;
  stars?: number;
  teacher?: string;
  students?: number;
  count?: number;
  price?: number;
  prerequisite?: string;
  caption?: string;
  time?: string;
  type: string;
  displayMode?: string;
}

const ProductBox = ({
  img,
  title,
  teacher,
  students,
  price,
  caption,
  displayMode,
}: ProductBoxType): JSX.Element => {
  return (
    <div
      className={`flex ${
        displayMode === "column"
          ? "flex-col sm:flex-row sm:border sm:border-fourth sm:py-2"
          : "flex-col border border-fourth"
      } rounded-xl bg-white mt-8 w-full mb-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,172,185,0.3)]`}
    >
      <div className="">
        <img
          className={`${
            displayMode === "column"
              ? "w-full sm:rounded-tl-none sm:rounded-br-xl sm:w-[450px] sm:h-full "
              : "w-full"
          } overflow-hidden rounded-xl object-cover rounded-br-none rounded-bl-none`}
          src={img}
        />
      </div>
      <div
        className={`${
          displayMode === "row" ? "sm:border sm:border-fourth" : ""
        }  rounded-xl rounded-tr-none rounded-tl-none w-full`}
      >
        <Link
          to={`/courseDetails/${title?.trim()}`}
          className="block hover:text-primary text-sm font-vazirMedium p-3 mt-1"
        >
          {title}
        </Link>

        <div className="flex justify-between items-center mt-3 text-[#6c757d] p-3">
          <div className="flex items-center">
            <img src="./assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="./assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="./assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="./assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="./assets/images/star-fill.svg" alt="آیکن ستاره" />
          </div>
          <div className="flex items-center">
            <FaChalkboardTeacher className="w-6 h-6" />
            <span className="pr-1 text-xs">{teacher}</span>
          </div>
        </div>
        {displayMode === "column" && (
          <p className="text-[#6c757d] text-[13px] my-2 px-4 hidden sm:block">
            {caption}
          </p>
        )}
        <div className="flex justify-between items-center mt-3 pt-4 border-t border-fourth text-[#6c757d] p-3">
          <div className="flex items-center">
            <FaUsers className="w-6 h-6" />
            <span className="pr-2">{useNumberPersian(students)}</span>
          </div>
          <h6>{useNumberPersian(price)}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
