import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import tomateImg from "./tomate.png";
import tomateImg2 from "./tomate2.png";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(videoElement, {}, () => {
          console.log("player is ready");
        })
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const togglePlay = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {isPlaying ? (
        <img src={tomateImg2} alt="Tomate" className="tomate-image" />
      ) : (
        <img src={tomateImg} alt="Tomate" className="tomate-image" />
      )}
      <div className="video-container">
        <video
          onPlay={handlePlay}
          onPause={handlePause}
          className="video-js"
          ref={videoRef}
          controls={false}
        >
          <source src={src} type="application/x-mpegURL" />
        </video>
      </div>
      <div className="text-container">
        <p className="text">[ SPACE TO PLAY AND PAUSE ]</p>
      </div>
    </>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;
