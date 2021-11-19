import React from "react";
import s from "../Filter/Filter.module.css";
import { filterList } from "../../redux/contacs/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacs/contacts-selectors";
import { TextField } from "@mui/material";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h3 className={(s.title, s.hidden)}>Find contact</h3>
      <TextField
        sx={{ marginBottom: "5px" }}
        id="standard-search"
        label=" Find contacts by name"
        type="text"
        value={value}
        onChange={(e) => dispatch(filterList(e.currentTarget.value))}
        variant="standard"
      />
    </>
  );
}
