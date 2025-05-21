import React, { useState } from "react";

function UserInput({ type, value, name, onChange }) {

  function handleChange(e) {
    onChange(name, e.target.value);
  }    

  return (
    <div>
      <label>{name}</label>
      <input type={type} value={value} name={name} onChange={handleChange}></input>
    </div>
  );
}

export default UserInput;
