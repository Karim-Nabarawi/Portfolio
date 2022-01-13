import React from "react";

import GlobalStyles from "./components/GlobalStyles";

//Pages
import HomePage from "./pages/home/HomePage";
//Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
