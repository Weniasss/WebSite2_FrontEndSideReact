import React from "react";

const TextStep = (props) => {
  return (
    <p class="leading-relaxed font-bold text-1xl text-gray-400 text-justify">
      {props.text}
    </p>
  );
};

export default TextStep;
