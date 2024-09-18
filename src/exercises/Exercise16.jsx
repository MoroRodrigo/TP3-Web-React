// src/exercises/Exercise16.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Exercise16 = () => {
  const [address, setAddress] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${data.cep}/json/`);
      if (response.data.erro) {
        setErrorMessage("CEP não encontrado.");
        setAddress(null);
      } else {
        setAddress(response.data);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setErrorMessage("Erro ao buscar o endereço.");
      setAddress(null);
    }
  };

  return (
    <div>
      <h1>Exercise 16 - Consulta de CEP</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            {...register("cep", {
              required: "CEP é obrigatório",
              pattern: {
                value: /^[0-9]{5}-?[0-9]{3}$/,
                message: "CEP deve ser válido",
              },
            })}
          />
        </div>
        <button type="submit">Consultar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      {address && (
        <div>
          <h2>Endereço</h2>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise16;
