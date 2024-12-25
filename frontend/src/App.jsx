import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'
const App = () => {
  return (
    <div>
       <Navbar/>
       <div className="app-center flex">
         <Sidebar/>
         <Gallery/>
       </div>    
    </div>
  )
}

export default App
 