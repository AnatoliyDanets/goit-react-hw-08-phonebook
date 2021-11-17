import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { getUsername } from "../../redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div>
      <span style={{ color: "white" }}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
