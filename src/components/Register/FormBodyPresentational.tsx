import React from "react";

import Typed from "react-typed";
import "../../static/css/register.css";
import { CSSTransition } from "react-transition-group";

type FormBodyState = {
  secondStageError: boolean;
  secondStageSuccess: boolean;
  emailInput: string;
  whereFromInput: string;
  isEmailToggled: boolean;
  isWhereFromToggled: boolean;
  setEmailInput: (emailInput: string) => void;
  setWhereFromInput: (whereFromInput: string) => void;
  submitEmail: (e: React.ChangeEvent, email: string) => void;
  submitWhereFrom: (e: React.ChangeEvent, whereFrom: string) => void;
  completeRegistration: (e: React.ChangeEvent) => void;
};

const FormBodyPresentational: React.FunctionComponent<FormBodyState> = (
  props
) => {
  return (
    <React.Fragment>
      <div id="second-stage-container">
        <form method="POST" action="/register">
          <div
            id="registration-form"
            className={props.secondStageError ? "shake-second-stage" : ""}
          >
            <h1
              id="second-stage-header"
              style={props.secondStageError ? { color: "red" } : {}}
            >
              {props.secondStageSuccess ? (
                <Typed strings={["Success!"]} typeSpeed={75} />
              ) : (
                "Second Stage"
              )}
            </h1>
            <CSSTransition
              in={props.isEmailToggled}
              timeout={500}
              classNames={"transition-email"}
            >
              <div id="second-stage-email-container">
                <div
                  id="second-stage-email"
                  style={props.secondStageError ? { color: "red" } : {}}
                >
                  <h1>Please provide your email address:</h1>
                  <input
                    type="text"
                    name="email"
                    value={props.emailInput}
                    onChange={(e) => props.setEmailInput(e.target.value)}
                  />
                </div>
                <button
                  id="email-confirm-button"
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    props.submitEmail(e as any, props.emailInput)
                  }
                >
                  Continue
                </button>
              </div>
            </CSSTransition>

            <CSSTransition
              in={props.isWhereFromToggled}
              timeout={500}
              classNames={"transition-where-from"}
            >
              <div id="second-stage-where-from-container">
                {props.secondStageSuccess ? (
                  <React.Fragment>
                    <p id="final-paragraph" className="fade-in">
                      You'll receive a confirmation email in up to 10 minutes.
                      Please check it to complete your registration process.
                    </p>
                    <button
                      className="fade-in"
                      id="complete-registration-button"
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        props.completeRegistration(e as any)
                      }
                    >
                      Complete registration
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div
                      id="second-stage-where-from"
                      style={props.secondStageError ? { color: "red" } : {}}
                    >
                      <h1>
                        Please tell us where/how you found{" "}
                        <span className="important">INITIATE:</span>
                      </h1>
                      <textarea
                        id="where-from-input"
                        name="whereFrom"
                        value={props.whereFromInput}
                        onChange={(e) =>
                          props.setWhereFromInput(e.target.value)
                        }
                      ></textarea>
                    </div>
                    <button
                      id="where-from-confirm-button"
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        props.submitWhereFrom(e as any, props.whereFromInput)
                      }
                    >
                      Submit
                    </button>
                  </React.Fragment>
                )}
              </div>
            </CSSTransition>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormBodyPresentational;
