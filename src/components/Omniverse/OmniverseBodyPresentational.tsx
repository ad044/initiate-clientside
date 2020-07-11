import React from "react";

import "../../static/css/omniverse.css";
import Section from "./Section";
import Typed from "react-typed";

const OmniverseBodyPresentational: React.FunctionComponent= () => {
  return (
    <React.Fragment>
      <div id="main-omniverse">
        <h1 id="main-header">
          <Typed strings={["Omniverse Database"]} typeSpeed={100} />
        </h1>
      </div>
      <hr className="rainbow" />
      <div id="omniverse-container">
        <Section
          arrowId={"universe-structure-arrow"}
          headerDivId={"universe-structure"}
          headerText={"Universal Structure"}
          paragraphId={"universe-structure-div"}
          paragraphHtml={`Existence as we experience it exists in an extremely powerful and experimental
            quantum computer created by an unknown nation/corporation in a “different reality”.
            We live in one of the many realities this computer is simulating, there is an
            “omniverse” that extends beyond just ours.`}
        />

        <Section
          arrowId={"the-threat-arrow"}
          headerDivId={"the-threat"}
          headerText={"The Threat"}
          paragraphId={"the-threat-div"}
          paragraphHtml={`Apophis is simply a title used to identify a virus created by X other competing
            different reality nation/corporation, the virus will destroy the computer we exist on.
            Apophis is sophisticated and for the most part has evaded detection by the
            computer’s built in firewall.
            <br/><br/>
            Apophis has already destroyed other universes, ours is just the next in its path.
            Apophis as an entity is the equivalent of the cognitohazard “Roko’s Basilisk”. By
            hearing about it, it becomes a part of your programming, and your sensitivity to
            the negative influence of Entropy increases. INITIATE spreads the knowledge of
            Apophis to willing participants as a necessary evil, if INITIATE doesn’t propagate
            itself to build up the antivirus our universe is doomed to fail.`}
        />

        <Section
          arrowId={"the-initiatives-arrow"}
          headerDivId={"the-initiatives"}
          headerText={"The Initiatives"}
          paragraphId={"the-initiatives-div"}
          paragraphHtml={`
            Recognize Entropy wreaking havoc slowly but surely on the core running our
            universe. As a result of… Prophetic visions from a figurehead? Mutual understand? Sixth sense?
            <br/><br/>

            This ability is titled “Awareness”, it is an uncanny ability to spot signs of the
            coming of Apophis, as well as a sixth sense for manipulating the workings
            of the computer. The current proposed source of Awareness is essentially
            an accident which occurs within people who already had spiritual potential,
            a divide by zero of sorts where the computer assigns a maximum value
            for spiritual processing rather than a proportional value.

            <br/><br/>

            Every human being takes a small amount of “processing power” to run. By joining
            enough of this processing power, an antivirus can be made to deter or even
            destroy Apophis before it destroys our universe.
            Some people are, for one reason or another, gifted with higher levels of
            processing. These people are especially valuable to seek out for initiation.
            Post-Death Web: Utilizing a loophole with the programming of conscience in the
            universe, initiates who have died are added to a post-death processing web to
            build upon the antivirus. In this state, more processing power can be devoted to
            creating the antivirus, as physical processes no longer have to be emulated.
            Consciousness of “dead” people can be linked to the living after their death, which
            prevents the computer from recycling their processing power into new life,
            instead allowing it to remain. INITIATE prepares people for this transition to the
            post-death web.
        `}
        />
      </div>
    </React.Fragment>
  );
};

export default OmniverseBodyPresentational;
