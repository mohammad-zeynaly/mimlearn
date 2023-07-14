import { BsPlay, BsVolumeUp } from "react-icons/bs";

const MusicPlayer = ({
  audioSrc,
}: {
  audioSrc: string | undefined;
}): JSX.Element => {
  return (
    <div className="flex flex-row-reverse items-center justify-center text-third mt-8">
      <audio src={audioSrc} />
      <button className="cursor-pointer">
        <BsPlay className="w-6 h-6" />
      </button>
      <span id="current-time" className="text-[#7d7d7d] text-xs pl-2">
        1:49
      </span>
      <div className="max-w-[10rem] lg:max-w-[15rem] w-full h-1 bg-[rgb(195,195,195)] rounded-xl mx-2 sm:mx-3"></div>
      <span id="duration" className="text-[#7d7d7d] pr-3 text-xs">
        3:49
      </span>
      <button className="cursor-pointer">
        <BsVolumeUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MusicPlayer;
