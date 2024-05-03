import React from "react";

// Usando propriedades para passar a informação.
function SubTitle(props) {
  return <h2 className="subtitle">{props.subtitle}</h2>;
}
export default SubTitle;