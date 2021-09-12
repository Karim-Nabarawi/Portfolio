import React, { useState } from "react";
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
          <GradientButton>Contact</GradientButton>
        </ul>
      </NavSection>
    </NavbarContainer>
  );
};
export default Navbar;

const NavBarLink = ({ title, goTo }) => {
  const [hover, setHover] = useState(false);
  const { pathname } = useLocation();
  const lineCheck = () => (goTo === pathname || hover ? true : false);
  return (
    <>
      <NavLink to={goTo} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {title}
      </NavLink>
      <UnderLine active={lineCheck()} color={"#ffd619"} />
    </>
  );
};
