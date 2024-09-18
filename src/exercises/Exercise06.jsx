// src/exercises/Exercise06.jsx
import React from "react";
import { useForm } from "react-hook-form";

const Exercise06 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Exibe os dados do formulário como JSON no console
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>Exercise 06</h1>
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

export default Exercise06;
