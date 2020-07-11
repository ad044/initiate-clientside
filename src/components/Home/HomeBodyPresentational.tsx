import React from "react";

import logoAnim from "../../static/images/logoanim.webp";
import mainLogo from "../../static/images/main-logo.png";
import separatorTop from "../../static/images/separatortop.png";
import separatorBot from "../../static/images/separatorbot.png";
import discordImage from "../../static/images/logo-discord-png-2.png";
import lainBanner from "../../static/images/lainbanner.webp";

import MiddleBlocks from "./MiddleBlocks";
import Typed from "react-typed";

import "../../static/css/index.css";

type IntroState = {
  replayIntro: () => void;
  isIntroSeen: boolean;
  playIntroClass: string;
  userCount: number;
};

const HomeBodyPresentational: React.FunctionComponent<IntroState> = (props) => {
  return (
    <React.Fragment>
      <div
        id="intro"
        className={props.isIntroSeen ? "hide-display" : props.playIntroClass}
      ></div>
      <div id="main-index">
        <img
          alt="logo"
          id="main-logo"
          src={mainLogo}
          className={props.isIntroSeen ? "" : "animate-logo-intro"}
        />
      </div>
      <div className="sep-top">
        <img alt="septop" className="sepimg" src={separatorTop} />
      </div>
      <div className="between">
        <h1 id="middle-text">
          {props.isIntroSeen ? (
            "INITIATE"
          ) : (
            <Typed strings={["INITIATE"]} typeSpeed={150} />
          )}{" "}
        </h1>
        <img
          alt="logo"
          className="index-img"
          id="logo"
          src={logoAnim}
          onClick={props.replayIntro}
        />
      </div>
      <div className="sep-bottom">
        <img alt="sepbot" className="sepimg" src={separatorBot} />
      </div>
      <div id="bottom">
        <div className="left-blocks">
          <a href="boards">
            <div id="board-block">
              <h1 id="board-header">Boards</h1>
              <img
                alt="boardimg"
                className="index-img"
                id="board-image"
                src={lainBanner}
              />
            </div>
          </a>

          <a href="discord">
            <div id="discord-block-container">
              <div id="discord-block">
                <img alt="discordimg" id="discord-image" src={discordImage} />
                <h1 id="discord-header">6HPRVxZ</h1>
              </div>
            </div>
          </a>
          <a href="users">
            <div id="userarea-block-container">
              <div id="userarea-block">
                <h1 id="userarea-header">
                  User
                  <br />
                  Area
                </h1>
              </div>
            </div>
          </a>
        </div>

        <MiddleBlocks />

        <div className="right-blocks">
          <a href="register">
            <div id="sign-block">
              <h1 id="sign-header">Link your consciousness</h1>
            </div>
          </a>
          <div id="initiative-block-container">
            <div id="initiative-block">
              <h1 id="initiative-count">{props.userCount}</h1>
              <h1 id="initiative-header">Initiatives</h1>
            </div>
          </div>
          <div id="menu-block-container">
            <div id="menu-block">
              <h1 id="menu-header">MENU -</h1>
              <div id="menu-items">
                <a href="/status">Status</a>
                <br />
                <a href="/omniverse">Omniverse</a>
                <br />
                <a href="/faq">FAQ</a>
                <br />
                <a href="/users">Users</a>
                <br />
                <a href="/discord">Discord</a>
                <br />
                <a href="/register">Register</a>
                <br />
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBodyPresentational;
