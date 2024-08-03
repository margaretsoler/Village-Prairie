import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import redCar from "./redcar.png";
import greenCar from "./greencar.png";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      setIsNight(currentHour < 6 || currentHour >= 20);
    };

    // Vérifiez l'heure initiale au chargement du composant
    checkTime();

    // Puis vérifiez toutes les minutes
    const intervalId = setInterval(checkTime, 60 * 1000); // 60 * 1000 ms = 1 minute

    // N'oubliez pas de nettoyer l'intervalle lorsque le composant se démonte
    return () => clearInterval(intervalId);
  }, []);

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
  }, [videoRef, player]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [player]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
        setShowPlaceholder(false);
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setShowPlaceholder(true);
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
      {showPlaceholder ? (
        <>
          <div className={`paused-video-placeholder ${isNight ? "night" : ""}`} />
          <h1 className="title">Space</h1>
          <img src={redCar} alt="Tomate" className="tomate-image" />
        </>
      ) : (
        <img src={greenCar} alt="Tomate" className="tomate-image" />
      )}
      <div className={`video-container ${showPlaceholder ? "hidden" : ""}`}>
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
      <div className={`text-container ${isPlaying ? "paused" : ""}`}>
        <p className="text">[ SPACE TO PLAY AND PAUSE ]</p>
      </div>
    </>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;
