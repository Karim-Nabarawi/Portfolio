import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const UnderLine = ({ active = false, color = "red" }) => {
  return (
    <LineAnimation
      variants={divVariants}
      animate={active ? "show" : "hide"}
      transition={{ type: "tween" }}
      color={color}
    ></LineAnimation>
  );
};
export default UnderLine;

export const LineAnimation = styled(motion.div)`
  height: 0.3rem;
  background: ${(props) => props.color};
  border-radius: 10px;
  margin: auto;
`;

const divVariants = {
  show: {
    width: "90%",
    duration: 1,
  },
  hide: {
    width: "0%",
    duration: 0.5,
  },
};
