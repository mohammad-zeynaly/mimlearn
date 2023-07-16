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
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-4 py-8">
      <div className="lg:translate-x-20 w-full h-[275px] sm:h-[300px] lg:w-[300px] xl:w-[350px] overflow-hidden rounded-2xl lg:shadow-none ">
        <img
          className="object-cover max-w-full sm:h-auto w-full overflow-hidden rounded-2xl radio-slider-img"
          src={img}
        />
      </div>

      <div className="flex flex-col text-center lg:text-right mt-10 lg:mt-0 pl-4">
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
        <p className="text-[#555] mt-4 text-sm mb-4 sm:mb-8 lg:mb-0">
          {caption}
        </p>
        <MusicPlayer audioSrc={audio} />
      </div>
    </div>
  );
};

export default RadioSliderItem;
