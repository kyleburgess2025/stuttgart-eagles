import { Affix, Menu } from "antd";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { slide as SlideMenu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  // let song = new Audio("star_spangled_banner.mp3");
  const myRef = useRef();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const togglePlay = () => {
    isPlaying ? myRef.current.pause() : myRef.current.play();
    setIsPlaying(!isPlaying);
    console.log(isPlaying);
  };

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const menu_items = [
    { label: <a href="/board">Meet The Board</a>, key: "bod" },
    { label: <a href="/volunteer">Volunteer</a>, key: "volunteer" }, // which is required
    { label: <a href="/donate">Donate</a>, key: "donate" }, // remember to pass the key prop
    { label: <a href="/">Home</a>, key: "home" },
    // {label: (<div id="music">{isPlaying ? <box-icon color="white" class="small-icon" onClick={togglePlay} name='volume-full'></box-icon> : <box-icon color="white" class="small-icon" onClick={togglePlay} name='volume-mute'></box-icon>}</div>), key: "music"},
    {
      label: (
        <div id="music">
          {isPlaying ? (
            <FontAwesomeIcon icon={faVolumeHigh} onClick={togglePlay} />
          ) : (
            <FontAwesomeIcon icon={faVolumeXmark} onClick={togglePlay} />
          )}
        </div>
      ),
      key: "music",
    },
    {
      label: (
        <a href="/" id="eagle_logo">
          <img
            className="eagle-photo"
            src="/assets/basketball-icon-header.png"
            alt="logo"
            height="50em"
          />
        </a>
      ),
      key: "logo",
      id: "eagle_logo",
    },
  ];

  return (
    <div>
      <audio
        id="audio"
        ref={myRef}
        src="/assets/Ball_so_Hard.mp3"
        loop="loop"
        volume="0.5"
      ></audio>
      {isTabletOrMobile ? (
        <SlideMenu id="mobilemenu">
          <a href="/board">Meet The Board</a>
          <a href="/volunteer">Volunteer</a>
          <a href="/donate">Donate</a>
          <a href="/">Home</a>
          <div id="music">
            {isPlaying ? (
              <box-icon
                color="white"
                class="small-icon"
                onClick={togglePlay}
                name="volume-full"
              ></box-icon>
            ) : (
              <box-icon
                color="white"
                class="small-icon"
                onClick={togglePlay}
                name="volume-mute"
              ></box-icon>
            )}
          </div>
        </SlideMenu>
      ) : (
        <Affix className="menu">
          <Menu items={menu_items} mode="horizontal" id="webnav" />
        </Affix>
      )}
    </div>
  );
};

export default Header;
