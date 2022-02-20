import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Website } from "../images/website.svg";
import { ReactComponent as Youtube } from "../images/Play icon.svg";

import Button3D from "../components/utilities/Button3D";

const links = {
  github: {
    id: 0,
    src: <Github />,
    mainColor: "#6cc644",
    shadowColor1: "#5eac3c",
    shadowColor2: "#457c2d",
  },
  website: {
    id: 1,
    src: <Website />,
    mainColor: "#0e76a8",
    shadowColor1: "#0e6793",
    shadowColor2: "#0a4c6c",
  },
  youtube: {
    id: 2,
    src: <Youtube />,
    mainColor: "#FF0000",
    shadowColor1: "#a11d1d",
    shadowColor2: "#692525",
  },
};

const GetLinksData = (data) => {
  const name = data.type;
  return links[name] ? (
    <Button3D
      mainColor={links[name].mainColor}
      shadowColor1={links[name].shadowColor1}
      shadowColor2={links[name].shadowColor2}
      onClick={() => window.open(data.url, "_blank")}
      key={links[name].id}
    >
      {links[name].src}
    </Button3D>
  ) : (
    "no data"
  );
};

export default GetLinksData;
