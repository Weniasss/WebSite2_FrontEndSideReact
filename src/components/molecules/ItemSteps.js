import React from "react";

import NumericSteps from "../atoms/NumericSteps";
import ContentSteps from "./ContentSteps";

const ItemSteps = (props) => {
  return (
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

        <NumericSteps step={props.number} />

        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <ContentSteps
            icon={props.icon}
            title={props.title}
            text={props.text}
          />
        </div>

    </div>
  );
};

export default ItemSteps;
