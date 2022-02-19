import React from "react";

//func
import GetProjectData from "../data/ProjectsData";

//Styling and Animation
import styled from "styled-components";
import Background from "../images/Projects bg.svg";
import Gear from "../images/gear top.svg";

//Comp
import ProjectsSection from "../components/Projects/ProjectsSection";

const ProjectsPage = () => {
  const data = GetProjectData("all");
  return (
    <ProjectsContainer style={{ backgroundImage: `url(${Background})` }}>
      <img src={Gear} alt="gear" className="gear top-gear-left" />
      <img src={Gear} alt="gear" className="gear top-gear-right" />
      <img src={Gear} alt="gear" className="gear bottom-gear-right" />
      <img src={Gear} alt="gear" className="gear bottom-gear-left" />
      <h1>Projects</h1>
      <ProjectsSection data={data} />
    </ProjectsContainer>
  );
};
export default ProjectsPage;

const ProjectsContainer = styled.div`
  position: relative;
  background-image: url("${Background}");
  border-radius: 50px;
  margin: 10px 2%;
  text-align: center;
  padding: 5% 15% 10% 15%;

  h1 {
    color: white;
    margin-bottom: 20px;
  }

  .gear {
    position: absolute;
    width: 20%;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  .top-gear-left {
    top: 20px;
    left: 20px;
  }
  .top-gear-right {
    top: 40px;
    right: 20px;
    transform: rotateZ(90deg);
  }
  .bottom-gear-right {
    bottom: 0;
    right: 40px;
    transform: rotateZ(180deg);
  }
  .bottom-gear-left {
    bottom: 20px;
    left: 0;
    transform: rotateZ(270deg);
  }
`;
