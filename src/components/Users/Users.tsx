import React, { useState, useEffect } from "react";

import UsersBody from "./UsersBody";
import Header from "../Header";
import Loading from "../Loading";
import axios from "axios";

const Users: React.FunctionComponent = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const requireAuth = () => {
    axios
      .get("/api/users/logged_in")
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        window.location.href = "/auth";
      });
  };

  useEffect(() => {
    document.title = "INITIATE/User Area";
    document.getElementsByTagName("body")[0].className = "users-body";
    requireAuth();
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, []);

  return isLoggedin ? (
    <React.Fragment>
      <Header />
      <UsersBody />
    </React.Fragment>
  ) : (
    <Loading />
  );
};

export default Users;
