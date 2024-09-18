import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase-config";

const Exercise10 = () => {
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

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Exercise 10</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p><strong>Nome:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Telefone:</strong> {item.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
