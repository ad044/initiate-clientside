import React, { useState } from "react";

import { isEmailValid, isWhereFromValid } from "./formValidation";
import FormBodyPresentational from "./FormBodyPresentational";
import axios from "axios";

const FormBody: React.FunctionComponent = () => {
  const [secondStageError, setSecondStageError] = useState(false);
  const [secondStageSuccess, setSecondStageSuccess] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [isEmailToggled, setEmailToggle] = useState(false);

  const [isWhereFromToggled, setWhereFromToggle] = useState(false);
  const [whereFromInput, setWhereFromInput] = useState("");

  const showError = () => {
    setSecondStageError(true);
    setTimeout(() => {
      setSecondStageError(false);
    }, 400);
  };

  const submitEmail = (e: React.ChangeEvent, email: string) => {
    e.preventDefault();
    if (isEmailValid(email)) {
      setEmailToggle(!isEmailToggled);
      setTimeout(() => {
        setWhereFromToggle(!isWhereFromToggled);
      }, 500);
    } else {
      showError();
    }
  };

  const submitWhereFrom = (e: React.ChangeEvent, whereFrom: string) => {
    e.preventDefault();
    if (isWhereFromValid(whereFrom)) {
      submitForm();
    } else {
      showError();
    }
  };

  const submitForm = () => {
    axios
      .post("/api/register", { whereFrom: whereFromInput, email: emailInput })
      .then(() => {
        setSecondStageSuccess(true);
      })
      .catch(() => {
        showError();
      });
  };

  const completeRegistration = (e: React.ChangeEvent) => {
    e.preventDefault();
    document.location.href = "/";
  };

  return (
    <FormBodyPresentational
      secondStageError={secondStageError}
      secondStageSuccess={secondStageSuccess}
      emailInput={emailInput}
      whereFromInput={whereFromInput}
      isEmailToggled={isEmailToggled}
      isWhereFromToggled={isWhereFromToggled}
      completeRegistration={completeRegistration}
      setEmailInput={setEmailInput}
      setWhereFromInput={setWhereFromInput}
      submitEmail={submitEmail}
      submitWhereFrom={submitWhereFrom}
    />
  );
};

export default FormBody;
