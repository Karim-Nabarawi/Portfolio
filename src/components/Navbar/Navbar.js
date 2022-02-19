import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../images/Hamburger_icon.svg";

import GradientButton from "../utilities/GradientButton";
import UnderLine from "../utilities/UnderLine";
import { NavbarContainer, NavSection, NavSectionMobile, LogoSpan, NavItem, IconConatiner } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoSpan>K2</LogoSpan>
      <NavSection>
        <ul>
          <li>
            <NavBarLink title={"Home"} goTo="/" />
          </li>
          {/* <li>
            <NavBarLink title={"About"} goTo="/2" />
          </li> */}
          <li>
            <NavBarLink title={"Projects"} goTo="/projects" />
          </li>
          <li>
            <GradientButton border="true" mainColor="#0055b8" hollow="true">
              Say Hi
            </GradientButton>
          </li>
        </ul>
      </NavSection>
      <NavBarMobile />
    </NavbarContainer>
  );
};
export default Navbar;

const NavBarLink = ({ title, goTo }) => {
  const { pathname } = useLocation();
  let currentPathName = "/" + pathname.split("/")[1];
  const [showLine, setShowLine] = useState(goTo === currentPathName);
  useEffect(() => {
    setShowLine(goTo === currentPathName);
  }, [currentPathName, goTo]);
  return (
    <NavItem>
      <NavLink
        className={showLine ? "highlighted" : ""}
        to={goTo}
        onMouseEnter={() => (goTo !== currentPathName ? setShowLine(true) : "")}
        onMouseLeave={() => (goTo !== currentPathName ? setShowLine(false) : "")}
      >
        {title}
      </NavLink>
      <UnderLine active={showLine} color={"#3491fc"} />
    </NavItem>
  );
};

const NavBarMobile = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { pathname } = useLocation();
  let currentPathName = "/" + pathname.split("/")[1];
  return (
    <>
      <NavSectionMobile className={openSideMenu ? "active-menu" : ""}>
        <div className="container">
          <div className="header">
            <h2>Menu</h2>
            <IconConatiner onClick={() => setOpenSideMenu(!openSideMenu)}>
              <HamburgerIcon fill="white" />
            </IconConatiner>
          </div>
          <NavLink to="/" className={"/" === currentPathName ? "active" : ""} onClick={() => setOpenSideMenu(false)}>
            Home
          </NavLink>
          {/* <NavLink
            to="about"
            className={"about" === currentPathName ? "active" : ""}
            onClick={() => setOpenSideMenu(false)}
          >
            About
          </NavLink> */}
          <NavLink
            to="projects"
            className={"projects" === currentPathName ? "active" : ""}
            onClick={() => setOpenSideMenu(false)}
          >
            Projects
          </NavLink>
        </div>
      </NavSectionMobile>
      <IconConatiner onClick={() => setOpenSideMenu(!openSideMenu)}>
        <HamburgerIcon />
      </IconConatiner>
    </>
  );
};
