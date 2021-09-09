import React from "react";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const UnderLine = ({ active = false, color = "red" }) => {
  return (
    <LineAnimation
      transition={{ duration: 0.75 }}
      initial={{ width: "0%" }}
      animate={{ width: active ? "50%" : "0%" }}
      whileHover={{ width: "0%" }}
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
