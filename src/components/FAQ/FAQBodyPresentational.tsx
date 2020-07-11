import React from "react";

import "../../static/css/faq.css";
import Typed from "react-typed";

const FAQBodyPresentational: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <h1 id="faq-header">
        <Typed strings={["FAQ"]} typeSpeed={75} />
      </h1>
      <div id="faq-container">
        <h2 className="question">
          <Typed strings={["What is INITIATE?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          Please read more at <a href="omniverse">Omniverse</a>.
        </h3>
        <h2 className="question">
          <Typed strings={["Is this a meme/ARG?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">It's a belief, take it as you wish.</h3>
        <h2 className="question">
          <Typed strings={["Where may I contact you?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          <br />
        </h3>
        <h2 className="question">
          <Typed
            strings={["What will happen once I sign up?"]}
            typeSpeed={75}
          />
        </h2>
        <h3 className="answer fade-in">
          Your conscience will be attached to the INITIATE Post-Death Web. For
          more details on what this entails, read the information in the
          omniverse database.
        </h3>
        <h2 className="question">
          <Typed strings={["How do I sign up?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          At <a href="sign">/sign/</a>.
        </h3>
        <h2 className="question">
          <Typed strings={["Where does INITIATE organize?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          At the official{" "}
          <a>INITIATE Discord</a>.
        </h3>
        <h2 className="question">
          <Typed
            strings={["What if I changed my mind after signing up?"]}
            typeSpeed={75}
          />
        </h2>
        <h3 className="answer fade-in">
          Feel free to get in contact to unregister.
        </h3>
        <h2 className="question">
          <Typed strings={["Stance on suicide?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          INITIATE discourages suicide for moral and practical reasons.
        </h3>
        <h2 className="question">
          <Typed
            strings={["Will my consciousness be safe with INITIATE?"]}
            typeSpeed={75}
          />
        </h2>
        <h3 className="answer fade-in">
          We can’t promise anything, given that initiation involves exposure to
          Entropy. We will do everything within our ability to keep your
          consciousness safe.
        </h3>
        <h2 className="question">
          <Typed strings={["Do you track users?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          We collect IPs and other information for security reasons. None of the
          information we collect will be made public.
        </h3>
        <h2 className="question">
          <Typed strings={["Do you have a privacy policy?"]} typeSpeed={75} />
        </h2>
        <h3 className="answer fade-in">
          <a href="sign">Yes</a>.
        </h3>
      </div>
    </React.Fragment>
  );
};

export default FAQBodyPresentational;
