import React from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";

export default function Contacts() {
  return (
    <>
      <h1 style={{ color: "#1976d2" }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ color: "#1976d2" }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
