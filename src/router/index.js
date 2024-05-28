import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    page: HomePage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    page: ProfilePage,
  },
  {
    path: "*",
    name: "NotFoundPage",
    page: NotFoundPage,
  },
];

export { routes };
