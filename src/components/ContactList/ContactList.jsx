import React, { useEffect } from "react";
import LoaderComponent from "../Loader/Loader";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import s from "../ContactList/ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getVisibleContacts,
  getLoading,
} from "../../redux/contacs/contacts-selectors";
import { fetchContacts } from "../../redux/contacs/contacts-operations";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const loader = useSelector(getLoading);
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      <div style={{ height: "12px", marginBottom: "5px" }}>
        <h3 className={s.hidden}>Loader</h3>
        {loader && <LoaderComponent />}
      </div>
      <h3 className={(s.title, s.hidden)}>List of contacts</h3>
      {contacts.length > 0 ? (
        <ul className={s.contact}>
          {contacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
        </ul>
      ) : (
        <p>Not contacts</p>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
