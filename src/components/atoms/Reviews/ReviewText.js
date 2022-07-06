import React from "react";

const ReviewText = (props) => {
  return (
    <p class="leading-relaxed mb-6 font-bold">
      <span className="font-black">Сomment : </span>{props.text}
    </p>
  );
};

export default ReviewText;
