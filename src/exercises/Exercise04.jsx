// src/exercises/Exercise04.jsx
import React from "react";
import { useForm } from "react-hook-form";

const Exercise04 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Nome:", data.name);
    console.log("Telefone:", data.phone);
  };

  return (
    <div>
      <h1>Exercise 04</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: "Telefone é obrigatório" })}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise04;
