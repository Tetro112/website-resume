import React from "react";
import {
  ProjectsContainer,
  ProjectsImage,
  ProjectsContainer,
  ProjectItemWrapper,
  ItemContent,
  ProjectsWrapper,
  ProjectItem,
  ItemTitle,
} from "./ProjectsElements";
import projectsObjects from "./content";

const Projects = () => {
  isClicked = [];

  const handleClick = (index) => {};

  return (
    <>
      <ProjectsWrapper>
        <ProjectsImage />
        <ProjectsContainer>
          {projectsObjects.map((item, index) => {
            return (
              <ProjectItemWrapper key={index} data={item}>
                {isClicked.push(false)}
                <ProjectsItem>
                  <ItemLink href={item.url}>
                    <ItemTitle>{item.title}</ItemTitle>
                  </ItemLink>
                </ProjectsItem>
              </ProjectItemWrapper>
            );
          })}
        </ProjectsContainer>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
