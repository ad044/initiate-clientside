import React from "react";

import "../../static/css/discord.css";
import Typed from "react-typed";

const DiscordBodyPresentational: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div id="discord-container">
        <h1 id="discord-page-header">
          <Typed strings={["Discord"]} typeSpeed={75} />
        </h1>
        <p className="white fade-in" id="discord-paragraph">
          Keep in mind that in order to gain full access to the server, you must sign up for
          <span className="important"> INITIATE</span> and verify your Discord
          Tag by setting it in the <a href="/users">User Area</a>.
        </p>
      </div>
      <div id="button-wrapper" className="fade-in">
        <a>
          <button id="discord-button">Proceed to the Discord server</button>
        </a>
      </div>
    </React.Fragment>
  );
};

export default DiscordBodyPresentational;
