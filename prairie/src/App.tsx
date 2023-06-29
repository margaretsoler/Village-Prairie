import DelayedTime from './DelayedTime';
import './App.css';
import HelloWorld from './Carotte';
import VideoFeed from './VideoFeed';
import { Box } from "@mui/system";

function App() {
  const currentTime = new Date();
  const isNight = currentTime.getHours() >= 18 || currentTime.getHours() < 6;

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", backgroundColor: isNight ? "black" : "cream" }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
      </Box>
    </Box>
  );
}

export default App;
