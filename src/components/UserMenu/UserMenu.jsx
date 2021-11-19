import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div>
      <IconButton
        sx={{
          display: "flex",
          color: "#fff",
          "&:hover": {
            color: "rgb(219, 223, 20)",
          },
          padding: "0px",
        }}
        aria-label="delete"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        <ExitToAppIcon fontSize="small" />
        <span style={{ marginLeft: "5px" }}>Exit</span>
      </IconButton>
    </div>
  );
}
