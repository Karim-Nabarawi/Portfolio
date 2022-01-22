//Styling and Animation
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 30px 10%;
  background: rgb(34, 193, 195);
  background: linear-gradient(180deg, rgba(34, 193, 195, 1) 0%, rgba(0, 132, 255, 1) 100%);
  color: white;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  h2 {
    text-align: center;
    margin: 20px;
  }
`;

export const ProjectsHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;
