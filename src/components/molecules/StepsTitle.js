import React from "react";
import IconSteps from "../atoms/IconSteps";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const StepsTitle = (props) => {
  return (
    <>
      <p className="font-extrabold uppercase text-2xl font-sans  text-gray-800">
        <IconSteps icon={props.icon} /> {props.title}
      </p>
    </>
  );
};

export default StepsTitle;
