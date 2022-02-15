import React from "react";

import getToolsData from "../../data/Tools";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";
import CrownImg from "../../images/crown.png";

//Styling and Animation
import styled from "styled-components";
import SliderShow from "../../components/utilities/SliderShow";
import Button3D from "../../components/utilities/Button3D";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Website } from "../../images/website.svg";
import Tabs from "../../components/utilities/Tabs";

const ProjectPage = () => {
  return (
    <>
      <SliderShow images={[CaptureImg, IgniteImg, CrownImg]} />
      <DetailsContainer>
        <h1>Crown</h1>
        <Tabs
          data={
            <ToolsData>
              <ToolDetail>{getToolsData("reactJs").src}</ToolDetail>
              <ToolDetail>{getToolsData("firebase").src}</ToolDetail>
              <ToolDetail>{getToolsData("styledComponents").src}</ToolDetail>
              <ToolDetail>{getToolsData("nodeJs").src}</ToolDetail>
              <ToolDetail>{getToolsData("stripe").src}</ToolDetail>
            </ToolsData>
          }
        />
        <p>E-commercal website with payment using stripe</p>
        <ToolsContainer>
          <ToolsText>
            <h2>Tools & packages</h2>
          </ToolsText>
          <ToolsData>
            <ToolDetail>{getToolsData("reactJs").src}</ToolDetail>
            <ToolDetail>{getToolsData("firebase").src}</ToolDetail>
            <ToolDetail>{getToolsData("styledComponents").src}</ToolDetail>
            <ToolDetail>{getToolsData("nodeJs").src}</ToolDetail>
            <ToolDetail>{getToolsData("stripe").src}</ToolDetail>
          </ToolsData>
        </ToolsContainer>
        <h2>Links</h2>

        <LinksContainer>
          <Button3D text="" mainColor="#6cc644" shadowColor1="#5eac3c" shadowColor2="#457c2d">
            <Github />
          </Button3D>
          <Button3D text="" mainColor="#0e76a8" shadowColor1="#0e6793" shadowColor2="#0a4c6c">
            <Website />
          </Button3D>
        </LinksContainer>
      </DetailsContainer>
    </>
  );
};
export default ProjectPage;

const DetailsContainer = styled.div`
  text-align: center;
  margin: 0px 10%;
`;

const ToolsContainer = styled.div`
  margin: 5%;
`;
const ToolsText = styled.div`
  flex: 1;
`;

const ToolsData = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    min-width: 50px;
    max-width: 100px;
    max-height: 70px;
    margin-right: 10px;
  }
  img {
    width: 100%;
    min-width: 50px;
    max-width: 100px;
  }
`;

const ToolDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
