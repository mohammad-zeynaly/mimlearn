import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { CoursesType } from "../../types/coursesInterface";

const ProductBox = ({
  img,
  title,
  teacher,
  students,
  price,
}: CoursesType): JSX.Element => {
  return (
    <div className="rounded-xl bg-white mt-8 w-full mb-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,172,185,0.3)]">
      <div className="">
        <img
          className="overflow-hidden rounded-xl object-cover rounded-br-none rounded-bl-none"
          src={img}
        />
      </div>
      <div className=" border border-[#e5e5e5] rounded-xl rounded-tr-none rounded-tl-none">
        <Link
          to={`/courseDetails/${title}`}
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
            <span className="pr-1 text-sm">{teacher}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 pt-4 border-t border-[#e5e5e5] text-[#6c757d] p-3">
          <div className="flex items-center">
            <FaUsers className="w-6 h-6" />
            <span className="pr-2">{students}</span>
          </div>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
