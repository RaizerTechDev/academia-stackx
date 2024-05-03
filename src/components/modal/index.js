import React from "react";
import "./index.css";

function Modal({ onClose, children, isOpen }) {
  //Se estiver aberto
  if (!isOpen) {
    //Senão retorna nulo
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <span className="close" onClick={onClose}>
          Fechar
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
