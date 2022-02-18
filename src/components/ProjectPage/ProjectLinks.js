import React from "react";

//Styling and Animation
import styled from "styled-components";
import ContainerHover from "../utilities/ContainerHover";
import GetLinksData from "../../data/LinksData";

const ProjectLinks = ({ links }) => {
  return (
    <>
      <ContainerHover title="Links">
        <LinksContainer>{links && links.map((link) => GetLinksData(link))}</LinksContainer>
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
