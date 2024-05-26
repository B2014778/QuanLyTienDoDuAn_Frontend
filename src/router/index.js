import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    page: HomePage,
  },
  {
    path: "*",
    name: "NotFoundPage",
    page: NotFoundPage,
  },
];

export { routes };
