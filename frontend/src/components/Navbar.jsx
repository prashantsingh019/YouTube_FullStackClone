import React, { useState } from "react";
import YouTube from "../assets/yt-icon.png";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBars,
  faMagnifyingGlass,
  faMicrophone,
  faPlus,
  faBell,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';
import { useSelector,useDispatch } from "react-redux";
import { signIn,logout } from "../redux/authSlice.js";

const Navbar = ({sidebar,rightSidebar}) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.userLoginStatus.isSignedIn);
  console.log(status);
  
  const navigate = useNavigate();  
  const handleClick = () => {
    navigate('/')
  }

  const handleSignIn = () => {
    if(!status){
      dispatch(signIn())
      console.log('signin')
    }else{
      dispatch(logout());
    }
  }
  return (
    <nav className="h-14 flex items-center justify-between">
      {/* logo and hamburger menu */}
         <section className="h-14">
         <FontAwesomeIcon icon={faBars} onClick={sidebar} className="cursor-pointer"/>
         <div className="logo h-[100%] flex items-center gap-1 font-serif font-boldest" onClick={handleClick}>
         <img src={YouTube} alt="_YouTube Icon" id="icon-main" />
         YouTube <sup className="text-sm">IN</sup>
        </div>
      </section>
      <section className="h-14">

      <div className="search-sect">
       <input type="text" name="" id="searchbar" placeholder="Search"/>
       <div className="icon-search bg-violet-100 w-[10%] flex justify-center items-center">
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       </div>

       <div>
        <FontAwesomeIcon icon={faMicrophone} />
       </div>

      </section>
      <section className="h-14 flex gap-10">
        {status?<button className="bg-gray-200 p-2 rounded-xl flex gap-2 items-center">
          <FontAwesomeIcon icon={faPlus} />
          Create
        </button>:''}
        <div className="flex items-center gap-5">
        {status? <div className="user rounded-full px-3 py-2">
        <FontAwesomeIcon icon={faBell}/>
         </div>:''}
       
         {
          status? <div className="user rounded-full px-3 py-2 bg-gray-200 cursor-pointer" onClick={rightSidebar}>
          <FontAwesomeIcon icon={faUser} /> 
          </div>: <button className="border text-blue-600 rounded-2xl" onClick={handleSignIn}> <FontAwesomeIcon icon={faUser} />  Sign In</button>
         }
        
        
        </div>
        </section>
    </nav>
  );
};

export default Navbar;
{/*
 

 
 
 
  
  
  
  
  
  
  */}