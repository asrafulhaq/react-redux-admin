import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// create public router
const publicRouter = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
];

// export router
export default publicRouter;
