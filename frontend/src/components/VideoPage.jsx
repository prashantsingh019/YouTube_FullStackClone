import React from 'react'
import "./component.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,faArrowDownWideShort
  } from "@fortawesome/free-solid-svg-icons";
import like from "../assets/like.svg"
import dislike from "../assets/dislike.svg"
import share from "../assets/share.svg";
import dots from "../assets/three-dots.svg";
import emoji from "../assets/emoji.svg"
const VideoPage = () => {
  return (
    <div>
      <div className="left-side w-[590px]">
         <div className="display bg-red-300 flex items-center justify-center overflow-hidden">
         <iframe width="600" height="335" src="https://www.youtube.com/embed/IiYI2xS_dvc?si=9ivyVqKpzGFpxVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
         <div className="channel-info-user-intro">
           <h1 className='text-2xl'>Inside Google: A Week in the Life of a Software Engineer During the Festive Season! 🎄</h1>
           <div className="middle-channel flex justify-between">
            
             <div className="left-middle flex gap-6 items-center">
                  <div className="channel-icon">
                    <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-3'/>
                  </div>
                  <div className="channel-name-subs-count">
                    <h3>Divyanshi Srivastava</h3>
                    <h3>15.5k subscriber</h3>
                  </div>
                  <button className='px-3 py-2 bg-gray-950 text-white rounded-xl hover:bg-gray-500'>Subscribe</button>
             </div>
             <div className="right-middle flex gap-8 items-center p-1">
                <div className='rounded-2xl overflow-hidden'>
                <button><img src={like} className='inline-block w-7 border-r-gray-400 border-solid'/> 1.2k</button>&nbsp;
                <button><img src={dislike} className='inline-block w-7'/></button>
                </div>
                <button><img src={share} className='inline-block w-7'/></button>
                <button><img src={dots} className='inline-block w-7'/></button>
             </div>
           </div>
            <div className="discription bg-violet-100 mt-2">
             <div className="dis-top flex gap-2 font-bold text-lg">
                <span>45k views</span>
                <span>4 days ago</span>
                <span>#SiliconValley #GoogleIndia #workvlog</span>
             </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores vitae nihil officia architecto, nemo voluptatem quae corporis placeat reiciendis cupiditate magnam, sit ad sapiente cum fugit? Beatae, magnam perferendis!<button className='font-bold'>...more</button></p>
            </div>
            <div className="comment-section">
            <div className="peak flex gap-6 text-xl">
                    <span>229 Comments</span>
                    <span>Sort by <FontAwesomeIcon icon={faArrowDownWideShort} /></span>
            </div>
            
           
            <div className="comments">

                <div className="user-comment flex">
                   <section className="left-user w-[10%] flex items-center">
                   <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-3 bg-gray-300 m-auto'/>
                   </section>
                   <section className="left-user w-[90%] flex flex-col">
                     <input type="text" className='outline-none border-b-2 border-black p-1' placeholder='Add a comment'/>
                       <div className="buttons flex justify-between p-1">
                       <img src={emoji} className='inline-block w-7'/>
                        <div className='flex gap-2'>
                        <button className='p-2 hover:bg-red-200 rounded-xl'>Cancel</button>
                        <button className='p-2 hover:bg-red-200 rounded-xl'>Comment</button>
                        </div>
                     </div>
                   </section>
                </div>
            </div>
            </div>
         </div>
      </div>
      <div className="right-side"></div>
    </div>
  )
}

export default VideoPage
