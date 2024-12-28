import React from 'react'
import Tags from './tags'
import { videosThumbnail, youtubeTags } from '../utils/dummyData'
import Video from './Video'
import { useSelector } from 'react-redux'

const Gallery = () => {
  const isLoggedIn = useSelector((state) => state.userLoginStatus.isSignedIn);
  console.log(isLoggedIn,"h");
   
  return (
    <div className='w-[100%]'>
       {isLoggedIn?( <>
       <div className="tags">
        {
            youtubeTags.map((tag) => {
               return <Tags name={tag}/>
            })
        }
      </div>
       <div className="video-gallery gap-10 border p-[0.5rem]">
        {videosThumbnail.map((video) => {
          return  <Video data={video}/>
        })}
       </div>
       </>): <div className="blank-page">
         <h1>Try searching to get started</h1>
         <h3 className='text-lg text-gray-700'>Start watching videos to help us build a feed of videos you'll love</h3>
       </div>}
      </div>
  )
}

export default Gallery
