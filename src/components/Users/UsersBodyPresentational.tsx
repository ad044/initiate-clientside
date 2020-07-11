import React from "react";

import "../../static/css/users.css";
import { CSSTransition } from "react-transition-group";

type UsersBodyState = {
  userIRID: string;
  userStatus: string;
  userNickname: string;
  discordTag: string;

  statusInput: string;
  nicknameInput: string;
  discordTagInput: string;
  userEmail: string;

  isUserAreaActive: boolean;
  isDiscordActive: boolean;

  statusError: boolean;
  discordError: boolean;
  nicknameError: boolean;

  setNicknameInput: (userNickname: string) => void;
  setStatusInput: (userStatus: string) => void;
  setDiscordTagInput: (discordTagInput: string) => void;

  updateUserData: () => void;
  updateDiscordData: () => void;

  changeToDiscord: () => void;
  changeToUserArea: () => void;
};

const UsersBodyPresentational: React.FunctionComponent<UsersBodyState> = (
  props
) => {
  return (
    <React.Fragment>
      <div id="users-wrapper">
        <div id="users-container-knobs">
          <div
            className={
              props.isUserAreaActive
                ? "users-knob users-knob-text users-knob-active"
                : "users-knob users-knob-text"
            }
            onClick={() => props.changeToUserArea()}
          >
            USER AREA
          </div>
          <div
            className={
              props.isDiscordActive
                ? "users-knob users-knob-text users-knob-active"
                : "users-knob users-knob-text"
            }
            onClick={() => props.changeToDiscord()}
          >
            DISCORD SETTINGS
          </div>
        </div>
        <CSSTransition
          timeout={100}
          in={props.isUserAreaActive}
          classNames="transition-users"
        >
          <div id="users-container">
            <h1 className="users-header">
              Welcome, <span className="important">{props.userIRID}</span>!
            </h1>
            <div id="users-flex">
              <div className="users-body-section users-section-boards">
                <a href="/boards">
                  <h2
                    id="users-section-boards-header"
                    className="users-body-section-header important"
                  >
                    Boards
                  </h2>
                  <p className="users-flex-p">
                    Click here to access the INITIATE boards.
                  </p>
                </a>
              </div>
              <div className="users-body-section users-section-discord">
                <a href="/discord">
                  <h2
                    id="users-section-discord-header"
                    className="users-body-section-header important"
                  >
                    Discord
                  </h2>
                  <p className="users-flex-p">
                    Click here to join our Discord server!
                  </p>
                </a>
              </div>
            </div>
            <h1 className="users-warning">
              In order to have full access to the{" "}
              <span className="important">Discord</span> server, head over to
              the <span className="important">Discord Settings </span>tab and
              set your data there so we can verify that it's you.
            </h1>
            <div id="user-settings">
              <h1 className="users-header">Settings</h1>
              <div id="user-settings-flex">
                <div
                  className={
                    props.statusError
                      ? "user-settings-section shake-second-stage"
                      : "user-settings-section"
                  }
                >
                  <h1 className="user-settings-header important">
                    Set your status:{" "}
                    <span className="white">(30 characters maximum)</span>
                  </h1>
                  <form method="POST">
                    <input
                      className="users-input"
                      type="text"
                      name="status"
                      value={props.statusInput}
                      onChange={(e) => props.setStatusInput(e.target.value)}
                    />
                  </form>
                  {props.userStatus ? (
                    <React.Fragment>
                      <h1 className="current">Current status:</h1>
                      <h1 className="important user-settings-header">
                        {props.userStatus}
                      </h1>
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
                <div
                  className={
                    props.nicknameError
                      ? "user-settings-section shake-second-stage"
                      : "user-settings-section"
                  }
                >
                  <h1 className="user-settings-header important">
                    Set your nickname:{" "}
                    <span className="white">(20 characters maximum)</span>
                  </h1>
                  <form method="POST">
                    <input
                      className="users-input"
                      type="text"
                      name="nickname"
                      value={props.nicknameInput}
                      onChange={(e) => props.setNicknameInput(e.target.value)}
                    />
                  </form>
                  {props.userNickname ? (
                    <React.Fragment>
                      <h1 className="current">Current nickname:</h1>
                      <h1 className="important user-settings-header">
                        {props.userNickname}
                      </h1>
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
              </div>
              <button
                className="users-button"
                onClick={() => {
                  props.updateUserData();
                }}
              >
                Update data
              </button>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          timeout={100}
          in={props.isDiscordActive}
          classNames="transition-discord"
        >
          <div id="users-container" style={{ display: "none" }}>
            <h1 className="users-header">Discord Settings</h1>
            <div id="user-settings">
              <div id="user-settings-flex">
                <div
                  className={
                    props.discordError
                      ? "user-settings-section shake-second-stage"
                      : "user-settings-section"
                  }
                >
                  <h1 className="user-settings-header important">
                    Set your current discord tag (e.g user#1234)
                  </h1>
                  <form method="POST">
                    <input
                      className="users-input"
                      type="text"
                      name="status"
                      value={props.discordTagInput}
                      onChange={(e) => props.setDiscordTagInput(e.target.value)}
                    />
                  </form>
                  {props.discordTag ? (
                    <React.Fragment>
                      <h1 className="current">Current Discord tag:</h1>
                      <h1 className="important user-settings-header">
                        {props.discordTag}
                      </h1>
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
                <div className="users-body-section discord-section">
                  <h2 className="users-body-section-header important">
                    Discord Theme
                  </h2>
                  <p className="users-flex-p">
                    Click here to download our official Discord theme!
                  </p>
                </div>
              </div>
              <button
                className="users-button discord-button"
                onClick={() => {
                  props.updateDiscordData();
                }}
              >
                Update data
              </button>
            </div>
          </div>
        </CSSTransition>
      </div>
    </React.Fragment>
  );
};

export default UsersBodyPresentational;
