import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonAddReview = () => {
  const navigate = useNavigate();
  return (
    <div className="items-center justify-center h-10  mx-24 space-x-6 ">
      <button
        onClick={() => navigate("/addReview")}
        className="tracking-wide rounded text-black font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white py-2 px-6 border-2 border-gray-200"
      >
        Add Review
      </button>
    </div>
  );
};

export default ButtonAddReview;
