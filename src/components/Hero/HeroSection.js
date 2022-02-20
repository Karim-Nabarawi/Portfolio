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
          Hi, I'm
          <span className="name">
            <br />
            Karim El-Nabarawi
          </span>
        </h1>
        <h1>Web developer and Animator</h1>
        <p>My work focus is simple but effective designs that will run perfectly both on low & high-end devices</p>
        <Button3D
          text=""
          mainColor="#6cc644"
          shadowColor1="#5eac3c"
          shadowColor2="#457c2d"
          onClick={() => window.open("https://github.com/Karim-Nabarawi", "_blank")}
        >
          <Github />
        </Button3D>

        <Button3D
          text=""
          mainColor="#0e76a8"
          shadowColor1="#0e6793"
          shadowColor2="#0a4c6c"
          onClick={() => window.open("https://www.linkedin.com/in/karim-el-nabarawi-5609b51b5/", "_blank")}
        >
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
  line-height: 1.2;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const InformationContainer = styled.div`
  flex: 2;
  p {
    font-size: 24px;
    color: #4f4f4f;
    margin-top: 20px;
  }
  h1 {
    font-size: 48px;
  }
  .name {
    color: #0055b8;
    font-size: 64px;
  }
`;

const ImageContainer = styled.div`
  flex: 3;

  svg {
    width: 100%;
  }
`;
