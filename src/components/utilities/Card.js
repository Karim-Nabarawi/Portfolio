import React from "react";
import { useNavigate } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import Button3D from "./Button3D";

const Card = ({ img, title, description }) => {
  const navigate = useNavigate();
  return (
    <CardContainer img={img}>
      <FigureContainer>
        <img src={img} alt="project" />
        <FigureCaption>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonContainer onClick={() => navigate(`projects/${title}`)}>
            <Button3D>More...</Button3D>
          </ButtonContainer>
        </FigureCaption>
      </FigureContainer>
    </CardContainer>
  );
};
export default Card;

const CardContainer = styled.div`
  display: block;
  flex: none;
  position: relative;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  :hover {
    transform: scale(1.05);
  }
  transition: 0.45s ease-in-out;
`;

const FigureContainer = styled.figure`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 12px;
  padding-top: 66.66%;
  img {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const FigureCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  opacity: 0;

  text-align: center;
  h2 {
    color: #f0003c;
    line-height: 1.125;
    font-size: 24px;
  }
  &:hover {
    background-color: #141c3ad9;
    opacity: 1;
  }
  transition: 0.45s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
