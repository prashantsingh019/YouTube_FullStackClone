import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Video from "./Video";
import { useParams } from "react-router";
import axios from "axios";
import { baseUrl } from "../utils/dummyData";
import { useSelector } from "react-redux";
function ChannelPage() {
  const [isSelected, setSelected] = useState("Videos");
  const [apiData, setData] = useState({});
  const [channelvideo, setVideos] = useState([]);
  const { channelEmail } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/channel?channelEmail=${channelEmail}`)
      .then((res) => {
        setData(res.data);
        getVideo(res.data.channelId);
   });
  }, [channelEmail]);

  const getVideo = (id) => {
  axios.get(`http://localhost:3000/channel/video?channelId=${id}`)
  .then((res) => setVideos(res.data))
  .catch((error) => console.log(error))
    
  }
  
  return (
    <div>
      <div className="cover-image p-2 rounded-xl overflow-hidden">
        <img
          src={apiData.channelBanner}
          alt=""
          className="h-64  p-2 rounded-3xl"
        />
      </div>
      <div className="channel-info flex gap-10 m-10">
        <div className="channel-dp  bg-cyan-600 rounded-full overflow-hidden flex justify-center">
          <img
            src={
              "https://yt3.googleusercontent.com/evQnIYEMKtYO15-3nMh58lEHH_ZnXz6SiCRzmaQDGtO8Hvjdvl_7Q9c_lgotqi0iUi9UnRq3xKY=s160-c-k-c0x00ffffff-no-rj"
            }
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="channel-info flex flex-col items-start gap-1">
          <div className="text-5xl">{apiData.channelName}</div>
          <div className="flex gap-1 p-1">
            <span>{`@${apiData.channelName}-14`}</span>•
            <span className="text-gray-500">
              {apiData.subscribers > 1000000
                ? `${(apiData.subscribers / 1000000).toFixed(1)} M`
                : `${(apiData.subscribers / 1000).toFixed(0)} K`}{" "}
              subscriber
            </span>
            •
            <span className="text-gray-500">
              {" "}
              {apiData && apiData.videos
                ? `${apiData.videos.length} videos`
                : "Loading..."}
            </span>
          </div>
          <div>
            <p className="pr-9">{apiData.desciption}</p>
          </div>
          <button className="px-3 py-2 bg-gray-950 text-white rounded-3xl hover:bg-gray-500">
            Subscribe
          </button>
        </div>
      </div>
      <div className="channel-videos-section">
        <div className="filters flex gap-5 items-center cursor-pointer text-[15px] border-b-2 border-gray-400">
          <span
            className={`${isSelected == "Home" ? "isSelectedClass" : ""}`}
            onClick={() => setSelected("Home")}
          >
            Home
          </span>
          <span
            className={`${isSelected == "Videos" ? "isSelectedClass" : ""}`}
            onClick={() => setSelected("Videos")}
          >
            <button>Videos</button>
          </span>
          <span
            className={`${isSelected == "Shorts" ? "isSelectedClass" : ""}`}
            onClick={() => setSelected("Shorts")}
          >
            Shorts
          </span>
          <span
            className={`${isSelected == "Playlists" ? "isSelectedClass" : ""}`}
            onClick={() => setSelected("Playlists")}
          >
            Playlists
          </span>
          <span
            className={`${isSelected == "Community" ? "isSelectedClass" : ""}`}
            onClick={() => setSelected("Community")}
          >
            Community
          </span>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        <div className="videos">
          <div>Popular videos</div>
          <section className="video-container p-1 text-sm channel-gallery">
            {   
             channelvideo.length > 0 ? (
              channelvideo.map((video,index) => {
                 return  <Video data={video} baseUrl={baseUrl} key={index}/>
               })):(<h1>No Videos found</h1>)
}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ChannelPage;
