import React, { useState } from "react";

import CaptureImg from "../../images/capture.png";
import IgniteImg from "../../images/ignite.png";
import CrownImg from "../../images/crown.png";

//Styling and Animation
import styled from "styled-components";
import SliderShow from "../../components/utilities/SliderShow";

const ProjectPage = () => {
  return (
    <>
      <SliderShow images={[CaptureImg, IgniteImg, CrownImg]} />
    </>
  );
};
export default ProjectPage;
