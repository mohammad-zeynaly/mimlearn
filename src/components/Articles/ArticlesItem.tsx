import { Link } from "react-router-dom";
import { ArticlesItemType } from "../../types/coursesInterface";

const ArticlesItem = ({
  id,
  title,
  img,
  caption,
}: ArticlesItemType): JSX.Element => {
  return (
    <div className="mb-3 mt-5 border border-solid border-[#e5e5e5] rounded-lg overflow-hidden transition-all duration-200 group hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,172,185,0.3)]">
      <div className="">
        <img className="" src={img} alt="عکس مقاله" />
      </div>
      <div className="pt-5 px-4">
        <Link
          className="hover:text-primary text-[#464749] text-sm font-vazirMedium whitespace-nowrap text-ellipsis overflow-hidden"
          to="articles/1"
        >
          {title}
        </Link>
        <p className="text-xs text-[#898989] mt-5">{caption}</p>
      </div>
      <Link
        className="transition-all duration-200 bg-[#ececec] w-full block p-2 text-center mt-5 text-[#373a33] text-sm group-hover:bg-primary group-hover:text-white"
        to="articles/1"
      >
        بیشتر بخوانید
      </Link>
    </div>
  );
};

export default ArticlesItem;
