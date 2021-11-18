import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/auth-operations";
import s from "../LoginPage/Login.module.css";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        sx={{
          marginTop: "0px",
          marginBottom: "20px",
        }}
        id="standard-email-input"
        label=" E-mail"
        type="text"
        name="name"
        autoComplete="current-password"
        variant="standard"
        value={email}
        onChange={handleInput}
        required
        margin="normal"
      />
      <TextField
        sx={{
          marginTop: "0px",
          marginBottom: "20px",
        }}
        id="standard-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        variant="standard"
        value={password}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        onChange={handleInput}
        required
        margin="normal"
      />
      <Button variant="contained" type="submit">
        LogIn
      </Button>
    </form>
  );
}
