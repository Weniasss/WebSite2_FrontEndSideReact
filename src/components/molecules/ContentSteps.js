import React from "react";

import IconSteps from "../atoms/IconSteps";
import TitleStep from "../atoms/TitleStep";
import TextStep from "../atoms/TextStep";

const ContentSteps = (props) => {
  return (
    <>
      <IconSteps icon={props.icon} />

      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <TitleStep title={props.title} />

        <TextStep
          text={props.text}
        />
      </div>
    </>
  );
};

export default ContentSteps;
