import React from "react";
import "./app.css";

//Pages
import HomePage from "./pages/home/HomePage";
//Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
