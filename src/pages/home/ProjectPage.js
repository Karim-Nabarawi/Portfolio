import React from "react";

import getToolsData from "../../data/Tools";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";
import CrownImg from "../../images/crown.png";

//Styling and Animation
import styled from "styled-components";
import SliderShow from "../../components/utilities/SliderShow";
import SliderGrid from "../../components/utilities/SliderGrid";
import Button3D from "../../components/utilities/Button3D";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Website } from "../../images/website.svg";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <>
      <SliderShow images={[CaptureImg, IgniteImg, CrownImg]} />
      <DetailsContainer>
        <h1>Crown</h1>
        <p>E-commercal website with payment using stripe</p>
        <ToolsContainer>
          <h2>Tools & packages</h2>
          <ToolsData
            whileHover={{
              scale: 1.1,
            }}
          >
            <div className="center">
              <SliderGrid>
                <ToolDetail>{getToolsData("reactJs").src}</ToolDetail>
                <ToolDetail>{getToolsData("firebase").src}</ToolDetail>
                <ToolDetail>{getToolsData("styledComponents").src}</ToolDetail>
                <ToolDetail>{getToolsData("nodeJs").src}</ToolDetail>
                <ToolDetail>{getToolsData("stripe").src}</ToolDetail>
              </SliderGrid>
            </div>
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
  margin: 5% auto;
  max-width: 800px;
`;

const ToolsData = styled(motion.div)`
  flex: 1;
  min-height: 200px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
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
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: inherit;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22);
    transition: 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
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
