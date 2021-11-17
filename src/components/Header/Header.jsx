import Navigation from "../Navigation/Navigation";
import s from "../Header/Header.module.css";
import { getAuth } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import Home from "../../views/Home";

export default function Header() {
  const isAuth = useSelector(getAuth);
  return (
    <header className={s.header}>
      <Home />
      {isAuth ? <UserMenu /> : <Navigation />}
    </header>
  );
}
