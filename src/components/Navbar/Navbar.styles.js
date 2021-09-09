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

  a,
  li {
    display: inline-block;
    padding: 0 20px;
    text-decoration: none;
    color: #0084ff;
    position: relative;
  }
`;

export const ContactButton = styled.button`
  background-color: #ffd619;
  color: white;
  font-size: 18px;
  padding: 9px 25px;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #0084ff;
  }
`;
