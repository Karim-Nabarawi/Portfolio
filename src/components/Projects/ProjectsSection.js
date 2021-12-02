import React from "react";
import Card from "../utilities/Card";
import { ProjectsContainer, ProjectsHolder } from "./ProjectSection.styles";

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectsHolder>
        <Card />
      </ProjectsHolder>
    </ProjectsContainer>
  );
};
export default ProjectsSection;
