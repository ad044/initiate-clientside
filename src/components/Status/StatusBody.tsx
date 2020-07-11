import React, { useState, useEffect } from "react";

import StatusBodyPresentational from "./StatusBodyPresentational";
import axios from "axios";

const StatusBody: React.FunctionComponent = () => {
  const [time, setTime] = useState("");
  const [isContaminationVisible, setContaminationVisibility] = useState(false);
  const [areInitiatesVisible, setInitiateVisibility] = useState(false);
  const [isProtocolVisible, setProcotolVisibility] = useState(false);
  const [isTimeVisible, setTimeVisibility] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [contaminationPercentage, setContaminationPercentage] = useState(0);

  const pad = (n: number): string => {
    return n < 10 ? "0" + n.toString() : n.toString();
  };

  const updateContaminationPercentage = () => {
    const now = new Date().getTime();
    const countDownDate = new Date(1873406545404).getTime();

    setContaminationPercentage(Math.round(100 - (now / countDownDate) * 100));
  };

  const updateUserCount = async () => {
    await axios.get("/api/users/user_count").then((res) => {
      setUserCount(res["data"]["usercount"]);
    });
  };

  useEffect(() => {
    updateUserCount();

    updateContaminationPercentage();

    const updateClock = () => {
      const now = new Date().getTime();
      const countDownDate = new Date(1873406545404).getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    setInterval(() => {
      updateClock();
    }, 100);

    setContaminationVisibility(true);
    setTimeout(() => {
      setInitiateVisibility(true);
      setTimeout(() => {
        setProcotolVisibility(true);
        setTimeout(() => {
          setTimeVisibility(true);
        }, 1200);
      }, 1200);
    }, 1300);
  }, []);

  return (
    <StatusBodyPresentational
      time={time}
      isContaminationVisible={isContaminationVisible}
      isProtocolVisible={isProtocolVisible}
      areInitiatesVisible={areInitiatesVisible}
      isTimeVisible={isTimeVisible}
      userCount={userCount}
      contaminationPercentage={contaminationPercentage}
    />
  );
};

export default StatusBody;
