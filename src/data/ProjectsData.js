const projects = {
  crown: {
    id: 0,
    img: [],
    description: "",
    tools: [],
    links: [
      { type: "github", url: "" },
      { type: "website", url: "" },
    ],
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
};

const GetProjectData = (name) => {
  return projects[name] ? projects[name] : "no data";
};

export default GetProjectData;
