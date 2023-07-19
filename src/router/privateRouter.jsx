import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";
import PrivateGard from "./PrivateGard";
// create Private router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },

          {
            path: "/users",
            element: <User />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
