import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProgressPage from "../pages/ProgressPage/ProgressPage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    page: HomePage,
  },
  {
    path: "/progress",
    name: "ProgressPage",
    page: ProgressPage,
  },
  {
    path: "*",
    name: "NotFoundPage",
    page: NotFoundPage,
  },
];

export { routes };
