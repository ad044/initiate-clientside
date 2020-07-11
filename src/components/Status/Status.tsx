import React, { useEffect } from "react";

import StatusBody from "./StatusBody";
import Header from "../Header";

const Status: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/Status";
    document.getElementsByTagName("body")[0].className = "status-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <StatusBody />;
    </React.Fragment>
  );
};

export default Status;
