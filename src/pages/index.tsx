import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const Search = lazy(() => import("./search/Search"));
const Saved = lazy(() => import("./saved/saved"));
const MoviesDetail = lazy(() => import("./movies-detail/MoviesDetail"));
const PersonDetail = lazy(() => import("./person-detail/PersonDetail"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/saved",
          element: <Saved />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/movie/:id",
          element: <MoviesDetail />,
        },
        {
          path: "/person/:id",
          element: <PersonDetail />,
        }
      ],
    },
  ]);
};

export default MainRouter;
