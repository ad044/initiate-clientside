import React from "react";

import Typed from "react-typed";
import "../../static/css/register.css";
import PrivacyBodyPresentational from "../Privacy/PrivacyBodyPresentational";
import { CSSTransition } from "react-transition-group";
import FormBody from "./FormBody";

type RegisterBodyState = {
  firstStageError: boolean;
  isFirstButtonLoaded: boolean;
  isFirstParagraphLoaded: boolean;
  areRulesLoaded: boolean;
  isPrivacyToggled: boolean;
  isFirstBlockToggledForPrivacy: boolean;
  isFirstBlockToggledForSecondStage: boolean;
  isSecondStageToggled: boolean;
  togglePrivacyAndFirstBlock: () => void;
  toggleSecondStageAndFirstBlock: () => void;
};

const RegisterBodyPresentational: React.FunctionComponent<RegisterBodyState> = (
  props
) => {
  return (
    <React.Fragment>
      <canvas id="canvas"></canvas>
      <CSSTransition
        in={props.isFirstBlockToggledForPrivacy}
        timeout={500}
        classNames={"transition-first-block-for-privacy"}
      >
        <CSSTransition
          in={props.isFirstBlockToggledForSecondStage}
          timeout={300}
          classNames={"transition-first-block-for-second-stage"}
        >
          <div
            id="first-message"
            style={props.firstStageError ? { color: "red" } : {}}
            className={props.firstStageError ? "shake-first-stage" : ""}
          >
            <h1 id="welcome">
              <Typed strings={["Welcome!"]} typeSpeed={60} />
            </h1>
            <p
              id="first-paragraph"
              className={
                props.isFirstParagraphLoaded ? "fade-in" : "zero-opacity"
              }
            >
              Seems like you're about to sign up for{" "}
              <span className="important">INITIATE</span>.<br />
              <span className="important">
                Before you proceed, take a look at our{" "}
                <span id="privacy" onClick={props.togglePrivacyAndFirstBlock}>
                  Privacy Policy
                </span>
                .<br />
              </span>
              After, make sure you agree to the following:
            </p>
            <p
              id="rules"
              className={props.areRulesLoaded ? "fade-in" : "zero-opacity"}
            >
              1. <span className="important"> INITIATE </span>does not take
              responsibility for death and does not encourage you to take your
              own life.
              <br />
              2. By signing with <span className="important"> INITIATE </span>
              you relinquish your “soul” to any “prior” contracts and
              agreements.
              <br />
              3. By signing with <span className="important"> INITIATE </span>
              you will not attempt to harm the project or its members. <br />
              4. By signing with
              <span className="important"> INITIATE </span>you agree to leave
              your “consciousness” with us. <br />
              5. You will agree that, following your demise, you entrust{" "}
              <span className="important"> INITIATE </span>to handle your soul’s
              relocation and reallocation. <br />
              6. By signing with
              <span className="important"> INITIATE </span>you will pledge your
              loyalty to the project.
              <br />
              7. Should you fail to adhere to the terms, you may be unregistered
              from the project and be disconnected from
              <span className="important"> INITIATE</span>. <br /> <br />
              0. Compliance within the chatroom is expected and the rules are to
              be upheld. Breaking these terms, or the chat’s rules, can and will
              result in forfeiture of your participation as well as termination
              of your ID.
              <br />
            </p>
            <div
              id="button-wrapper"
              className={props.isFirstButtonLoaded ? "fade-in" : "zero-opacity"}
            >
              <button onClick={props.toggleSecondStageAndFirstBlock}>
                I agree to these terms.
              </button>
            </div>
          </div>
        </CSSTransition>
      </CSSTransition>
      <PrivacyBodyPresentational
        isPrivacyToggled={props.isPrivacyToggled}
        togglePrivacyAndFirstBlock={props.togglePrivacyAndFirstBlock}
        isRegisterPrivacy={true}
      />
      <CSSTransition
        in={props.isSecondStageToggled}
        timeout={500}
        classNames={"transition-second-stage"}
      >
        <FormBody />
      </CSSTransition>
    </React.Fragment>
  );
};

export default RegisterBodyPresentational;
