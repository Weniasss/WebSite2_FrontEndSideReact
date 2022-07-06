import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectExampleService from "../../services/ProjectExampleService";

import CardItem from "../molecules/ProjectCards/CardItem";

const ProjectCardsSection = () => {

  const [loading, setLoading] = useState(true);

  const [projectExamples, setProjectExamples] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProjectExampleService.getProjectExamples();
        setProjectExamples(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
    {/* // <div class="md:grid-rols-3 p-8 flex"> */}
      {!loading && (
        <span className="grid grid-cols-3 px-10">
          {projectExamples.map((projectExample) => (
            <CardItem
              title={projectExample.titleProject}
              text={projectExample.technologyProject}
              description={projectExample.projectDescription}
              id={projectExample.id}
            />
          ))}
        </span>
      )}
    </>
  );
};

export default ProjectCardsSection;
