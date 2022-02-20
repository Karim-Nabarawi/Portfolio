import { ReactComponent as ReactLogo } from "../images/React Logo.svg";
import { ReactComponent as FirebaseLogo } from "../images/Firebase Logo.svg";
import { ReactComponent as NodeLogo } from "../images/Node.js logo.svg";
import { ReactComponent as StripeLogo } from "../images/Stripe Logo.svg";
import { ReactComponent as SassLogo } from "../images/Sass Logo.svg";
import { ReactComponent as FramerMotionLogo } from "../images/Framer Logo.svg";
import { ReactComponent as AfterEffectsLogo } from "../images/afterEffects Logo.svg";
import { ReactComponent as IllustratorLogo } from "../images/illustrator Logo.svg";
import { ReactComponent as PremiereLogo } from "../images/premiere Logo.svg";
import StyledComponentsLogo from "../images/styled-components.png";

const tools = {
  reactJs: {
    id: 0,
    src: <ReactLogo />,
  },
  firebase: {
    id: 1,
    src: <FirebaseLogo />,
  },
  nodeJs: {
    id: 2,
    src: <NodeLogo />,
  },
  stripe: {
    id: 3,
    src: <StripeLogo />,
  },
  styledComponents: {
    id: 4,
    src: <img src={StyledComponentsLogo} alt="styled-Components" />,
  },
  sass: {
    id: 5,
    src: <SassLogo />,
  },
  framerMotion: {
    id: 6,
    src: <FramerMotionLogo />,
  },
  afterEffects: {
    id: 7,
    src: <AfterEffectsLogo />,
  },
  illustrator: {
    id: 8,
    src: <IllustratorLogo />,
  },
  premiere: {
    id: 9,
    src: <PremiereLogo />,
  },
};

const GetToolsData = (name) => {
  return tools[name] ? tools[name] : "no data";
};

export default GetToolsData;
