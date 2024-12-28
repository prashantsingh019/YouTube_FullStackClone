import React, { useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Sidebar from './components/Sidebar'
import UserSidebar from './components/userSidebar'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = () => {
  const [isSidebarOpen,setSidebar] = useState(true);
  const [isRightSidebarOpen,setRightSidebar] = useState(false);
  const sidebar = () => {
    setSidebar(!isSidebarOpen);
    
  }
  const rightsidebar = () => {
    setRightSidebar(!isRightSidebarOpen);
  }
  
  return (
    <Provider store={store}>
    <div className='overflow-x-hidden'> 
       <Navbar sidebar={sidebar} rightSidebar={rightsidebar}/>
       <div className="app-center flex">
         <Sidebar visiblity={isSidebarOpen}/>
         <Outlet/>
         <UserSidebar visiblity={isRightSidebarOpen} fn={setRightSidebar}/>
       </div>    
    </div>
    </Provider>
  )
}

export default App
 