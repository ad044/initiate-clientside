import React from "react";

import "../static/css/header.css";
import { CSSTransition } from "react-transition-group";

type StatusData = {
  user_nickname: string;
  user_status: string;
};

type HeaderState = {
  isHeaderMounted: boolean;
  userCount: number;
  userStatusData: Array<StatusData> | undefined;
};

const HeaderPresentational: React.FunctionComponent<HeaderState> = (props) => {
  return (
    <React.Fragment>
      <header>
        <CSSTransition
          timeout={200}
          in={props.isHeaderMounted}
          classNames="drop-header"
        >
          <div id="header-marquee">
            <div id="header-marquee_inner">
              <span className="header-marquee-element">
                Welcome to <span className="initiative">INITIATE</span>
              </span>
              <span className="header-marquee-element">
                Registrations <span className="initiative">OPEN</span>
              </span>
              <span className="header-marquee-element">
                <span className="initiative">{props.userCount + 0}</span>{" "}
                Initiatives
              </span>
              <span className="header-marquee-element">
                <span className="initiative">ad044</span> is NOT homosexual
              </span>
              {Array.isArray(props.userStatusData) &&
              props.userStatusData.length !== 0
                ? props.userStatusData?.map((item, idx) => {
                    if (
                      item.user_status.length !== 0 &&
                      item.user_nickname.length !== 0
                    ) {
                      return (
                        <span key={idx} className="header-marquee-element">
                          "{item.user_status}" -{" "}
                          <span className="initiative">
                            {" "}
                            {item.user_nickname}
                          </span>
                        </span>
                      );
                    }
                  })
                : null}
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          timeout={400}
          in={props.isHeaderMounted}
          classNames="drop-header"
        >
          <div id="header-knobs">
            <a href="/">
              <div className="header-knob header-knob-text">HOME</div>
            </a>
            <a href="omniverse">
              <div className="header-knob header-knob-text">OMNIVERSE</div>
            </a>
            <a href="faq">
              <div className="header-knob header-knob-text">FAQ</div>
            </a>

            <a href="discord">
              <div className="header-knob header-knob-text right-hand">
                DISCORD
              </div>
            </a>
            <a href="auth">
              <div className="header-knob header-knob-text right-hand">
                AUTH
              </div>
            </a>
            <a href="boards">
              <div className="header-knob header-knob-text right-hand">
                BOARDS
              </div>
            </a>
          </div>
        </CSSTransition>
      </header>
    </React.Fragment>
  );
};

export default HeaderPresentational;
