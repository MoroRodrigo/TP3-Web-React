// src/exercises/Exercise08.jsx
import React from "react";
import { useForm } from "react-hook-form";

const Exercise08 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <div>
      <h1>Exercise 08</h1>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email deve ser válido",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Telefone é obrigatório",
              pattern: {
                value: /^\d+$/,
                message: "Telefone deve conter apenas números",
              },
            })}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Exercise08;
