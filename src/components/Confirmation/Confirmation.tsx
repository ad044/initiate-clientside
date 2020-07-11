import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import axios from "axios";
import Loading from "../Loading";

type ConfirmationParams = {
  token: string;
};

interface Props extends RouteComponentProps<ConfirmationParams> {}

const Confirmation: React.FunctionComponent<Props> = (props) => {
  useEffect(() => {
    const confirmToken = () => {
      axios
        .post(`/api/confirmation/${props.match.params.token}`)
        .then(() => {
          document.location.href = "/auth";
        })
        .catch(() => {
          document.location.href = "/notfound";
        });
    };

    confirmToken();
  }, [props.match.params.token]);

  return <Loading />;
};

export default Confirmation;
