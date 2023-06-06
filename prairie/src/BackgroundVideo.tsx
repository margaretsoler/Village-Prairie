
import videoSource from '../src/zoom-into-steel.mp4';
import './BackgroundVideo.css';



const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      
      </video>
    </div>
  );
};

export default BackgroundVideo;

