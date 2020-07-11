import React, { useState, useEffect } from "react";

import RegisterBodyPresentational from "./RegisterBodyPresentational";
import Header from "../Header";
import useScript from "../../hooks/useScript";
import starfield from "../../static/js/starfield";

const RegisterBody: React.FunctionComponent = () => {
  const [firstStageError, setFirstStageError] = useState(false);

  const [isFirstParagraphLoaded, setFirstParagraphLoaded] = useState(false);
  const [areRulesLoaded, setRulesLoaded] = useState(false);
  const [isFirstButtonLoaded, setFirstButtonLoaded] = useState(false);

  const [isPrivacyToggled, setPrivacyToggle] = useState(false);
  const [isPrivacyRead, setPrivacyRead] = useState(false);

  const [isSecondStageToggled, setSecondStageToggle] = useState(false);

  const [
    isFirstBlockToggledForPrivacy,
    setFirstBlockToggleForPrivacy,
  ] = useState(false);

  const [
    isFirstBlockToggledForSecondStage,
    setFirstBlockToggleForSecondStage,
  ] = useState(false);

  // swapping first block and privacy
  const togglePrivacyAndFirstBlock = () => {
    setPrivacyRead(true);
    if (!isPrivacyToggled) {
      setFirstBlockToggleForPrivacy(!isFirstBlockToggledForPrivacy);
      setTimeout(() => {
        setPrivacyToggle(!isPrivacyToggled);
      }, 400);
    } else {
      setPrivacyToggle(!isPrivacyToggled);
      setTimeout(() => {
        setFirstBlockToggleForPrivacy(!isFirstBlockToggledForPrivacy);
      }, 400);
    }
  };

  // swapping first block and second stage
  const toggleSecondStageAndFirstBlock = () => {
    if (isPrivacyRead && !isSecondStageToggled) {
      setFirstBlockToggleForSecondStage(!isFirstBlockToggledForSecondStage);
      setTimeout(() => {
        setSecondStageToggle(!isSecondStageToggled);
      }, 400);
    } else {
      setFirstStageError(true);
      setTimeout(() => {
        setFirstStageError(false);
      }, 400);
    }
  };

  useScript(starfield);

  useEffect(() => {
    setTimeout(() => {
      setFirstParagraphLoaded(true);
      setTimeout(() => {
        setRulesLoaded(true);
        setTimeout(() => {
          setFirstButtonLoaded(true);
        }, 600);
      }, 600);
    }, 600);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <RegisterBodyPresentational
        firstStageError={firstStageError}
        isFirstButtonLoaded={isFirstButtonLoaded}
        isFirstParagraphLoaded={isFirstParagraphLoaded}
        areRulesLoaded={areRulesLoaded}
        isPrivacyToggled={isPrivacyToggled}
        isFirstBlockToggledForPrivacy={isFirstBlockToggledForPrivacy}
        isFirstBlockToggledForSecondStage={isFirstBlockToggledForSecondStage}
        isSecondStageToggled={isSecondStageToggled}
        togglePrivacyAndFirstBlock={togglePrivacyAndFirstBlock}
        toggleSecondStageAndFirstBlock={toggleSecondStageAndFirstBlock}
      />
    </React.Fragment>
  );
};

export default RegisterBody;
