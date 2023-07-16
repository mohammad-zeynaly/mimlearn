import { useState, useRef } from "react";
import { BsPlay, BsVolumeUp, BsPause, BsVolumeMute } from "react-icons/bs";

const MusicPlayer = ({
  audioSrc,
}: {
  audioSrc: string | undefined;
}): JSX.Element => {
  const audioSrcRef = useRef<HTMLAudioElement>(null);
  const [isPlayAudio, setIsPlayAudio] = useState<boolean>(false);
  const [itHasVoice, setItHasVoice] = useState<boolean>(true);
  const [audioPercent, setAudioPercent] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<string>("00:00");
  const [audioCurrentTime, setAudioCurrentTime] = useState<string>("00:00");

  const audioPlayHandler = () => {
    (audioSrcRef.current as HTMLAudioElement).play();
    setIsPlayAudio(true);
    console.log(audioSrcRef.current?.duration);
  };

  const audioPauseHandler = () => {
    (audioSrcRef.current as HTMLAudioElement).pause();
    setIsPlayAudio(false);
  };

  const audioSoundHandler = () => {
    if (itHasVoice) {
      (audioSrcRef.current as HTMLAudioElement).muted = true;
    } else {
      (audioSrcRef.current as HTMLAudioElement).muted = false;
    }
  };

  const audioTimeProgress = (event: React.SyntheticEvent) => {
    const duration = (event.target as HTMLAudioElement).duration;
    const currentTime = (event.target as HTMLAudioElement).currentTime;

    const audioPercent = (currentTime / duration) * 100;
    setAudioPercent(Math.floor(audioPercent));

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds: string | number = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }

    setAudioDuration(durationMinutes + ":" + durationSeconds);

    let currentTimeMinutes = Math.floor(currentTime / 60);
    let currentTimeSeconds: string | number = Math.floor(currentTime % 60);

    if (currentTimeSeconds < 10) {
      currentTimeSeconds = "0" + currentTimeSeconds;
    }
    setAudioCurrentTime(currentTimeMinutes + ":" + currentTimeSeconds);
  };

  return (
    <div className="w-full h-10 flex flex-row-reverse items-center justify-center text-third  absolute left-0 right-0 -bottom-8 pb-5 sm:pb-16 lg:pb-0 lg:right-[14%] lg:bottom-[17%]">
      <audio
        src={audioSrc}
        ref={audioSrcRef}
        onTimeUpdate={audioTimeProgress}
      />
      {isPlayAudio ? (
        <button className="cursor-pointer" onClick={audioPauseHandler}>
          <BsPause className="w-6 h-6" />
        </button>
      ) : (
        <button className="cursor-pointer" onClick={audioPlayHandler}>
          <BsPlay className="w-6 h-6" />
        </button>
      )}
      <span id="current-time" className="text-[#7d7d7d] text-xs pl-2">
        {audioCurrentTime}
      </span>
      <div className="flex justify-end max-w-[10rem] lg:max-w-[15rem] w-full h-1 bg-[rgb(195,195,195)] rounded-xl mx-2 sm:mx-3">
        <div
          style={{ width: audioPercent + "%" }}
          className="h-1 bg-primary rounded-xl"
        ></div>
      </div>
      <span id="duration" className="text-[#7d7d7d] pr-3 text-xs">
        {audioDuration}
      </span>
      {itHasVoice ? (
        <button
          className="cursor-pointer"
          onClick={() => {
            setItHasVoice(false);
            audioSoundHandler();
          }}
        >
          <BsVolumeUp className="w-6 h-6" />
        </button>
      ) : (
        <button
          className="cursor-pointer"
          onClick={() => {
            setItHasVoice(true);
            audioSoundHandler();
          }}
        >
          <BsVolumeMute className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
