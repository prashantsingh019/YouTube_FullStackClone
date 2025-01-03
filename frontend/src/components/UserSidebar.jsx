import React from "react";
import "./component.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import google from "../assets/google.svg"
import switchUser from "../assets/switch-user.svg";
import signOut from "../assets/logout_icon.svg"
import studio from "../assets/youtube-studio.svg"
import dollar from "../assets/money-dollar-circle-line.svg"
import userShield from "../assets/shield-user-line.svg"
import moon from "../assets/moon-line.svg"
import translate from "../assets/translate-2.svg"
import protect from "../assets/shield-keyhole-line.svg"
import feedback from "../assets/questionnaire-line.svg"
import gear from "../assets/settings-3-fill.svg"
import global from "../assets/global-fill.svg"
import keyboard from "../assets/keyboard-box-fill.svg"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { setAppear } from "../redux/componentSlice";
const UserSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hideAndShow = useSelector((state) => state.visible.value);
 
  const channelEmail = JSON.parse(localStorage.getItem("user"))?.email || "example@gmail.com";
  const handleClick = () => {
   navigate(`/channel+page/${channelEmail}`)
  }
  const user = useSelector((state) => state.userLoginStatus?.user || "Guest");
  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("logout successfull")
    navigate("/login");
    dispatch(logout());
    dispatch(setAppear());
  }
 return (
    <div className={`text-[16px] absolute  bg-white right-sidebar ${hideAndShow?'open-right':''}`}>
      <div className="upper flex gap-1">
        <div className="user-icon flex justify-center p-1">
        <FontAwesomeIcon icon={faUser} className='rounded-full px-3 py-2 bg-gray-200'/>
        </div>
        <div className="user-details flex-1">
          <div className="user-name">{user}</div>
          <div className="channel-handle">@{user}-14</div>
          <div className="channel-link text-sky-300 cursor-pointer" onClick={handleClick}>View your channel</div>
        </div>
      </div>
      <div className="lower text-[.87em]">
        <section>
          <div className="below-user-settings"><img src={google} className='inline-block w-6'/>  Google Account</div>
          <div className="below-user-settings"><img src={switchUser} className='inline-block w-6'/>  Switch Account</div>
          <div className="below-user-settings" onClick={handleSignOut}><img src={signOut} className='inline-block w-6'/>  Sign out</div>
        </section>
        <section>
          <div className="below-user-settings"><img src={studio} className='inline-block w-6'/>  YouTube Studio</div>
          <div className="below-user-settings"><img src={dollar} className='inline-block w-6'/>  Purchases and memberships</div>
        </section>

        <section>
          <div className="below-user-settings"><img src={userShield} className='inline-block w-6'/>  Your data in YouTube</div>
          <div className="below-user-settings"><img src={moon} className='inline-block w-6'/>  Appearance: Device theme</div>
          <div className="below-user-settings"><img src={translate} className='inline-block w-6'/>  Language:British English</div>

          <div className="below-user-settings"><img src={protect} className='inline-block w-6'/>  Restricted Mode: Off</div>
          <div className="below-user-settings"><img src={global} className='inline-block w-6'/>  Location:India</div>
          <div className="below-user-settings"><img src={keyboard} className='inline-block w-6'/>  Keyboard shortcuts</div>
          <div className="below-user-settings"><img src={gear} className='inline-block w-6'/>  Settings</div>
          <div className="below-user-settings"><img src={feedback} className='inline-block w-6'/>  Send feedback</div>
        </section>
      </div>
    </div>
  );
};

export default UserSidebar;
