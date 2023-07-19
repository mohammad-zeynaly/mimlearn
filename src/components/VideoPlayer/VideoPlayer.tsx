import { Player, ControlBar, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import { CoursesType } from "../../types/coursesInterface";

const VideoPlayer = ({ img }: CoursesType): JSX.Element => {
  console.log("course name=> ", img);
  return (
    <>
      <Player poster={`.${img}`}>
        <source src="../assets/videos/motion-graphic-6.mp4" />
        <ControlBar autoHide={false} />
        <BigPlayButton position="center" />
      </Player>
    </>
  );
};

export default VideoPlayer;
