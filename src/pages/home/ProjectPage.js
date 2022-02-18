import React, { useState } from "react";

//Styling and Animation
import styled from "styled-components";
import SliderShow from "../../components/utilities/SliderShow";

import Tools from "../../components/ProjectPage/Tools";
import ProjectLinks from "../../components/ProjectPage/ProjectLinks";
import GetProjectData from "../../data/ProjectsData";

const ProjectPage = ({}) => {
  const [data, setData] = useState(GetProjectData("crown"));
  console.log(data);
  return (
    <>
      <SliderShow images={data.images} />
      <DetailsContainer>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <DataContainer>
          <Tools tools={data.tools} />
          <ProjectLinks links={data.links} />
        </DataContainer>
      </DetailsContainer>
    </>
  );
};
export default ProjectPage;

const DetailsContainer = styled.div`
  text-align: center;
  margin: 0px 10% 50px 10%;
  p {
    margin: 50px 0px;
  }
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-gap: 100px;
  @media screen and (max-width: 1200px) {
    grid-gap: 20px;
  }
`;
