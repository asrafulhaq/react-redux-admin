import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicGard = () => {
  const { user } = useSelector((state) => state.auth);

  if (localStorage.getItem("user")) {
    return user ? <Navigate to="/" /> : <Outlet />;
  }

  return <Outlet />;
};

export default PublicGard;
