import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const ContainerHover = ({ children, title = "" }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ContainerData
        whileHover={{
          scale: 1.1,
        }}
      >
        <div className="center">{children}</div>
      </ContainerData>
    </Container>
  );
};
export default ContainerHover;

const Container = styled.div`
  margin: 5% auto;
  max-width: 800px;
  width: 100%;
`;

const ContainerData = styled(motion.div)`
  flex: 1;
  min-height: 175px;
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
  @media screen and (max-width: 1200px) {
    min-height: 150px;
  }
`;
