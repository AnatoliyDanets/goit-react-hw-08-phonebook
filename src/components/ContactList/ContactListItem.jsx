// import React, { useEffect } from "react";
import PropTypes from "prop-types";
import s from "../ContactList/ContactList.module.css";
import { deleteContact } from "../../redux/contacs/contacts-operations";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={s.contact__item}>
      <div className={s.contact__wrapper}>
        <span className={s.contact__text}>{name}: </span>
        <a className={s.contact__link} href={`tel:${number}`} aria-label="call">
          <span className={s.contact__text}>{number}</span>
        </a>
      </div>

      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <DeleteIcon
          fontSize="large"
          sx={{ color: "#2196f3;", display: "flex" }}
        />
      </IconButton>
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
