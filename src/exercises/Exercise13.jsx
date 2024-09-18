// src/exercises/Exercise13.jsx
import React, { useEffect, useState } from "react";
import { db, collection, getDocs, deleteDoc, doc } from "../firebase-config";
import DataTable from 'react-data-table-component';
import { useForm } from "react-hook-form";

const Exercise13 = () => {
  const [data, setData] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formData"));
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataList);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleRowSelected = (state) => {
    const row = state.selectedRows[0];
    if (row) {
      setSelectedRow(row);
      // Carrega os dados da linha selecionada no formulário
      setValue("name", row.name);
      setValue("email", row.email);
      setValue("phone", row.phone);
    }
  };

  const handleDelete = async () => {
    if (selectedRow) {
      try {
        // Remove o documento do Firestore
        await deleteDoc(doc(db, "formData", selectedRow.id));
        // Atualiza a lista de dados
        setData(prevData => prevData.filter(item => item.id !== selectedRow.id));
        setSelectedRow(null);
      } catch (error) {
        console.error("Erro ao excluir o registro:", error);
      }
    }
  };

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    // Aqui você pode adicionar a lógica para atualizar os dados no Firestore
  };

  const columns = [
    {
      name: 'Nome',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Ações',
      cell: row => (
        <button onClick={() => setSelectedRow(row)}>Selecionar</button>
      ),
    },
  ];

  return (
    <div>
      <h1>Exercise 13</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Nome é obrigatório" })}
          />
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
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleDelete}>Excluir</button>
      </form>
      <DataTable
        title="Dados do Formulário"
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        pagination
      />
    </div>
  );
};

export default Exercise13;
