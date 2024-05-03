import React from "react";

// Usando propriedades para passar o onChange
function Input(props) {
  // Função array das propriedades
  const { type, onChange, placeholder, className } = props;
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
