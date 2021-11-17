import React, { useState } from "react";
import s from "../ContactForm/ContactForm.module.css";
import { addContact } from "../../redux/contacs/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacs/contacts-selectors";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(` ${name} already in contacts`)
      : dispatch(addContact({ name, number }));
    console.log(contacts);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInput}
        />
      </label>
      <label className={s.form__label}>
        Number
        <input
          className={s.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInput}
        />
      </label>
      <button className={s.form__btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
