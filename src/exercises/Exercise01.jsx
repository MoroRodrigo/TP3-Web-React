// src/exercises/Exercise01.jsx
import React, { useState } from "react";

const Exercise01 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome:", name);
    console.log("Telefone:", phone);
  };

  return (
    <div>
      <h1>Exercise 01</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise01;
