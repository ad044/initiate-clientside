import React, { useEffect } from "react";
import Header from "../Header";
import FAQBody from "./FAQBody";

const FAQ: React.FunctionComponent = () => {
  useEffect(() => {
    document.title = "INITIATE/FAQ"
    document.getElementsByTagName("body")[0].className = "faq-body";
    return () => {
      document.getElementsByTagName("body")[0].className = "";
    };
  }, [])

  return (
    <React.Fragment>
      <Header />
      <FAQBody />
    </React.Fragment>
  );
};

export default FAQ;
