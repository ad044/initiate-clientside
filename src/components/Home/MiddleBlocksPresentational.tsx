import React from "react";

import portal from "../../static/images/portal1.png";
import arrow from "../../static/images/arrow1.png";
import { CSSTransition } from "react-transition-group";

type MiddleBlockState = {
  toggleMiddleBlock: () => void;
  isToggledOmniverse: boolean;
  isToggledLore: boolean;
};

const MiddleBlocksPresentational: React.FunctionComponent<MiddleBlockState> = (
  props
) => {
  return (
    <React.Fragment>
      <div className="middle-blocks">
        <CSSTransition
          timeout={500}
          in={props.isToggledOmniverse}
          classNames="transition-omniverse-summary"
        >
          <div id="omniverse-and-summary">
            <div id="omniverse-block-container">
              <a href="omniverse">
                <div id="omniverse-block">
                  <h1 id="omniverse-header">
                    Omniverse <br />
                    Database
                  </h1>
                  <img
                    alt="portal"
                    className="index-img"
                    id="portal"
                    src={portal}
                  />
                </div>
              </a>
            </div>
            <div id="summary-block-container">
              <div id="summary-block" onClick={props.toggleMiddleBlock}>
                <br />
                <h1 id="summary-header">Summary</h1>
                <img
                  alt="arrow"
                  className="index-img"
                  id="summary-arrow"
                  src={arrow}
                />
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          timeout={500}
          in={props.isToggledLore}
          classNames="transition-lore"
        >
          <div id="lore-summary-block" onClick={props.toggleMiddleBlock}>
            <p id="lore-summary-text">
              Every human being takes a small amount of "processing power" to
              run. By joining enough of this processing power, an antivirus can
              be made to deter or even destroy the{" "}
              <span className="summaryinitiative">Apophis</span>. Utilizing a
              loophole with the programming of conscience in the universe,{" "}
              <span className="summaryinitiative">Initiatives</span> who have
              died are added to a post-death processing web to build upon the
              antivirus. In this state, more processing power can be devoted to
              creating the antivirus, as physical processes no longer have to be
              emulated. Consciousness of "dead" people can be linked to the
              living after their death, which prevents the computer from
              recycling their processing power into new life, instead allowing
              it to remain. <span className="summaryinitiative">INITIATE</span>{" "}
              prepares people for this transition to the{" "}
              <span className="summaryinitiative">Post-Death Web</span>.<br />
            </p>
            <img
              alt="arrow"
              className="index-img"
              id="summary-arrow"
              src={arrow}
            />
          </div>
        </CSSTransition>
      </div>
    </React.Fragment>
  );
};

export default MiddleBlocksPresentational;
