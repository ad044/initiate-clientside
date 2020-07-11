import React, { useEffect, useState } from "react";
import AuthBodyPresentational from "./AuthBodyPresentational";
import axios from "axios";
import starfield from "../../static/js/starfield"
import useScript from "../../hooks/useScript";

const Auth: React.FunctionComponent = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const [isHeaderWriting, setIsHeaderWriting] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(false);

  const [authError, setAuthError] = useState(false);
  const [iridInput, setIridInput] = useState("");

  const authenticateUser = (e: React.MouseEvent<HTMLElement>, irid: string) => {
    e.preventDefault();
    axios
      .post("/api/auth", { irid: irid })
      .then(() => {
        window.location.href = "/users"
      })
      .catch(() => {
        setAuthError(true);
        setTimeout(() => {
          setAuthError(false);
        }, 400);
      });
  };

  useScript(starfield);

  useEffect(() => {
    setTimeout(() => {
      setIsDroppedDown(true);
      setTimeout(() => {
        setIsHeaderWriting(true);
        setTimeout(() => {
          setIsButtonShown(true);
        }, 1200);
      }, 500);
    }, 300);
  }, []);

  return (
    <React.Fragment>
      <AuthBodyPresentational
        isDroppedDown={isDroppedDown}
        isHeaderWriting={isHeaderWriting}
        isButtonShown={isButtonShown}
        iridInput={iridInput}
        authError={authError}
        setIridInput={setIridInput}
        authenticateUser={authenticateUser}
      />
    </React.Fragment>
  );
};

export default Auth;
