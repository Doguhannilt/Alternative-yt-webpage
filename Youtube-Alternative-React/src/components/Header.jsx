import React from 'react'
// CSS 
import '../styles/header_styles.css';
// Images
import hamburgerMenuIcon from '../images/header-images/hamburger-menu-icon.webp';
import youtubeMenuIcon from '../images/header-images/youtube.png';
import youtubeLogo from '../images/header-images/youtube-logo.png';
import micPng from "../images/header-images/mic.png";
import createIcon from "../images/header-images/create-icon.png";
import bellIcon from "../images/header-images/bell.png";
import channelProfile from  "../images/header-images/channels_profile.jpg";

const header = () => {
  return (
    <div className = "header">

    <div className = "left-bar">
    <img className="hamburger_menu" src={hamburgerMenuIcon} alt="Hamburger Menu" />
        <img className = "youtube_png" src = {youtubeMenuIcon}/>
        <img  className = "youtube_icon" src = {youtubeLogo}/>
    </div>

    <div className = "middle-bar">
        <input 
        className = "search-bar" 
        type="text" 
        placeholder="Search"
        />
        <img className = "mic_icon" src={micPng}/>
    </div>
    
    <div className = "right-bar">
        <img className = "create_icon" src={createIcon}/>
        <img className = "bell_icon" src={bellIcon}/>
        <img className = "channel_profile" src={channelProfile}/>
    </div>
    </div>
  )
}

export default header