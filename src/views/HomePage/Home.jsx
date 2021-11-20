import React from "react";
import Section from "../../components/Section";
import s from "../HomePage/Home.module.css";
import phone from "../../image/phone.jpg";
export default function Home() {
  return (
    <Section>
      <div className={s.home}>
        <div className={s.wrap}>
          <h1 className={s.title}>Phonebook</h1>
          <p className={s.text}>
            The phone book is your personal assistant. Add contacts of your
            friends, family, colleagues to always be in touch with them
          </p>
        </div>
        <img className={s.img} src={phone} alt="phone" />
      </div>
    </Section>
  );
}
