// src/exercises/Exercise03.jsx
import React, { useState } from "react";

const Exercise03 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!phone) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Telefone deve conter apenas números";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Nome:", name);
      console.log("Telefone:", phone);
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Exercise 03</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise03;
