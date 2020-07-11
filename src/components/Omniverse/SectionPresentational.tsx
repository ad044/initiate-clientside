import React, { MouseEvent } from "react";

import { CSSTransition } from "react-transition-group";
import Typed from "react-typed";

import arrow2 from "../../static/images/arrow2.png";

type SectionState = {
  toggleSection: (e: React.MouseEvent<HTMLElement>) => void;
  isArrowRotated: Record<string, boolean>;
  paragraphVisibility: Record<string, boolean>;
  arrowId: string;
  headerDivId: string;
  headerText: string;
  paragraphId: string;
  paragraphHtml: string;
};

const SectionPresentational: React.FunctionComponent<SectionState> = (
  props
) => {
  return (
    <React.Fragment>
      <div id={props.headerDivId} className="section-header">
        <h1>
          {" "}
          <Typed strings={[props.headerText]} typeSpeed={100} />
        </h1>

        <CSSTransition
          timeout={100}
          in={props.isArrowRotated[props.arrowId]}
          classNames="rotate-arrow"
        >
          <img
            id={props.arrowId}
            alt="arrow"
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              props.toggleSection(e as any)
            }
            className={`section-arrow`}
            src={arrow2}
          />
        </CSSTransition>
      </div>

      <CSSTransition
        timeout={300}
        in={props.paragraphVisibility[props.paragraphId]}
        classNames="transition-paragraph"
      >
        <div
          id={props.paragraphId}
          className="section-paragraph fade-in"
          dangerouslySetInnerHTML={{ __html: props.paragraphHtml }}
        ></div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default SectionPresentational;
