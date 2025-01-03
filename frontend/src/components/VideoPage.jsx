import React, { useEffect, useState } from "react";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import share from "../assets/share.svg";
import dots from "../assets/three-dots.svg";
import emoji from "../assets/emoji.svg";
import Comment from "./Comment";
import VideoCard from "./VideoCard";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../utils/dummyData";

const VideoPage = () => {
  const dataOfVideos = useSelector((state) => state.data.videos);
 
  
  const user = useSelector((state) => state.userLoginStatus.isSignedIn);
  const [data, setData] = useState([]);
  const [content, setContent] = useState(" ");
  const [userComment,setComment] = useState([])
  const params = useParams();
  const { id } = params;
  const [likes,setLikes] = useState(0)
  useEffect(() => {
    
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:3000/watch/${id}`)
      .then((res) => {
        setComment(res.data.comments || [])
        setData(res.data)
        setLikes(res.data.likes || 0)
      })
      .catch((error) => console.error(error));
  }, []);
  
  const token = localStorage.getItem("token");

  const handleClick = () => {
    axios
      .post(`http://localhost:3000/watch/${id}`,{ user, content })
      .then((res) => setComment(res.data));
  };
  
  const handleLike = () => {
    axios.post(`http://localhost:3000/video/like`,{id})
    .then(res => setLikes(res.data.likes))
    .catch(err => console.error(err))
    }
  console.log(likes)
  return (
    <div className="flex">
      <div className="left-side w-[590px]">
        <div className="display bg-red-300 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-[100%] h-[100%]"
            src={`https://www.youtube.com/embed/${id}?si=yI5usO84Upw8Y2-Z`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="channel-info-user-intro">
          <h1 className="text-2xl">{data.title}</h1>
          <div className="middle-channel flex justify-between">
            <div className="left-middle flex gap-6 items-center">
              <div className="channel-icon">
                <FontAwesomeIcon
                  icon={faUser}
                  className="rounded-full px-3 py-3"
                />
              </div>
              <div className="channel-name-subs-count">
                <h3>{data.channelName}</h3>
                <h3>15.5k subscriber</h3>
              </div>
              <button className="px-3 py-2 bg-gray-950 text-white rounded-xl hover:bg-gray-500">
                Subscribe
              </button>
            </div>
            <div className="right-middle flex gap-8 items-center p-1">
              <div className="rounded-2xl overflow-hidden">
                <button onClick={handleLike}>
                  <img
                    src={like}
                    className="inline-block w-7 border-r-gray-400 border-solid"
                  />{" "}
                  {likes}
                </button>
                &nbsp;
                <button>
                  <img src={dislike} className="inline-block w-7" />
                </button>
              </div>
              <button>
                <img src={share} className="inline-block w-7" />
              </button>
              <button>
                <img src={dots} className="inline-block w-7" />
              </button>
            </div>
          </div>
          <div className="discription bg-violet-100 mt-2">
            <div className="dis-top flex gap-2 font-bold text-lg">
              <span>{data.view > 1000000 ? `${(data.view / 1000000).toFixed(1)}M` : `${(data.view / 1000).toFixed(0)}K` } views</span>
              <span>4 days ago</span>
              <span>#SiliconValley #GoogleIndia #workvlog</span>
            </div>
            <p>
              {data.description}
              <button className="font-bold">...more</button>
            </p>
          </div>
          <div className="comment-section">
            <div className="peak flex gap-6 text-xl">
              <span>229 Comments</span>
              <span>
                Sort by <FontAwesomeIcon icon={faArrowDownWideShort} />
              </span>
            </div>

            <div className="comments">
              <div className="user-comment flex">
                <section className="left-user w-[10%] flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="rounded-full px-3 py-3 bg-gray-300"
                  />
                </section>
                <section className="left-user w-[90%] flex flex-col">
                  <input
                    type="text"
                    className="outline-none border-b-2 border-black p-1"
                    placeholder="Add a comment"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <div className="buttons flex justify-between p-1">
                    <img src={emoji} className="inline-block w-7" />
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-red-200 rounded-xl">
                        Cancel
                      </button>
                      <button
                        className="p-2 hover:bg-red-200 rounded-xl "
                        onClick={handleClick}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </section>
              </div>
             
              
              {Array.isArray(userComment) && userComment.length > 0 ? (
                userComment.map((comment) => (
                  <Comment key={comment._id} data={comment} />
                ))
              ) : (
                <p>No comments available</p>
              )}
              <div className="comment-sect flex gap-2 flex-col"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-side p-1 flex-col flex gap-1">
      {dataOfVideos.map((video) => {
          return  <VideoCard data={video} baseUrl={baseUrl} key={video._id}/>
        })}
      </div>
    </div>
  );
};

export default VideoPage;
