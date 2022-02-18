import React from "react";

import Button3D from "../../components/utilities/Button3D";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Website } from "../../images/website.svg";

//Styling and Animation
import styled from "styled-components";
import ContainerHover from "../utilities/ContainerHover";

const ProjectLinks = ({}) => {
  return (
    <>
      <ContainerHover title="Links">
        <LinksContainer>
          <Button3D text="" mainColor="#6cc644" shadowColor1="#5eac3c" shadowColor2="#457c2d">
            <Github />
          </Button3D>
          <Button3D text="" mainColor="#0e76a8" shadowColor1="#0e6793" shadowColor2="#0a4c6c">
            <Website />
          </Button3D>
        </LinksContainer>
      </ContainerHover>
    </>
  );
};
export default ProjectLinks;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
