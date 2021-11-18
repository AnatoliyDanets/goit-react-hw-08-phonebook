import React, { useState } from "react";
import s from "../RegisterPage/Register.module.css";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/auth/auth-operations";
import { Button, TextField } from "@mui/material";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
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
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    dispatch(authUser({ name, email, password }));

    reset();
  };

  const reset = () => {
    setName("");
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
        id="standard-login-input"
        label="Login"
        type="text"
        name="name"
        autoComplete="current-password"
        variant="standard"
        value={name}
        onChange={handleInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        margin="normal"
      />
      <TextField
        sx={{
          marginTop: "0px",
          marginBottom: "20px",
        }}
        id="standard-email-input"
        label=" E-mail"
        type="text"
        name="email"
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
        onChange={handleInput}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Registration
      </Button>
    </form>
  );
}
