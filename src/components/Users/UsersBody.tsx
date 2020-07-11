import React, { useState, useEffect } from "react";

import UsersBodyPresentational from "./UsersBodyPresentational";
import axios from "axios";

const UsersBody: React.FunctionComponent = () => {
  // current data
  const [userIRID, setUserIRID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [discordTag, setDiscordTag] = useState("");

  // user input data
  const [statusInput, setStatusInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [discordTagInput, setDiscordTagInput] = useState("");

  // state for input containers
  const [statusError, setStatusError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [discordError, setDiscordError] = useState(false);

  // state for page containers
  const [isUserAreaActive, setUserAreaActive] = useState(true);
  const [isDiscordActive, setDiscordActive] = useState(false);

  const changeToDiscord = () => {
    if (isUserAreaActive) {
      setUserAreaActive(false);
      setTimeout(() => {
        setDiscordActive(true);
      }, 600);
    }
  };

  const changeToUserArea = () => {
    if (isDiscordActive) {
      setDiscordActive(false);
      setTimeout(() => {
        setUserAreaActive(true);
      }, 600);
    }
  };

  const updateUserData = () => {
    axios
      .post("/api/users/update_user", {
        status: statusInput,
        nickname: nicknameInput,
      })
      .then((res) => {
        setUserStatus(statusInput);
        setUserNickname(nicknameInput);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data["error"] === "nickname") {
            setNicknameError(true);
            setTimeout(() => {
              setNicknameError(false);
            }, 400);
          } else if (err.response.data["error"] === "status") {
            setStatusError(true);
            setTimeout(() => {
              setStatusError(false);
            }, 400);
          } else {
            setStatusError(true);
            setNicknameError(true);
            setTimeout(() => {
              setStatusError(false);
              setNicknameError(false);
            }, 400);
          }
        }
      });
  };

  const updateDiscordData = () => {
    axios
      .post("/api/users/update_user_discord", {
        discordTag: discordTagInput,
      })
      .then(() => {
        setDiscordTag(discordTagInput);
      })
      .catch(() => {
        setDiscordError(true);
        setTimeout(() => {
          setDiscordError(false);
        }, 400);
      });
  };

  const fetchData = () => {
    axios
      .get("/api/users/user_data")
      .then((res) => {
        const data = res.data;
        setUserIRID(data["irid"]);
        setUserEmail(data["email"]);
        setDiscordTag(data["discordTag"]);
        setUserNickname(data["nickname"]);
        setUserStatus(data["status"]);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <UsersBodyPresentational
        userIRID={userIRID}
        userStatus={userStatus}
        userNickname={userNickname}
        discordTag={discordTag}
        statusInput={statusInput}
        nicknameInput={nicknameInput}
        discordTagInput={discordTagInput}
        userEmail={userEmail}
        isUserAreaActive={isUserAreaActive}
        isDiscordActive={isDiscordActive}
        statusError={statusError}
        discordError={discordError}
        nicknameError={nicknameError}
        setNicknameInput={setNicknameInput}
        setStatusInput={setStatusInput}
        setDiscordTagInput={setDiscordTagInput}
        updateUserData={updateUserData}
        updateDiscordData={updateDiscordData}
        changeToDiscord={changeToDiscord}
        changeToUserArea={changeToUserArea}
      />
    </React.Fragment>
  );
};

export default UsersBody;
