import { useState } from "react";
import Input from "../input";

import "./index.css";

function Register() {
  //Criar as listas com array
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://api.sheetmonkey.io/form/uM1Q7XZyF85NbpeU6wSwFB",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      // Handle success (optional)
      console.log("Form submitted successfully!");

      setFormData(initialFormData); // Reset form after successful submission
    } else {
      // Handle error
      console.error("Form submission failed:", response.status);
    }
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <Input
          className="registerInput"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Digite seu nome"
        />
        <Input
          className="registerInput"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Digite seu e-mail"
        />

        {/* Campo para o número de telefone */}
        <Input
          className="registerInput"
          type="tel"
          id="phone"
          name="phone"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Digite seu número de telefone (com DDD)"
        />       
      </form>
    </div>
  );
}

export default Register;
