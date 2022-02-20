import React from "react";
import Card from "../utilities/Card";
import { ProjectsHolder } from "./ProjectSection.styles";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";

const ProjectsSection = ({ data }) => {
  return (
    <ProjectsHolder>
      {data &&
        data
          .slice(0, 8)
          .map((proj) => <Card key={proj.id} img={proj.images[0]} title={proj.title} description={proj.subTitle} />)}
      <Card img={IgniteImg} title={"Ignite"} description={"Check games Info"} />
    </ProjectsHolder>
  );
};
export default ProjectsSection;
