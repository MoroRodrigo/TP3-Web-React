// src/exercises/Exercise15.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Exercise15 = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const auth = getAuth();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // Redirecionar ou mostrar mensagem de sucesso
      alert("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("E-mail ou senha inválidos.");
    }
  };

  return (
    <div>
      <h1>Exercise 15 - Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Senha é obrigatória" })}
          />
        </div>
        <button type="submit">Entrar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Exercise15;
