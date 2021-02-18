import React from "react";
import {
  ProjectsContainer,
  ProjectsImage,
  ProjectItem,
  ProjectsWrapper,
  ProjectsTitle,
} from "./ProjectsElements";
import { projectsObjects } from "./content";
import Image from "./ProjectsImage.svg";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsImage src={Image} height={100} />
        <ProjectsContainer>
          {projectsObjects.map((item, index) => {
            return <ProjectItem key={index} item={item} />;
          })}
        </ProjectsContainer>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
