import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import Modal from "../../components/Modal/";
import Button from "@mui/material/Button";
import Section from "../../components/Section";
import s from "../ContactsPage/Contacts.module.css";
export default function Contacts() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((state) => !state);
  return (
    <Section>
      <h1 className={(s.title, s.hidden)}>Phonebook</h1>
      <Button
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          width: "100%",
          marginBottom: "5px",
        }}
        variant="outlined"
        onClick={toggleModal}
      >
        Create new contact
      </Button>
      {modal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSave={toggleModal} />
        </Modal>
      )}

      <h2 className={(s.title, s.hidden)}>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}
