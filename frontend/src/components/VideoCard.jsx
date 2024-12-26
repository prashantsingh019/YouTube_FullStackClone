import React from 'react'
import threeDots from "../assets/three-dots-vertical.svg"
const VideoCard = () => {
  return (
    <div className='flex items-center'>
       <div className="start">
          <img src={`https://raw.githubusercontent.com/prashantsingh019/YouTube_FullStackClone/refs/heads/main/frontend/src/assets/YT-DummyVideo/Video1.png`} className='w-40 h-30'/>
       </div> 
       <div className="mid w-[80%] p-1">
           <div className="title"> Lorem ipsum dolor, sit amet consectetur</div>
           <div className="channel-name">Coding Hunger</div>
           <div><span>10K views</span> • <span>2 days ago</span></div>
       </div>
       <div className="end flex flex-col justify-start">
           <img src={threeDots} className='inline-block w-7'/>
       </div>
    </div>
  )
}

export default VideoCard
