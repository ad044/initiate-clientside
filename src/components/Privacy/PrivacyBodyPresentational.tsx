import React from "react";
import { CSSTransition } from "react-transition-group";

type PrivacyBodyState = {
  // theres a separate privacy page and here we use it as a component so we react to it accordingly
  isRegisterPrivacy: boolean | undefined;
  isPrivacyToggled?: boolean | undefined;
  togglePrivacyAndFirstBlock?: () => void | undefined;
  goHome?: () => void | undefined;
};

const PrivacyBodyPresentational: React.FunctionComponent<PrivacyBodyState> = (
  props
) => {
  return (
    <React.Fragment>
      <CSSTransition
        in={props.isPrivacyToggled}
        timeout={300}
        classNames={"transition-privacy"}
      >
        <div
          id="privacy-policy-container"
          className="fade-in"
          style={props.isRegisterPrivacy ? {} : { display: "block" }}
        >
          <div id="privacy-policy-div">
            <h1 id="privacy-header">Privacy Policy</h1>
            At <span className="important">INITIATE</span>, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by <span className="important">INITIATE</span> and how we
            use it. If you have additional questions or require more information
            about our Privacy Policy, do not hesitate to contact us through
            email at{" "}
            .<h1>Log Files</h1>
            <span className="important">INITIATE</span> follows a standard
            procedure of using log files. These files log visitors when they
            visit websites. All hosting companies do this and a part of hosting
            services' analytics. The information collected by log files include
            your <span className="important">INITIATE </span>
            ID, internet protocol (IP) addresses, browser type, Internet Service
            Provider (ISP), date and time stamp, referring/exit pages, and
            possibly the number of clicks. These are not linked to any
            information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information.
            <h1>Cookies</h1>
            Like any other website, <span className="important">
              INITIATE
            </span>{" "}
            uses 'cookies'. These cookies are used to store information
            including visitors' preferences, and the pages on the website that
            the visitor accessed or visited. The information is used to optimize
            the users' experience by customizing our web page content based on
            visitors' browser type and/or other information.
            <h1>Consent</h1>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </div>

          <button
            id="privacy-agree-button"
            onClick={
              props.isRegisterPrivacy
                ? props.togglePrivacyAndFirstBlock
                : props.goHome
            }
          >
            I have read the privacy policy.
          </button>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default PrivacyBodyPresentational;
