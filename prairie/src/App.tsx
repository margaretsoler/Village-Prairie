import './App.css'
import HelloWorld from './Carotte';
import VideoFeed from './VideoFeed'
import { Box } from "@mui/system";
import DelayedTime from './DelayedTime';
import VerticalStripe from './VerticalStripe';




function App() {
  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", margin: 0,}}>
      <HelloWorld></HelloWorld>
      <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8"  />
      <DelayedTime />
      <VerticalStripe imageUrl="src/SteelMargin.png" />
      <div>
    
  </div>
      
    </Box>
  )
}





export default App
