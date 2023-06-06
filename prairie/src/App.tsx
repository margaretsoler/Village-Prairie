import './App.css'
import HelloWorld from './Carotte';
import VideoFeed from './VideoFeed'
import { Box } from "@mui/system";



function App() {
  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}>
      <HelloWorld></HelloWorld>
      <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8"  />
      <div>
    
  </div>
      
    </Box>
  )
}





export default App
