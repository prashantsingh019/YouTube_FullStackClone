import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Video from "./Video";
function ChannelPage() {
  const [isSelected, setSelected] = useState("Home");
  return (
    <div>
      <div className="cover-image p-2 rounded-xl overflow-hidden">
        <img
          src={
            "https://yt3.googleusercontent.com/4gtkJoXUhDrDo9nTiBDEh3sv69vdkOSMC4PGaxQc4gzvQpY-MPt5LIbn8icYIkKOyhh6-GCneQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          }
          alt=""
          srcset=""
          className="h-64  p-2 rounded-3xl"
        />
      </div>
      <div className="channel-info flex gap-10 m-10">
        <div className="channel-dp h-48 max-w-96 w-96 bg-cyan-600 rounded-full overflow-hidden">
          <img
            src={
              "https://yt3.googleusercontent.com/evQnIYEMKtYO15-3nMh58lEHH_ZnXz6SiCRzmaQDGtO8Hvjdvl_7Q9c_lgotqi0iUi9UnRq3xKY=s160-c-k-c0x00ffffff-no-rj"
            }
            alt=""
            srcset=""
            className="bg-cover "
          />
        </div>
        <div className="channel-info flex flex-col items-start gap-1">
          <div className="text-5xl">CodingHunger</div>
          <div className="flex gap-1 p-1">
            <span>@CodingHunger</span>•
            <span className="text-gray-500">1.51K subscriber</span>•
            <span className="text-gray-500">210 videos</span>
          </div>
          <div>
            <p className="pr-9">
              Hii guys , I am Mashhood Ahmad Danish from India 🇮🇳. Currently
              working for a MNC as a Software Engineer. Starting this channel to
              help student in making projects for their final year and which
              will help them to grab their dream job. I will try to build
              projects in various domain. Main Focus will be on MERN Full Stack.
              So get ready .
            </p>
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
            Videos
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
          <section className="video-container p-1 text-sm">
            <Video data={`Video1.png`}/>
            <Video data={`Video2.png`}/>
            <Video data={`Video3.png`}/>
            <Video data={`Video4.png`}/>
            <Video data={`Video5.png`}/>
            <Video data={`Video6.png`}/>
            <Video data={`Video4.png`}/>
            <Video data={`Video5.png`}/>
            <Video data={`Video6.png`}/>
          </section>
         </div>
      </div>
    </div>
  );
}

export default ChannelPage;
