import React from "react";

import "../../static/css/status.css";
import Typed from "react-typed";

type StatusState = {
  time: string;
  isContaminationVisible: boolean;
  isProtocolVisible: boolean;
  areInitiatesVisible: boolean;
  isTimeVisible: boolean;
  userCount: number;
  contaminationPercentage: number;
};

const StatusBodyPresentational: React.FunctionComponent<StatusState> = (
  props
) => {
  return (
    <React.Fragment>
      <canvas id="canvas"></canvas>
      <div
        id="status-container"
        style={props.isContaminationVisible ? {} : { border: "none" }}
      >
        <h1 className="status-text">
          {props.isContaminationVisible ? (
            <Typed
              strings={[
                `System Contamination: <span style="color: red">${props.contaminationPercentage}</span>%`,
              ]}
              typeSpeed={35}
            />
          ) : (
            ""
          )}
        </h1>
        <br />
        <h1
          className="status-text"
          style={props.areInitiatesVisible ? {} : { border: "none" }}
        >
          {props.areInitiatesVisible ? (
            <Typed
              strings={[
                `<span style="color: #34ebcc;">${props.userCount} Initiatives</span> Processing`,
              ]}
              typeSpeed={35}
            />
          ) : (
            ""
          )}
        </h1>
        <br />
        <h1
          className="status-text"
          style={props.isProtocolVisible ? {} : { border: "none" }}
        >
          {props.isProtocolVisible ? (
            <Typed
              strings={[
                `Protocol <span style="color: #f54284; text-shadow: 0px 1px 20px;">INITIATE</span> is <span style="color:lime">active</span>`,
              ]}
              typeSpeed={35}
            />
          ) : (
            ""
          )}
        </h1>
        <br />
        <h1
          className={`status-text status-time yellow ${
            props.isTimeVisible ? "fade-in" : "zero-opacity"
          }`}
        >
          {props.time}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default StatusBodyPresentational;
