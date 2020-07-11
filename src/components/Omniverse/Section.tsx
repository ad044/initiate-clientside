import React, { useState } from "react";
import SectionPresentational from "./SectionPresentational";

type PassedSectionProps = {
  arrowId: string;
  headerDivId: string;
  headerText: string;
  paragraphId: string;
  paragraphHtml: string;
};

const Section: React.FunctionComponent<PassedSectionProps> = (props) => {
  //state for all sections

  const [paragraphVisibility, setParagraphVisibility] = useState<
    Record<string, boolean>
  >({
    "universe-structure-div": true,
    "the-threat-div": true,
    "the-initiatives-div": true,
  });

  //state for all arrows
  const [isArrowRotated, setIsArrowRotated] = useState<Record<string, boolean>>({
    "universe-structure-arrow": false, 
    "the-threat-arrow": false,
    "the-initiatives-arrow": false
  })

  // dict to find which arrow should close/open which div
  const arrowToParagraph: Record<string, string> = {
    "universe-structure-arrow": "universe-structure-div",
    "the-threat-arrow": "the-threat-div",
    "the-initiatives-arrow": "the-initiatives-div",
  };

  const toggleSection = (e: React.MouseEvent<HTMLElement>) => {
    const targetedArrow = (e.target as HTMLElement).id;
    const paragraphToToggle = arrowToParagraph[targetedArrow];

    // toggle arrow rotation
    if (!isArrowRotated[targetedArrow]) {
      setIsArrowRotated({ [targetedArrow]:  true });
    } else {
      setIsArrowRotated({ [targetedArrow]: false });
    }

    // toggle paragraph visibility
    if (paragraphVisibility[paragraphToToggle]) {
      setParagraphVisibility({ [paragraphToToggle]: false });
    } else {
      setParagraphVisibility({ [paragraphToToggle]: true });
    }
  };

  return (
    <SectionPresentational
      arrowId={props.arrowId}
      headerDivId={props.headerDivId}
      headerText={props.headerText}
      paragraphHtml={props.paragraphHtml}
      paragraphId={props.paragraphId}
      paragraphVisibility={paragraphVisibility}
      isArrowRotated={isArrowRotated}
      toggleSection={toggleSection}
    />
  );
};

export default Section;
