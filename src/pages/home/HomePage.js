import React from "react";
//Styling and Animation

//components
import HeroSection from "../../components/Hero/HeroSection";
import ProjectsSection from "../../components/Projects/ProjectsSection";
import FooterSection from "../../components/Footer/FooterSection";

const HomePage = () => {
  return (
    <div className="f">
      <HeroSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};
export default HomePage;
