import React from "react";
import Card from "../utilities/Card";
import { ProjectsContainer, ProjectsHolder } from "./ProjectSection.styles";

import CaptureImg from "../../images/capture.png";

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <h2>My Recent Work</h2>
      <ProjectsHolder>
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
        <Card img={CaptureImg} />
      </ProjectsHolder>
    </ProjectsContainer>
  );
};
export default ProjectsSection;
