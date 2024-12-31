import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "./component.css";
import { useNavigate } from 'react-router';

const Video = ({data,baseUrl}) => {
  const navigate = useNavigate();  
  const handleClick = () => {
    navigate(`/watch/${data.videoId}`)
  }
  return (
    <div className='shadow-lg cursor-pointer flex flex-col items-center gap-2 p-1' onClick={handleClick}>
       <div className="thumbnail rounded-xl overflow-hidden">
          <img src={`${baseUrl}${data.thumbnailUrl}.png`}/>
       
          
       </div>
       <div className="details flex w-[100%] gap-5">
         <div className="channel-icon px-1">
           <FontAwesomeIcon icon={faUser} className='bg-slate-200 p-3 rounded-full'/>
         </div>
         <div className="video-details ">
            <h3>{data.title}</h3>
            <h2>{data.channelName}</h2>
            <h2>
              <span>{data.view} views • </span>
              <span>5 days ago</span>
            </h2>
         </div>
       </div>
    </div>
  )
}

export default Video
 