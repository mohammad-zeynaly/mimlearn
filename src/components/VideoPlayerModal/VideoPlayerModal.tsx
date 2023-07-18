import { createPortal } from "react-dom";

const VideoPlayerModal = (): JSX.Element => {
  return createPortal(
    <div className="rounded-lg fixed top-[40%] left-0 right-0 mx-auto z-50 max-w-xs w-[96%] sm:w-full overflow-hidden">
      <video controls={true} autoPlay>
        <source src="./assets/videos/header-bg-video.mp4" />
      </video>
    </div>,
    document.getElementById("modals") as HTMLDivElement
  );
};

export default VideoPlayerModal;
