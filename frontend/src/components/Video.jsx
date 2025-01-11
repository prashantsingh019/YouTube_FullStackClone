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
    <div className='cursor-pointer w-25%' onClick={handleClick}>
       <div className="thumbnail rounded-xl overflow-hidden">
          <img src={`${baseUrl}${data.thumbnailUrl}.png`} className='w-[100%]'/>
       
          
       </div>
       <div className="details flex items-center gap-1">
         <div className="channel-icon px-1">
           <FontAwesomeIcon icon={faUser} className=' p-3 rounded-full'/>
         </div>
         <div className="video-details flex-wrap mt-2">
            <h3>{data.title}</h3>
            <h2>{data.channelName}</h2>
            <h2>
              <span>{data.view > 1000000 ? `${(data.view / 1000000).toFixed(1)}M` : `${(data.view / 1000).toFixed(0)}K` }  views • </span>
              <span>5 days ago</span>
            </h2>
         </div>
       </div>
    </div>
  )
}

export default Video
 