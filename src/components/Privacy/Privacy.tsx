import React, { useEffect } from "react";

import PrivacyBody from "./PrivacyBody";
import Header from "../Header";

const Privacy: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/Privacy"
    document.getElementsByTagName("body")[0].className = "privacy-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <PrivacyBody />
    </React.Fragment>
  );
};

export default Privacy;
