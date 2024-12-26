import React from 'react'
import threeDots from "../assets/three-dots-vertical.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import like from "../assets/like.svg"
import dislike from "../assets/dislike.svg"
import {
    faUser
  } from "@fortawesome/free-solid-svg-icons";
const Comment = () => {
  return (
    <div className='flex gap-3'>
      <div className="left "><FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-3 bg-gray-400'/></div>
      <div className="mid flex-[8]">
        <div className="channel-handle">
            <span>@minnah13</span>&nbsp;
            <span>5 days ago</span>
        </div>
        <div className="actual-comment">
            Can you do a video on what helped you get into Google?
        </div>
        <div>
               <button><img src={like} className='inline-block w-7 border-r-gray-400 border-solid'/></button>&nbsp;
               <button><img src={dislike} className='inline-block w-7'/></button>
        </div>
        </div>
      <div className="end">
        <img src={threeDots} className='inline-block w-7'/>
        </div>
    </div>
  )
}

export default Comment
