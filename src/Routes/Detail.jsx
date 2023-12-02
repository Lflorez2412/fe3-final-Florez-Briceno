import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Provider/AppContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!dentist) {
    return <p>Cargando...</p>;
  }

  return (
    <main className={`content `}>
      <h1>Detail Dentist id </h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </main>
  )
}

export default Detail