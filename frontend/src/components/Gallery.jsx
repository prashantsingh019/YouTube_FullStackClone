import React, { useEffect, useState } from 'react'
import Tags from './tags'
import {youtubeTags,baseUrl} from '../utils/dummyData'
import Video from './Video'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { giveData } from '../redux/dataSlice'

const Gallery = () => {
  const [data,setData] = useState([]);
  const token = localStorage.getItem("token");
  const [search,setSearch] = useState('')
  const select = useSelector((state) => state.data.videos)
  const filteredProducts = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  
  const isLoggedIn = token && useSelector((state) => state.userLoginStatus.isSignedIn);
  const dispatch = useDispatch();
  useEffect(()=>{
     if (!token) {
       console.error('Token is missing');
       return; // Exit early if token is not available
     }
     axios.get("http://localhost:3000/api",{
       headers: {
         'Authorization': `JWT ${token}`
       }
     })
     .then((res) => {
       setData(res.data) 
       dispatch(giveData(res.data))
    })
     .catch((error) => console.error(error))
   },[token])

  return (
    <div className='w-[100%]'>
       {isLoggedIn?( <>
       <div className="tags">
        {
            youtubeTags.map((tag,index) => {
               return <Tags name={tag} key={index}/>
            })
        }
      </div>
       <div className="video-gallery gap-10 border p-[0.5rem] text-lg">
        
        {select ? select.map((video) => {
          return  <Video data={video} baseUrl={baseUrl} key={video._id}/>
        }):'Refresh page'}
       </div>
       </>): <div className="blank-page">
         <h1>Try searching to get started</h1>
         <h3 className='text-lg text-gray-700'>Start watching videos to help us build a feed of videos you'll love</h3>
       </div>}
      </div>
  )
}

export default Gallery
