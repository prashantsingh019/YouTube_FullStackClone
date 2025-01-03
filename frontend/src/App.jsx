import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Sidebar from './components/Sidebar'
import UserSidebar from './components/UserSidebar.jsx'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux';
import { signIn } from './redux/authSlice.js'

const App = () => {
  const [isSidebarOpen,setSidebar] = useState(true);
  
  const dispatch = useDispatch();
  const sidebar = () => {
    setSidebar(!isSidebarOpen);
  }
  
 useEffect(()=>{
   const currentUser = localStorage.getItem("user");
   const token = localStorage.getItem("token");
   if(currentUser && token){
     let user = JSON.parse(currentUser);
     dispatch(signIn(user["username"]))
   }
  },[])
  return (
   
    <div className='overflow-x-hidden'> 
       <Navbar sidebar={sidebar}/>
       <div className="app-center flex">
         <Sidebar visiblity={isSidebarOpen}/>
         <Outlet/>
         <UserSidebar/>
       
       </div>    
    </div>
  
  )
}

export default App
 