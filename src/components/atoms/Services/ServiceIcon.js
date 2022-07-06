import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ServiceIcon = (props) => {
  return (
    <div class="text-2xl bg-stone-100 text-stone-600 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto">
      {props.icon === "faHome" && <FontAwesomeIcon icon={faHome} />}

      {props.icon === "faAnglesRight" && <FontAwesomeIcon icon={faAnglesRight} />}

      {props.icon === "faClock" && <FontAwesomeIcon icon={faClock} />}
    </div>
  );
};

export default ServiceIcon;
