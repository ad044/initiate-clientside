import React, { useState, useEffect } from "react";

import HeaderPresentational from "./HeaderPresentational";
import Cookies from "js-cookie";
import axios from "axios";

type StatusData = {
  user_nickname: string;
  user_status: string;
};

const Header: React.FunctionComponent = () => {
  const [isHeaderMounted, setIsHeaderMounted] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [userStatusData, setUserStatusData] = useState<Array<StatusData>>();

  const updateUserCount = async () => {
    await axios.get("/api/users/user_count").then((res) => {
      setUserCount(res.data.usercount);
    });
  };

  const getUserStatusData = async () => {
    await axios.get("/api/users/user_status_data").then((res) => {
      setUserStatusData(res.data);
    });
  };

  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      Cookies.get("seenIntro") !== "true"
    ) {
      setTimeout(() => {
        setIsHeaderMounted(true);
      }, 3500);
    } else {
      setTimeout(() => {
        setIsHeaderMounted(true);
      }, 100);
    }

    updateUserCount();
    getUserStatusData();
  }, []);

  return (
    <HeaderPresentational
      userCount={userCount}
      userStatusData={userStatusData}
      isHeaderMounted={isHeaderMounted}
    />
  );
};

export default Header;
