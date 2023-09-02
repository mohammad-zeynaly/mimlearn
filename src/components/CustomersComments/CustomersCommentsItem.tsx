import { GoPlay } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";
import { isShowVideoPlayerHandler } from "../../Redux/reducers/globalStates";
import VideoPlayerModal from "../VideoPlayerModal/VideoPlayerModal";
import { CommentsType } from "../../types/coursesInterface";

const CustomersCommentsItem = ({ caption, author, role }: CommentsType) => {
  const dispatch = useAppDispatch();

  const isShowVideoPlayer = useAppSelector(
    (state) => state.globalStates.isShowVideoPlayer
  );
  const videoPlayer = () => {
    dispatch(isShowVideoPlayerHandler(true));
  };

  return (
    <div className="mt-5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] text-center p-4 bg-white text-[#464749] m-2">
      <p className="border-b border-[#cacaca] border-dashed pb-3 text-[13px] leading-8">
        {caption}
      </p>
      <div className="flex items-center justify-between py-4 mt-2">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="./assets/images/user-img.webp"
            alt="عکس کاربر"
          />
          <span className="flex flex-col pr-4">
            <h5> {author}</h5>
            <h6 className="mt-1 text-sm">{role}</h6>
          </span>
        </div>
        <div className="flex flex-col items-center">
          {isShowVideoPlayer && <VideoPlayerModal />}
          <span className="cursor-pointer" onClick={videoPlayer}>
            <GoPlay className="w-8 h-8 text-primary" />
          </span>
          <span className="text-sm block mt-2">مشاهده ویدئو</span>
        </div>
      </div>
    </div>
  );
};

export default CustomersCommentsItem;
