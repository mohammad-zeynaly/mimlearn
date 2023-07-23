import { FaDownload, FaPlayCircle, FaYoutube } from "react-icons/fa";

interface FreeSessionsBoxType {
  title: string;
  caption: string;
}

const FreeSessionsBox = ({
  title,
  caption,
}: FreeSessionsBoxType): JSX.Element => {
  return (
    <div className="p-2 sm:p-4 group hover:bg-[#f8f9fa] transition-all duration-200 flex justify-between items-center">
      <div className="leading-6 flex items-center">
        <FaYoutube className="w-8 sm:w-6 h-8 sm:h-6 text-[#adb5bd] group-hover:text-primary transition-all duration-200" />
        <p className="mr-4 ">
          <div className="flex items-center">
            <h6 className="mb-1 sm:text-base"> {title}</h6>
            <small className="bg-[#4ece3d] text-white px-2 rounded-md mr-2 hidden sm:block">
              رایگان
            </small>
          </div>
          <span className="text-[#adb5bd] hidden sm:block">{caption}</span>
        </p>
      </div>
      <div className="flex items-center">
        <a
          href="https://i-wordpress.ir/demo/studiare/wp-content/uploads/2018/11/motion-graphic-6.mp4"
          className="bg-[#ff6060] text-white rounded-full sm:rounded-3xl flex items-center p-2 sm:py-1 sm:px-2"
        >
          <FaPlayCircle className="sm:ml-2" />
          <span className="hidden sm:block">پیش نمایش</span>
        </a>
        <a
          href=""
          className="p-2 sm:p-3 mr-2 rounded-full bg-[#4ece3d] text-white"
        >
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default FreeSessionsBox;
