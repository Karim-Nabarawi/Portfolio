import { useRoutes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

const GetRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    {
      path: "projects/",
      children: [
        { path: "", element: <ProjectsPage /> },
        { path: ":name", element: <ProjectPage /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);
  return routes;
};

export default GetRoutes;
