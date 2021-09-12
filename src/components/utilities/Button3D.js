import React from "react";

//Styling and Animation
import styled from "styled-components";

const Button3D = ({ children, ...data }) => {
  const theme = {
    mainColor: data.mainColor ? data.mainColor : "#f0003c",
    shadowColor: data.shadowColor1 ? data.shadowColor1 : "#52001b",
    shadowColor2: data.shadowColor2 ? data.shadowColor2 : "#a30036",
  };
  return (
    <Pushable>
      <Shadow></Shadow>
      <Edge theme={theme}></Edge>
      <Front color={theme.mainColor}>
        {data.text}
        {children}
      </Front>
    </Pushable>
  );
};
export default Button3D;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.shadowColor} 0%,
    ${(props) => props.theme.shadowColor2} 8%,
    ${(props) => props.theme.shadowColor2} 92%,
    ${(props) => props.theme.shadowColor} 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  background: ${(props) => props.color};
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  svg {
    fill: white;
    width: 30px;
    height: 30px;
  }
`;

const Pushable = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 20px 10px;

  &:hover {
    filter: brightness(110%);
  }
  &:hover ${Front} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
