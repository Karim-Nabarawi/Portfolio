import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import GradientButton from "../utilities/GradientButton";
import UnderLine from "../utilities/UnderLine";
import { NavbarContainer, NavSection, LogoSpan } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoSpan>K2</LogoSpan>
      <NavSection>
        <ul>
          <li>
            <NavBarLink title={"Home"} goTo="/" />
          </li>
          <li>
            <NavBarLink title={"About"} goTo="/2" />
          </li>
          <li>
            <NavBarLink title={"Projects"} goTo="/3" />
          </li>
          <GradientButton border="true" mainColor="#0055b8" hollow="true">
            Say Hi
          </GradientButton>
        </ul>
      </NavSection>
    </NavbarContainer>
  );
};
export default Navbar;

const NavBarLink = ({ title, goTo }) => {
  const { pathname } = useLocation();
  const [showLine, setShowLine] = useState(goTo === pathname);
  useEffect(() => {
    setShowLine(goTo === pathname);
  }, [pathname, goTo]);
  return (
    <>
      <NavLink
        to={goTo}
        onMouseEnter={() => (goTo !== pathname ? setShowLine(true) : "")}
        onMouseLeave={() => (goTo !== pathname ? setShowLine(false) : "")}
      >
        {title}
      </NavLink>
      <UnderLine active={showLine} color={"#ffd619"} />
    </>
  );
};
