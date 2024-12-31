import React, { useEffect, useState } from 'react'
import Tags from './tags'
import {youtubeTags,baseUrl} from '../utils/dummyData'
import Video from './Video'
import { useSelector } from 'react-redux'
import axios from "axios"

const Gallery = () => {
  const [data,setData] = useState([]);
  const isLoggedIn = useSelector((state) => state.userLoginStatus.isSignedIn);
  console.log(isLoggedIn,"h");
  useEffect(()=>{
    axios.get("http://localhost:3000/api")
    .then((res) => setData(res.data))
    .catch((error) => console.error(error))
  },[])

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
        {data.map((video) => {
          return  <Video data={video} baseUrl={baseUrl}/>
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
