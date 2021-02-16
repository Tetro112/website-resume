import React from "react";
import {
  ProjectsContainer,
  ProjectsImage,
  ProjectItemWrapper,
  ProjectsWrapper,
} from "./ProjectsElements";
import { projectsObjects } from "./content";
import Image from "./ProjectsImage.svg";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        <ProjectsImage src={Image} />
        <ProjectsContainer>
          {projectsObjects.map((item, index) => {
            return <ProjectItemWrapper key={index} item={item} />;
          })}
        </ProjectsContainer>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
