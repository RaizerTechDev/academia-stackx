import React from "react";

 // Usando propriedades para o valor de cada Combo da academia
function Values(props) {
  return (
    <div>
      <h3 className={props.className}>{props.value}</h3>
    </div>
  );
}

export default Values;
