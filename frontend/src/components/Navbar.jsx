import React, { useState } from "react";
import YouTube from "../assets/yt-icon.png";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faMicrophone,
  faPlus,
  faBell,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import { setAppear } from "../redux/componentSlice";
import { giveData } from "../redux/dataSlice";
const Navbar = ({sidebar}) => {
  const status = useSelector((state) => state.userLoginStatus.isSignedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const handleClick = () => {
    navigate('/')
  }
  const handleSignIn = () => {
     navigate('/login')
  }
  const handleChannelCreate = () => {
    navigate('/create-channel')
  }
   const [search,setSearch] = useState('')
    const select = useSelector((state) => state.data.videos)
    const filteredVideos = select.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    const searchClick = () => {
       dispatch(giveData(filteredVideos))
       setSearch('')
    }
   
  return (
    <nav className="h-14 flex items-center justify-between">
      {/* logo and hamburger menu */}
         <section className="h-14 logo-section">
         <FontAwesomeIcon icon={faBars} onClick={sidebar} className="cursor-pointer"/>
         <div className="logo h-[100%] flex items-center gap-1 font-serif font-boldest" onClick={handleClick}>
         <img src={YouTube} alt="_YouTube Icon" id="icon-main" />
         YouTube <sup className="text-sm">IN</sup>
        </div>
      </section>
      <section className="h-14 flex gap-1">

      <div className="search-sect">
       <input type="text" name="" id="searchbar" placeholder="Search" value={search}  onChange={(e) => setSearch(e.target.value)}/>
       <div className="icon-search bg-violet-100 w-[10%] flex justify-center items-center active:bg-red-300" onClick={searchClick}>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       </div>

       <div>
        <FontAwesomeIcon icon={faMicrophone} />
       </div>

      </section>
      <section className="h-14 flex gap-10 top-right-nav">
        {status?<button className="bg-gray-200 p-2 rounded-xl flex items-center btn-create" onClick={handleChannelCreate}>
          <FontAwesomeIcon icon={faPlus} />
          Create
        </button>:''}
        <div className="flex items-center gap-5 user-section">
        {status? <div className="user rounded-full px-3 py-2">
        <FontAwesomeIcon icon={faBell}/>
         </div>:''}
       
         {
          status? <div className="user rounded-full px-3 py-2 bg-gray-200 cursor-pointer" onClick={()=>dispatch(setAppear())}>
          <FontAwesomeIcon icon={faUser} /> 
          </div>: <button className="border text-blue-600 rounded-2xl" onClick={handleSignIn}> <FontAwesomeIcon icon={faUser} />  Sign In</button>
         }
        
        
        </div>
        </section>
    </nav>
  );
};

export default Navbar;
