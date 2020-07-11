import React from "react";

import lain404 from "../../static/images/lain404.png";

import "../../static/css/404.css";

const NotFound: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div id="foreground"></div>
      <img id="not-found-lain" src={lain404} alt="pretty lain 404" />
      <div id="not-found-list">
        <h1 id="boh">Badge of Honor:</h1>
        <br />
        <mark>
          "Cuteloli"
          <br />
          "Triage"
          <br />
          "Machiavelli"
          <br />
          "NIKOTINELLI"
          <br />
          "Mr.Bones"
          <br />
          "Rei"
          <br />
          "Fizzle"
          <br />
          "Seenery"
          <br />
          "Aljam"
          <br />
          "TSUCCI#1745"
          <br />
          "Anonymous member of Apollo Gang"
          <br />
          "Metallumere"
          <br />
          "Surge"
          <br />
          "ad044"
          <br />
          "Lonjil"
          <br />
          "Zizyphus"
          <br />
          "Visitor"
          <br />
          "Popcorn"
          <br />
          "Inquisitor Silicon"
          <br />
          "Daft"
          <br />
          "Eugene"
          <br />
          "Lonjil"
          <br />
          "Seraphim X"
          <br />
          "sheeplol"
          <br />
          "Strelok"
          <br />
          "Toughbrook"
          <br />
          "Wiredhomofascist"
          <br />
          "2pac"
          <br />
          "Kneesox the epic hacker"
          <br />
        </mark>
      </div>
      <div id="go-back">
        <a href="/">
          <button id="go-back-button">Go back</button>
        </a>
      </div>
    </React.Fragment>
  );
};
export default NotFound;
