import { NavLink } from "react-router-dom";
import s from "../components/Navigation/Navigation.module.css";
import { useSelector } from "react-redux";
import { getAuth } from "../redux/auth/auth-selectors";

export default function Home() {
  const isAuth = useSelector(getAuth);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activated : s.nav)}
      >
        Home
      </NavLink>
      {isAuth && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.activated : s.nav)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
