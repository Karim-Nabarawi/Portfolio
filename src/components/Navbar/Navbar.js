import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../images/logo.svg";
import UnderLine from "../utilities/UnderLine";
import { NavbarContainer, NavSection, ContactButton } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="" className="logo" />
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
          <ContactButton>Contact</ContactButton>
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
