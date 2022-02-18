import React from "react";

import SliderGrid from "../utilities/SliderGrid";

import getToolsData from "../../data/ToolsData";

//Styling and Animation
import styled from "styled-components";
import ContainerHover from "../utilities/ContainerHover";

const Tools = ({ tools }) => {
  return (
    <ContainerHover title="Tools & packages">
      <SliderGrid>
        {tools && tools.map((tool) => <ToolDetail key={tool}>{getToolsData(tool).src}</ToolDetail>)}
      </SliderGrid>
    </ContainerHover>
  );
};
export default Tools;

const ToolDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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
