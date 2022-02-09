import React from "react";

import GlobalStyles from "./components/GlobalStyles";

//Pages
import HomePage from "./pages/home/HomePage";
//Components
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/home/ProjectPage";
import FooterSection from "./components/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      {/* <HomePage /> */}
      <ProjectPage />
      <FooterSection />
    </div>
  );
}

export default App;
