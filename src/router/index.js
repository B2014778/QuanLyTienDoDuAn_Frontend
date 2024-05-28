import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
<<<<<<< HEAD
import ProfilePage from "../pages/ProfilePage/ProfilePage";
=======
import ProgressPage from "../pages/ProgressPage/ProgressPage";
>>>>>>> 50b732ec47d8936c4d2fe944dd14886d1677856b

const routes = [
  {
    path: "/",
    name: "HomePage",
    page: HomePage,
  },
  {
<<<<<<< HEAD
    path: "/profile",
    name: "ProfilePage",
    page: ProfilePage,
=======
    path: "/progress",
    name: "ProgressPage",
    page: ProgressPage,
>>>>>>> 50b732ec47d8936c4d2fe944dd14886d1677856b
  },
  {
    path: "*",
    name: "NotFoundPage",
    page: NotFoundPage,
  },
];

export { routes };
