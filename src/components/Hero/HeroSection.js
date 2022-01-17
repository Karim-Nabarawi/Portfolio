import React from "react";

//Styling and Animation
import styled from "styled-components";

//Images
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";

import { ReactComponent as HeroImage } from "../../images/land page.svg";

//Componets
import Button3D from "../utilities/Button3D";

const HeroSection = () => {
  return (
    <HeroContainer>
      <InformationContainer>
        <h1>
          Hi, I'm <span className="name">Karim</span>
        </h1>
        <p>Web developer and Animator</p>
        <Button3D text="" mainColor="#6cc644" shadowColor1="#5eac3c" shadowColor2="#457c2d">
          <Github />
        </Button3D>
        <Button3D text="" mainColor="#0e76a8" shadowColor1="#0e6793" shadowColor2="#0a4c6c">
          <Linkedin />
        </Button3D>
      </InformationContainer>
      <ImageContainer>
        <HeroImage />
      </ImageContainer>
    </HeroContainer>
  );
};
export default HeroSection;

const HeroContainer = styled.div`
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InformationContainer = styled.div`
  flex: 2;
  p {
    font-size: 32px;
    color: #585c60;
  }
  .name {
    color: #0055b8;
  }
`;

const ImageContainer = styled.div`
  flex: 3;

  svg {
    width: 100%;
  }
`;
