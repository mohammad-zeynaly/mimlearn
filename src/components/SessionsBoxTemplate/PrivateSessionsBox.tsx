import { FaLock, FaYoutube } from "react-icons/fa";

interface PrivateSessionsBoxType {
  title: string;
  caption: string;
}

const PrivateSessionsBox = ({
  title,
  caption,
}: PrivateSessionsBoxType): JSX.Element => {
  return (
    <div className="p-2 sm:p-4 group hover:bg-[#f8f9fa] transition-all duration-200 flex justify-between items-center">
      <div className="leading-6 flex items-center">
        <FaYoutube className="w-8 sm:w-6 h-8 sm:h-6 text-[#adb5bd] group-hover:text-primary transition-all duration-200" />
        <p className="mr-4 ">
          <div className="flex items-center">
            <h6 className="mb-1 sm:text-base"> {title}</h6>
          </div>
          <span className="text-[#adb5bd] hidden sm:block">{caption}</span>
        </p>
      </div>
      <div className="flex items-center">
        <FaLock className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
        <span className="hidden sm:block">خصوصی</span>
      </div>
    </div>
  );
};

export default PrivateSessionsBox;
