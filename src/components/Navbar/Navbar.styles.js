//Styling and Animation
import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  font-weight: 500;
  .logo {
    width: 75px;
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
