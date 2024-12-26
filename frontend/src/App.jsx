import React, { useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'
import VideoPage from './components/VideoPage'
const App = () => {
  const [isSidebarOpen,setSidebar] = useState(true);
  const sidebar = () => {
    setSidebar(!isSidebarOpen);
    console.log(isSidebarOpen)
  }
  
  return (
    <div>
       <Navbar sidebar={sidebar}/>
       <div className="app-center flex">
         <Sidebar visiblity={isSidebarOpen}/>
         {/* <Gallery/> */}
         <VideoPage/>
       </div>    
    </div>
  )
}

export default App
 