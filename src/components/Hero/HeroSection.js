import React from "react";

//Styling and Animation
import styled from "styled-components";

import HeroImage from "../../images/land page.svg";

const HeroSection = () => {
  return (
    <HeroContainer>
      <InformationContainer>
        <h1>
          Hi, I'm <span className="name">Karim</span>
        </h1>
        <p>Web developer and video editor</p>
      </InformationContainer>
      <ImageContainer>
        <img src={HeroImage} alt="" />
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
  flex: 1;
  p {
    font-size: 32px;
    color: #585c60;
  }
  .name {
    color: #0084ff;
  }
`;

const ImageContainer = styled.div`
  flex: 2;

  img {
    width: 100%;
  }
`;
