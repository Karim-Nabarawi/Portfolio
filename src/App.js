import React from "react";

import GlobalStyles from "./components/GlobalStyles";

//Components
import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/Footer/FooterSection";
import GetRoutes from "./routes.config";
import styled from "styled-components";

function App() {
  return (
    <AppConatiner>
      <GlobalStyles />
      <Navbar />
      <GetRoutes />
      <FooterSection />
    </AppConatiner>
  );
}

export default App;

const AppConatiner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
