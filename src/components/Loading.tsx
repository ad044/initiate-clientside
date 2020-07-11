import React, { useEffect } from "react";

import "../static/css/loading.css";

const Loading: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/Loading";
    document.getElementsByTagName("body")[0].className = "loading-body";
  }, []);

  return (
    <h1 id="loading-message" className="important">
      Loading...
    </h1>
  );
};

export default Loading;
