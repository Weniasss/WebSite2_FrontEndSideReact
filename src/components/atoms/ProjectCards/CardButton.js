import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectExampleById from "../../ProjectExampleById";


const CardButton = (props) => {

  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/ProjectExample/${id}`);
    <ProjectExampleById info="infoooo"/>

  };

  return (
    <button
      onClick={(e, id) => editEmployee(e, props.id)}
      className="mt-5  rounded text-black font-black bg-gray-300 hover:bg-gray-400 hover:text-white py-2 px-6 border-2 border-gray-200"
    >
      Read more
    </button>
  );
};

export default CardButton;
