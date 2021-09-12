import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const GradientButton = ({ children, ...styles }) => {
  return (
    <ContactButton style={styles.style} data={styles}>
      {children}
    </ContactButton>
  );
};
export default GradientButton;

//   //#ffd619;

export const ContactButton = styled(motion.button)`
  background: linear-gradient(
    90deg,
    ${(props) => (props.data.mainColor ? props.data.mainColor : "rgba(255, 196, 68, 1)")} 0%,
    ${(props) => (props.data.secondaryColor ? props.data.secondaryColor : "rgba(243, 111, 86, 1)")} 100%
  );
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 9px 25px;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background: linear-gradient(90deg, rgba(0, 132, 255, 1) 0%, rgba(15, 13, 255, 1) 100%);
  }
`;
