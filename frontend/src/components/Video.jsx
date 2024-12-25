import React from 'react'
import thumbnail from "../assets/YT-DummyVideo/Video1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "./component.css";

const Video = ({data}) => {
  
  return (
    <div className='w-96 shadow-md'>
       <div className="thumbnail">
          <img src={`https://raw.githubusercontent.com/prashantsingh019/YouTube_FullStackClone/refs/heads/main/src/assets/YT-DummyVideo/Video1.png`}/>
          {console.log(data)}
       </div>
       <div className="details flex w-[100%] gap-5">
         <div className="channel-icon px-1">
           <FontAwesomeIcon icon={faUser} className='bg-slate-200 p-3 rounded-full'/>
         </div>
         <div className="video-details ">
            <h3>MERN Stack vs Java Stack which one to choose in 2025</h3>
            <h2>The Techie Town</h2>
            <h2>
              <span>7.9k views • </span>
              <span>5 days ago</span>
            </h2>
         </div>
       </div>
    </div>
  )
}

export default Video
 