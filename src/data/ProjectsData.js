import crownImg1 from "../images/screenshots/crown/crown homepage.png";
import crownImg2 from "../images/screenshots/crown/crown shop.png";
import crownImg3 from "../images/screenshots/crown/crown sneakers.png";
import crownImg4 from "../images/screenshots/crown/crown cart.png";
import crownImg5 from "../images/screenshots/crown/crown checkout.png";
import crownImg6 from "../images/screenshots/crown/crown signin.png";
import waveImg1 from "../images/screenshots/wave/wave Homepage.png";
import waveImg2 from "../images/screenshots/wave/wave menu.png";
import waveImg3 from "../images/screenshots/wave/wave playing.png";
import captureImg1 from "../images/screenshots/capture/capture homepage.png";
import captureImg2 from "../images/screenshots/capture/capture work.png";
import captureImg3 from "../images/screenshots/capture/capture example.png";
import wormsImg1 from "../images/screenshots/worms/worms1.png";
import wormsImg2 from "../images/screenshots/worms/worms2.png";
import wormsImg3 from "../images/screenshots/worms/worms3.png";
import igniteImg1 from "../images/screenshots/ignite/ignite Homepage.png";
import igniteImg2 from "../images/screenshots/ignite/ignite gameDetails.png";
import igniteImg3 from "../images/screenshots/ignite/ignite search.png";

const projects = {
  Crown: {
    id: 0,
    images: [crownImg1, crownImg2, crownImg3, crownImg4, crownImg5, crownImg6],
    title: "Crown",
    subTitle: "E-commerce for cloth shop",
    description:
      "E-Commerce for cloth shop built using Reactjs for frontend with Redux as state managment and Nodejs for backend.",
    tools: ["reactJs", "firebase", "nodeJs", "stripe", "styledComponents"],
    links: [
      { type: "github", url: "https://github.com/Karim-Nabarawi/E-Commerce" },
      { type: "website", url: "https://cown-clothing.herokuapp.com/" },
    ],
  },
  Wave: {
    id: 1,
    images: [waveImg1, waveImg2, waveImg3],
    title: "Wave",
    subTitle: "Online music player",
    description: "An online music player using Reactjs for frontend",
    tools: ["reactJs", "sass"],
    links: [
      { type: "github", url: "https://github.com/Karim-Nabarawi/Music-app" },
      { type: "website", url: "https://muswave.herokuapp.com/" },
    ],
  },
  Capture: {
    id: 2,
    images: [captureImg1, captureImg2, captureImg3],
    title: "Capture",
    subTitle: "Photographer Portofolio",
    description: "An online music player using Reactjs for frontend",
    tools: ["reactJs", "sass", "framerMotion"],
    links: [
      { type: "github", url: "https://github.com/Karim-Nabarawi/Capture" },
      { type: "website", url: "https://karim-nabarawi.github.io/Capture/#/" },
    ],
  },
  Worms: {
    id: 3,
    images: [wormsImg1, wormsImg2, wormsImg3],
    title: "Worms",
    subTitle: "Animation about purpose of worms",
    video: "https://www.youtube.com/embed/qry-ntltHnU",
    description:
      "Youtube video discussing why did god create worms in earth using Adobe illustrator, Adobe After effects & Adobe Premiere",
    tools: ["afterEffects", "illustrator", "premiere"],
    links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=qry-ntltHnU" }],
  },
  Ignite: {
    id: 4,
    images: [igniteImg1, igniteImg2, igniteImg3],
    title: "Ignite",
    subTitle: "Games news",
    description: "Games news and search using rawg api, Reactjs for frontend and Redux for state management",
    tools: ["reactJs", "styledComponents", "framerMotion"],
    links: [
      { type: "github", url: "https://github.com/Karim-Nabarawi/ignite" },
      { type: "website", url: "https://ignite47.herokuapp.com/" },
    ],
  },
};

const GetProjectData = (name) => {
  if (name === "all") return Object.values(projects);
  return projects[name] ? projects[name] : "no data";
};

export default GetProjectData;
