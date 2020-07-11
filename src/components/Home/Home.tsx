import React, { useEffect, useState } from "react";
import Header from "../Header";
import HomeBody from "./HomeBody";

import Cookies from "js-cookie";

const Home: React.FunctionComponent = () => {
  const [isIntroSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    if (Cookies.get("seenIntro") === "true") {
      setIntroSeen(true);
    }
    document.title = "INITIATE"
    document.getElementsByTagName("body")[0].className = "index-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <HomeBody isIntroSeen={isIntroSeen} setIntroSeen={setIntroSeen} />
    </React.Fragment>
  );
};

export default Home;
