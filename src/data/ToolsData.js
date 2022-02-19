import { ReactComponent as ReactLogo } from "../images/React Logo.svg";
import { ReactComponent as FirebaseLogo } from "../images/Firebase Logo.svg";
import { ReactComponent as NodeLogo } from "../images/Node.js logo.svg";
import { ReactComponent as StripeLogo } from "../images/Stripe Logo.svg";
import { ReactComponent as SassLogo } from "../images/Sass Logo.svg";
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
};

const GetToolsData = (name) => {
  return tools[name] ? tools[name] : "no data";
};

export default GetToolsData;
