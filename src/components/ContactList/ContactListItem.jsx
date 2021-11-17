// import React, { useEffect } from "react";
import PropTypes from "prop-types";
import s from "../ContactList/ContactList.module.css";
import { deleteContact } from "../../redux/contacs/contacts-operations";
import { useDispatch } from "react-redux";

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={s.contact__item}>
      <div>
        <span className={s.contact__text}>{name}: </span>
        <span className={s.contact__text}>{number}</span>
      </div>
      <button
        className={s.contact__btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (id) => dispatch(deleteContact(id)),
// });
//  connect(null, mapDispatchToProps)(ContactListItem);
