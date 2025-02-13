import React from 'react'
import "./component.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,faThumbsUp,faClockRotateLeft,faClock,faCirclePlay,faLayerGroup,faGreaterThan,faClapperboard,faUser
  } from "@fortawesome/free-solid-svg-icons";
import shorts from '../assets/youtube-shorts-logo-15251.svg'
import subscription from "../assets/youtube-subscription.svg"
import playlist from "../assets/playlist_play_icon.svg"
import like from "../assets/like.svg"
import watchlater from "../assets/watch-later.svg"
import { useNavigate } from 'react-router';
const Sidebar = ({visiblity}) => {
    const navigate = useNavigate();  
    const handleClick = () => {
      navigate('/')
    }
  return (
    <div className={`sidebar ${visiblity?'open':''}`}>
       <div className="top">
        <div className={`sidebar-option ${visiblity?'close':''}`} onClick={handleClick}><FontAwesomeIcon icon={faHouse} />
         <span className="text-hide">Home</span>
         </div>  
        <div className={`sidebar-option ${visiblity?'close':''}`} >
        <img src={shorts} className='inline-block w-5'/>    
        <span className="text-hide">Shorts</span>
        </div>
        <div className={`sidebar-option ${visiblity?'close':''}`} > <img src={subscription} className='inline-block w-5'/>
           <span className="text-hide">Subscriptions</span>
        </div>
       </div>
       <div className={`middle ${visiblity?'hide':''}`}>
        <div>You&nbsp;&nbsp;<FontAwesomeIcon icon={faGreaterThan} className='text-sm font-thin'/></div>
        <div>
            <div className={`sidebar-option ${visiblity?'close':''}`}><FontAwesomeIcon icon={faClockRotateLeft} /> History</div>
            <div className={`sidebar-option ${visiblity?'close':''}`}> <img src={playlist} className='inline-block w-5'/>  Playlist</div>
            <div className={`sidebar-option ${visiblity?'close':''}`}><FontAwesomeIcon icon={faCirclePlay} /> Your videos</div>
            <div className={`sidebar-option ${visiblity?'close':''}`}> <img src={watchlater} className='inline-block w-5'/>  Watch Later</div>
            <div className={`sidebar-option ${visiblity?'close':''}`}> <img src={like} className='inline-block w-5'/> Liked videos</div>
        </div>
       </div>
       <div className={`bottom ${visiblity?'hide':''}`}>
        <div>Subscriptions</div>
        <div>
            <div className={`sidebar-option ${visiblity?'close':''} `} > <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-2 bg-gray-200 icon-user"'/>Internshala</div>
            <div className={`sidebar-option ${visiblity?'close':''} `} > <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-2 bg-gray-200 icon-user"'/>freeCodeCamp</div>
            <div className={`sidebar-option ${visiblity?'close':''} `} > <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-2 bg-gray-200 icon-user"'/>ChaiWithCode</div>
        </div>
       </div>
    </div>
  )
}

export default Sidebar
 