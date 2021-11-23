import React, { useState } from "react";
import s from "../ContactForm/ContactForm.module.css";
import { addContact } from "../../redux/contacs/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacs/contacts-selectors";
import { Button, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Box } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { toast } from "react-toastify";

export default function ContactForm({ onSave }) {
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
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} already in contacts`);
    } else if (contacts.find((contact) => contact.number === number)) {
      toast.error(
        `This ${number} belongs to contact ${
          contacts.find((contact) => contact.number === number).name
        }`
      );
    } else {
      dispatch(addContact({ name, number }));
    }

    onSave();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccountCircle
          sx={{ color: "action.active", mr: 1, my: 0.5, marginBottom: "10px" }}
        />
        <TextField
          sx={{
            marginTop: "0px",
            marginBottom: "20px",
          }}
          id="input-with-sx"
          label="Name"
          variant="standard"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleInput}
          margin="normal"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <LocalPhoneIcon
          sx={{ color: "action.active", mr: 1, my: 0.5, marginBottom: "10px" }}
        />
        <TextField
          sx={{
            marginTop: "0px",
            marginBottom: "20px",
          }}
          id="input-with-sx"
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInput}
          variant="standard"
          margin="normal"
        />
      </Box>
      <Button variant="contained" type="submit">
        Add Contact
      </Button>
      {/* <button className={s.form__btn} type="submit">
        Add Contact
      </button> */}
    </form>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
