import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import Home from "../../components/Home";
import Plays from "../../components/Plays";
import About from "../../components/About";
import Contact from "../../components/Contact";
import { HOME_ROUTE, PLAYS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE } from "./config";

const MainRouter = ({ isAuth = false }) => {
  const basedPath: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home /> },
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACT_ROUTE, element: <Contact /> },
    { path: "*", element: <Navigate to={HOME_ROUTE} replace /> },
  ];

  const authPath: RouteObject[] = [{ path: PLAYS_ROUTE, element: <Plays /> }];

  const resultPaths: RouteObject[] = isAuth ? [...basedPath, ...authPath] : basedPath;

  return useRoutes(resultPaths);
};

export default MainRouter;
