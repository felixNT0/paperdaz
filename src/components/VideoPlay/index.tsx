import { useState } from "react";
import rectangleShape from "../../assets/rectangle.svg";
import videoPlayIcon from "../../assets/videoPlayIcon.svg";
import bg from "../../assets/image-body.svg";

function VideoPlay() {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };
  return (
    <div className="relative">
      <div className="absolute w-80 h-48 max-sm:w-72 max-xsm:w-full max-[350px]:w-60 max-[350px]:h-40 z-10 rounded-md">
        {!playing ? (
          <img
            src={bg}
            alt="bg"
            className="w-80 max-sm:w-72 max-xsm:w-full  max-[350px]:w-60 max-[350px]:h-40 h-48 rounded-lg"
          />
        ) : (
          <video
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            controls
            autoPlay={playing}
            className="w-80 h-48 max-[350px]:w-60 max-xsm:w-full rounded-lg"
          >
            <source src="./video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <>
          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex max-xsm:w-full max-xsm:bg-opacity-0 max-[200px]:w-60 items-center justify-center w-full h-full text-white bg-primary bg-opacity-30"
            >
              <img
                src={videoPlayIcon}
                alt="videoPlayIcon"
                className="w-20 max-[200px]:w-10 max-xsm:w-10 "
              />
            </button>
          )}
        </>
      </div>
      <img
        src={rectangleShape}
        alt="rectangleShape"
        className="pt-6 ml-5 max-sm:pt-9 max-xsm:full max-xsm:p-0 max-xsm:m-0 max-sm:ml-6 w-80 z-0"
      />
      <div className="absolute w-14  h-14 max-xsm:hidden  rounded-full bg-primary max-[200px]:hidden z-20 bottom-0 -left-6 " />
    </div>
  );
}

export default VideoPlay;
