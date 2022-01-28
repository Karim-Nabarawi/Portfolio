import React from "react";

import GlobalStyles from "./components/GlobalStyles";

//Pages
import HomePage from "./pages/home/HomePage";
//Components
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/home/ProjectPage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      {/* <HomePage /> */}
      <ProjectPage />
    </div>
  );
}

export default App;
