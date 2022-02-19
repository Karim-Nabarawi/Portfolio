import React from "react";

//Styling and Animation
import styled from "styled-components";
import { ReactComponent as Error } from "../images/404 cable.svg";
import Button3D from "../components/utilities/Button3D";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Error />
      <p>Sorry, The page you requested could not be found</p>
      <p>Please go back to the homepage</p>
      <div onClick={() => navigate("/")}>
        <Button3D mainColor="#324d8b" shadowColor1="#23396d" shadowColor2="#182d5f">
          Go Home
        </Button3D>
      </div>
    </ErrorContainer>
  );
};
export default ErrorPage;

const ErrorContainer = styled.div`
  text-align: center;
  h1 {
    color: #29447e;
  }
  h2 {
    color: #161c36;
  }
  p {
    color: #bbc1c4;
  }
  svg {
    margin: 20px 0px;
  }
`;
