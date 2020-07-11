import React, { useEffect } from "react";

import RegisisterBody from "./RegisterBody";
import axios from "axios";

const Register: React.FunctionComponent = () => {
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
    document.title = "INITIATE/Register";
    document.getElementsByTagName("body")[0].className = "register-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return (
    <React.Fragment>
      <RegisisterBody />
    </React.Fragment>
  );
};

export default Register;
