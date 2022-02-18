import React from "react";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";
import CrownImg from "../../images/crown.png";

//Styling and Animation
import styled from "styled-components";
import SliderShow from "../../components/utilities/SliderShow";

import Tools from "../../components/ProjectPage/Tools";
import ProjectLinks from "../../components/ProjectPage/ProjectLinks";

const ProjectPage = ({ data }) => {
  return (
    <>
      <SliderShow images={[CaptureImg, IgniteImg, CrownImg]} />
      <DetailsContainer>
        <h1>Crown</h1>
        <p>E-commercal website with payment using stripe</p>
        <DataContainer>
          <Tools />
          <ProjectLinks />
        </DataContainer>
      </DetailsContainer>
    </>
  );
};
export default ProjectPage;

const DetailsContainer = styled.div`
  text-align: center;
  margin: 0px 10%;
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-gap: 100px;
`;
