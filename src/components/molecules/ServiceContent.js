import React from "react";
import ServiceIcon from "../atoms/Services/ServiceIcon";
import ServiceText from "../atoms/Services/ServiceText";
import ServiceTitle from "../atoms/Services/ServiceTitle";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";



const ServiceContent = (props) => {
  return (
    // {props.version === "1" && "1"}
    <>
      {props.version === "1" && "1"}
		<div class={props.class}>
        <div class="text-center">



          <ServiceIcon icon={props.icon} />

          <ServiceTitle title={" Create Task"} />

          <ServiceText
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,fugit quisquam hic nemo voluptas."
            }
          />
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
