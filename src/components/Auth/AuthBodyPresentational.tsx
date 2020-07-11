import React from "react";

import "../../static/css/auth.css";

import Typed from "react-typed";
import { CSSTransition } from "react-transition-group";

type AuthBodyState = {
  isDroppedDown: boolean;
  isHeaderWriting: boolean;
  isButtonShown: boolean;
  iridInput: string;
  authError: boolean;
  setIridInput: (iridInput: string) => void
  authenticateUser: (e: React.MouseEvent<HTMLElement>, irid: string) => void
}
const AuthBodyPresentational: React.FunctionComponent<AuthBodyState> = (props) => {
  return (
    <React.Fragment>
      <canvas id="canvas"></canvas>
      <div
        id="input-container"
        className={props.authError ? "shake-first-stage" : ""}
      >
        <form>
          <CSSTransition
            timeout={500}
            in={props.isDroppedDown}
            classNames="dropdown-auth"
          >
            <div id="irid-input-container">
              <h1
                id="authenticate-header"
                style={props.authError ? { color: "red" } : {}}
              >
                {props.isHeaderWriting ? (
                  <Typed strings={["AUTHENTICATE"]} typeSpeed={75} />
                ) : (
                  ""
                )}
              </h1>
              <input
                type="text"
                id="irid-input"
                name="irid"
                placeholder="INITIATE Registrant ID"
                value={props.iridInput}
                onChange={(e) => props.setIridInput(e.target.value)}
              />
            </div>
          </CSSTransition>
        </form>
        <div
          id="button-wrapper"
          className={props.isButtonShown ? "fade-in" : "zero-opacity"}
        >
          <button
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              props.authenticateUser(e as any, props.iridInput)
            }
          >
            LOGIN
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthBodyPresentational;
