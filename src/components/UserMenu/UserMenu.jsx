import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/auth-operations";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import s from "../UserMenu/UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div>
      <IconButton
        className={s.userExit__btn}
        aria-label="delete"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        <ExitToAppIcon className={s.userExit__icon} fontSize="small" />
        <span className={s.userExit__text}>Exit</span>
      </IconButton>
    </div>
  );
}
