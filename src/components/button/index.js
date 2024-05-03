import React from "react";
import "./index.css";

function Button(props) {
  return (
    // Usando propriedades para passar o onClick
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
