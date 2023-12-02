import React, { useState } from "react";
import Form from "../Components/Form";
import { useAppContext } from "../Provider/AppContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { state } = useAppContext();

  const handleSubmitForm = (formData) => {
    // Realizar validaciones aquí
    if (formData.fullName.length <= 5 || !isValidEmail(formData.email)) {
      setError("Please verify your information again.");
      return;
    }

    console.log("Data sent:", formData);

    setSuccessMessage(`Thank you ${formData.fullName}, we will contact you as soon as possible by email.`);
  };

  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={`content `}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onSubmit={handleSubmitForm} />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  )
}

export default Contact