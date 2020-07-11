import React from "react";

import PrivacyBodyPresentational from "./PrivacyBodyPresentational";

const PrivacyBody: React.FunctionComponent = () => {
  const goHome = () => {
    window.location.href = "/";
  };
  return <PrivacyBodyPresentational isRegisterPrivacy={false} goHome={goHome}/>;
};

export default PrivacyBody;
