import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase-config";
import DataTable from 'react-data-table-component';

const Exercise11 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formData"));
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataList);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setError("Não foi possível carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
  ];

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Exercise 11</h1>
      <DataTable
        title="Dados do Formulário"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Exercise11;
