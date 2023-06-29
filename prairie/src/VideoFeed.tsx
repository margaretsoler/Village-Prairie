import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import tomateImg from "./tomate.png";
import tomateImg2 from "./tomate2.png";

const VideoFeed: React.FC<VideoFeedProps> = ({ src }) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();
  const [isPlaying, setIsPlaying] = useState(false); // Ajout du state pour vérifier si la vidéo est en cours de lecture

  useEffect(() => {
    // make sure Video.js player is only initialized once
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

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-container">
      {isPlaying ? (
        <img src={tomateImg2} alt="Tomate" className="tomate-image" />
      ) : (
        <img src={tomateImg} alt="Tomate" className="tomate-image" />
      )}
      <video onPlay={handlePlay} onPause={handlePause} className="video-js" ref={videoRef} controls>
        <source src={src} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

interface VideoFeedProps {
  src: string;
}

export default VideoFeed;


