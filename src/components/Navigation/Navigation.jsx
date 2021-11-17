import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activated : s.nav)}
      >
        SignIn
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activated : s.nav)}
      >
        LogIn
      </NavLink>
    </div>
  );
}
