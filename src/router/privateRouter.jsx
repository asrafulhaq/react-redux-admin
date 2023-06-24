import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";

// create Private router
const privateRouter = [
  {
    element: <PageLayout />,
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
];

// export router
export default privateRouter;
