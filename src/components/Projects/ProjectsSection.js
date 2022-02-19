import React from "react";
import Card from "../utilities/Card";
import { ProjectsContainer, ProjectsHolder } from "./ProjectSection.styles";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";
import CrownImg from "../../images/crown.png";
import GetProjectData from "../../data/ProjectsData";

const ProjectsSection = () => {
  const data = GetProjectData("all");
  return (
    <ProjectsContainer>
      <h2>My Recent Work</h2>
      <ProjectsHolder>
        {data &&
          data
            .slice(0, 8)
            .map((proj) => <Card key={proj.id} img={proj.images[0]} title={proj.title} description={proj.subTitle} />)}
        <Card img={CaptureImg} title={"Capture Portfolio"} description={"A mock up for a photographer portofolio"} />
        <Card
          img={"https://d33wubrfki0l68.cloudfront.net/61e52c2c8189e78b7a0cd1c2/screenshot_2022-01-17-08-44-51-0000.png"}
          title={"Wave"}
          description={"An online music player"}
        />
        <Card img={IgniteImg} title={"Ignite"} description={"Check games Info"} />
        <Card img={CrownImg} title={"Crown"} description={"E-commerce for cloth shop"} />
      </ProjectsHolder>
    </ProjectsContainer>
  );
};
export default ProjectsSection;
