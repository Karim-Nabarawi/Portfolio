import crownImg1 from "../images/screenshots/crown/crown homepage.png";
import crownImg2 from "../images/screenshots/crown/crown shop.png";
import crownImg3 from "../images/screenshots/crown/crown sneakers.png";
import crownImg4 from "../images/screenshots/crown/crown cart.png";
import crownImg5 from "../images/screenshots/crown/crown checkout.png";
import crownImg6 from "../images/screenshots/crown/crown signin.png";

const projects = {
  crown: {
    id: 0,
    images: [crownImg1, crownImg2, crownImg3, crownImg4, crownImg5, crownImg6],
    title: "Crown",
    description:
      "E-Commerce for cloth shop built using Reactjs for forntend with Redux as state managment and Nodejs for backend.",
    tools: ["reactJs", "firebase", "nodeJs", "stripe", "styledComponents"],
    links: [
      { type: "github", url: "https://github.com/Karim-Nabarawi/E-Commerce" },
      { type: "website", url: "https://cown-clothing.herokuapp.com/" },
    ],
  },
};

const GetProjectData = (name) => {
  return projects[name] ? projects[name] : "no data";
};

export default GetProjectData;
