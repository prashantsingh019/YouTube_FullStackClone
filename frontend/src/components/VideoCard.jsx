import React from 'react'
import threeDots from "../assets/three-dots-vertical.svg"
const VideoCard = ({data,baseUrl}) => {
  return (
    <div className='flex items-center'>
       <div className="start">
          <img src={`${baseUrl}${data.thumbnailUrl}.png`} className='w-40 h-30'/>
       </div> 
       <div className="mid w-[80%] p-1">
           <div className="title">{data.title}</div>
           <div className="channel-name">Coding Hunger</div>
           <div><span>{data.view > 1000000 ? `${(data.view / 1000000).toFixed(1)}M` : `${(data.view / 1000).toFixed(0)}K` } views</span> • <span>2 days ago</span></div>
       </div>
       <div className="end flex flex-col justify-start">
           <img src={threeDots} className='inline-block w-7'/>
       </div>
    </div>
  )
}

export default VideoCard
