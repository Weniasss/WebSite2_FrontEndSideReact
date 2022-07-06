import React from "react";

import StepsText from "./StepsText";
import StepsTitle from "./StepsTitle";

const StepsItem = (props) => {
  return (
    <div className="flex p-1 bg-gray-100 rounded">
      <div className="m-3">
        <StepsTitle title={props.title} icon={props.icon} />

        <StepsText
          text={props.text}
        />
      </div>
    </div>
  );
};

export default StepsItem;
