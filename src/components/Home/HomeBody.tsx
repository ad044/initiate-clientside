import React, { useState, useEffect } from "react";

import HomeBodyPresentational from "./HomeBodyPresentational";
import Cookies from "js-cookie";
import axios from "axios";

type IntroState = {
  isIntroSeen: boolean;
  setIntroSeen: (value: boolean) => void;
};

const HomeBody: React.FunctionComponent<IntroState> = (props) => {
  const [playIntroClass, setPlayIntroClass] = useState("");
  const [userCount, setUserCount] = useState(0);

  const updateUserCount = async () => {
    await axios.get("/api/users/user_count").then((res) => {
      setUserCount(res.data.usercount);
    });
  };

  const replayIntro = () => {
    Cookies.remove("seenIntro");
    window.location.reload();
  };

  useEffect(() => {
    updateUserCount();
  }, []);

  useEffect(() => {
    const playIntro = () => {
      if (!props.isIntroSeen) {
        //play intro
        window.scrollTo(0, 0);
        setTimeout(() => {
          setPlayIntroClass("animate-intro-bg");
          Cookies.set("seenIntro", "true");
        }, 1500);
      }
    };

    playIntro();
  }, [props.isIntroSeen]);

  return (
    <HomeBodyPresentational
      replayIntro={replayIntro}
      isIntroSeen={props.isIntroSeen}
      playIntroClass={playIntroClass}
      userCount={userCount}
    />
  );
};

export default HomeBody;
