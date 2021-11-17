import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getAuth } from "../redux/auth/auth-selectors";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const isAuth = useSelector(getAuth);

  return isAuth ? children : <Navigate to={redirectTo} />;
}
