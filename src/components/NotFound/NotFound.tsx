import React, { useEffect } from "react";

import NotFoundPresentational from "./NotFoundPresentational";

const NotFound: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "404"
    document.getElementsByTagName("body")[0].className = "not-found-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return <NotFoundPresentational />;
};

export default NotFound;
