//Styling and Animation
import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  font-weight: 500;
  .logo {
    width: 75px;
  }
  .active-menu {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const IconConatiner = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const NavSection = styled.nav`
  font-size: 18px;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavSectionMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  background-color: whitesmoke;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;

  background: #0055b8;
  padding: 30px 0px;
  h2 {
    color: white;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-decoration: none;
      text-align: center;
      width: 100%;
      height: 50px;
      z-index: 2;
      padding: 2rem;
      transition: background 0.5s ease;
    }
  }
  a.active {
    background-color: white;
    color: #0055b8;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 1;
  }
`;

export const NavItem = styled.div`
  padding: 0 20px;
  a,
  li {
    display: inline-block;

    text-decoration: none;
    text-align: center;
    color: black;
    /* color: #0084ff; */
    /* color: #0055b8; */
    position: relative;
  }
  .highlighted {
    font-weight: bold;
  }
`;
export const LogoSpan = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 48px;
`;
