import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/auth-operations";
import s from "../views/ContactForm.module.css";

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
      <label className={s.form__label}>
        E-mail
        <input
          className={s.form__input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          // required
          value={email}
          onChange={handleInput}
        />
      </label>

      <label className={s.form__label}>
        Password
        <input
          className={s.form__input}
          type="text"
          name="password"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          //   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          // required
          value={password}
          onChange={handleInput}
        />
      </label>
      <button className={s.form__btn} type="submit">
        LogIn
      </button>
    </form>
  );
}
