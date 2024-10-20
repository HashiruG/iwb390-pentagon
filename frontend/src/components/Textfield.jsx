import { useState } from "react";
import style from "./css/Textfield.module.css";

export default function Textfield({ type, name, placeholder, onChange }) {
  return (
    <div>
      <input className={style.inputField}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
