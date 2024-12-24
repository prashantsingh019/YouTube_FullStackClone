import React from "react";
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
const Navbar = () => {
  return (
    <nav className="h-14 flex items-center justify-between">
      {/* logo and hamburger menu */}
         <section className="h-14">
         <FontAwesomeIcon icon={faBars} />
         <div className="logo h-[100%] flex items-center gap-1">
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
      <section className="h-14">
        <button className="bg-gray-200 p-2 rounded-xl flex gap-2 items-center">
          <FontAwesomeIcon icon={faPlus} />
          Create
        </button>
        <div className="flex items-center gap-4">
         <FontAwesomeIcon icon={faBell}/>
         <div className="user rounded-full px-3 py-2 bg-gray-200">
         <FontAwesomeIcon icon={faUser} />
         </div>
        </div>
        </section>
    </nav>
  );
};

export default Navbar;
{/*
 

 
 
 
  
  
  
  
  
  
  */}