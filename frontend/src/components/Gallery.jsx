import React from 'react'
import Tags from './tags'
import { videosThumbnail, youtubeTags } from '../utils/dummyData'
import Video from './video'

const Gallery = () => {
  return (
    <div>
       <div className="tags">
        {
            youtubeTags.map((tag) => {
               return <Tags name={tag}/>
            })
        }
      </div>
       <div className="video-gallery flex flex-wrap gap-10 border justify-center p-2">
        {videosThumbnail.map((video) => {
          return  <Video data={video}/>
        })}
       </div>
    </div>
  )
}

export default Gallery
