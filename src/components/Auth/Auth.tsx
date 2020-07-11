import React, { useEffect } from "react";
import Header from "../Header";
import AuthBody from "./AuthBody";

import axios from "axios";

const Auth: React.FunctionComponent = () => {
  const requireAuth = () => {
    axios
      .get("/api/users/logged_in")
      .then(() => {
        window.location.href = "/users";
      })
      .catch(() => {});
  };

  useEffect(() => {
    requireAuth();
    document.title = "INITIATE/Auth";
    document.getElementsByTagName("body")[0].className = "auth-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <AuthBody />
    </React.Fragment>
  );
};

export default Auth;
