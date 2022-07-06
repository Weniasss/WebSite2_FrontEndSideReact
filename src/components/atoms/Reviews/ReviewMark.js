import React from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewMark = (props) => {
  return (
    <div className="flex items-center space-x-2 text-yellow-500">
      <FontAwesomeIcon className=" text-1xl" icon={faStar} />
      <span className="text-xl font-bold"> {props.mark}</span>
    </div>
  );
};

export default ReviewMark;
