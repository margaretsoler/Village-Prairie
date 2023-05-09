import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoFeed from './VideoFeed'
import ReactPlayer from 'react-player'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>village prairie</h1>
      <div className="app">
        live
        <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8"  />
      </div>
      <div className="card">
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ReactPlayer url={'src/assets/IMG_9910.mp4'} controls={true} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
