import React, { useEffect } from "react";
import Header from "../Header";

import OmniverseBody from "./OmniverseBodyPresentational";

const Omniverse: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/Omniverse"
    document.getElementsByTagName("body")[0].className = "omniverse-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <OmniverseBody />
    </React.Fragment>
  );
};

export default Omniverse;
