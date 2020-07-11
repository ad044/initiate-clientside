import React, { useState } from "react";

import MiddleBlocksPresentational from "./MiddleBlocksPresentational";

const MiddleBlocks: React.FunctionComponent = () => {
  const [isToggledLore, setLoreToggle] = useState(false);
  const [isToggledOmniverse, setOmniverseToggle] = useState(false);

  const toggleMiddleBlock = () => {
    if (!isToggledLore) {
      setOmniverseToggle(!isToggledOmniverse);
      setTimeout(() => {
        setLoreToggle(!isToggledLore);
      }, 700);
    } else {
      setLoreToggle(!isToggledLore);
      setTimeout(() => {
        setOmniverseToggle(!isToggledOmniverse);
      }, 700);
    }
  };

  return (
    <MiddleBlocksPresentational
      toggleMiddleBlock={toggleMiddleBlock}
      isToggledOmniverse={isToggledOmniverse}
      isToggledLore={isToggledLore}
    />
  );
};

export default MiddleBlocks;
