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
  width: 0%;
  position: absolute;
  margin-left: 20px;
  border-radius: 10px;
`;

const divVariants = {
  show: {
    width: "50%",
    duration: 1,
  },
  hide: {
    width: "0%",
    duration: 0.5,
  },
};
