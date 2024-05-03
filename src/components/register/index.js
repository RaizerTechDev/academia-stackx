import { useState } from "react";
import Input from "../input";

import "./index.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <Input
          className="registerInput"
          type="text"
          required
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          className="registerInput"
          type="email"
          required
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* Campo para o número de telefone */}
        <Input
          className="registerInput"
          type="tel"
          required
          placeholder="Digite seu número de telefone (com DDD)"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </form>
    </div>
  );
}
export default Register;
