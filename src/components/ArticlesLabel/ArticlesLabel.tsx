import { FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticlesLabel = (): JSX.Element => {
  return (
    <div className="bg-white mt-5 border border-fourth rounded-lg text-[#464749] p-4">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <span className="flex items-center text-sm">
          <FaTags className="ml-2" />
          برچسب ها:
        </span>
        <Link
          to="#"
          className="bg-[#e9ecef] py-1 px-2 text-sm rounded-md transition-all hover:text-primary"
        >
          کسب و کار
        </Link>
        <Link
          to="#"
          className="bg-[#e9ecef] py-1 px-2 text-sm rounded-md transition-all hover:text-primary"
        >
          توسعه دهنده
        </Link>
        <Link
          to="#"
          className="bg-[#e9ecef] py-1 px-2 text-sm rounded-md transition-all hover:text-primary"
        >
          وردپرس
        </Link>
        <Link
          to="#"
          className="bg-[#e9ecef] py-1 px-2 text-sm rounded-md transition-all hover:text-primary"
        >
          موفقیت
        </Link>
      </div>
    </div>
  );
};

export default ArticlesLabel;
