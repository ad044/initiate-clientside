import React, { useEffect } from "react";
import Header from "../Header";

import DiscordBody from "./DiscordBody";

const Discord: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/Discord";
    document.getElementsByTagName("body")[0].className = "discord-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <DiscordBody />
    </React.Fragment>
  );
};

export default Discord;
