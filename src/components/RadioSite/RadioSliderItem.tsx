import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { radioItemsType } from "../../types/coursesInterface";

const RadioSliderItem = ({
  time,
  img,
  title,
  caption,
  audio,
}: radioItemsType): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-44 lg:mt-10 max-w-[775px] mx-auto w-full bg-white rounded-2xl shadow-[0px_14px_80px_rgba(34,35,58,0.2)]  p-4 py-8">
      <div className="-translate-y-1/2 lg:translate-y-0 lg:translate-x-20 w-[90%] h-[300px] lg:w-[300px] xl:w-[350px] shadow-[4px_13px_80px_1px_rgba(43,65,97,0.2)] overflow-hidden rounded-2xl">
        <img
          className="object-cover max-w-full h-auto w-full lg:h-full overflow-hidden "
          src={img}
        />
      </div>
      <div className="flex justify-center -mt-24 mb-4 lg:hidden">
        <span>11</span>
        <span>22</span>
        <span>33</span>
      </div>
      <div className="flex flex-col text-center lg:text-right lg:mt-0">
        <h6 className="text-third flex justify-center items-end text-xs lg:justify-normal">
          <BiTimeFive className="ml-3 w-5 h-5" />
          <span> {time} </span>
        </h6>
        <Link
          to="radio/1"
          className="mt-2 font-vazirBold text-lg text-[#464749] hover:text-primary"
        >
          {title}
        </Link>
        <p className="text-[#555] mt-4 text-sm">{caption}</p>
        <MusicPlayer audioSrc={audio} />
      </div>
      <div className="hidden lg:flex-col lg:flex lg:pr-4">
        <span>111</span>
        <span>222</span>
        <span>333</span>
        <span>444</span>
      </div>
    </div>
  );
};

export default RadioSliderItem;
