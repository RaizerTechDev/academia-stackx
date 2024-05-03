import React, { useState } from "react";
import Title from "../title";
import ImagePlans from "../imagePlans";
import Button from "../button";
import Modal from "../modal";
import Register from "../register";
import Values from "../values";
import combo1 from "../../img/combo-01.gif";
import combo2 from "../../img/combo-02.gif";
import combo3 from "../../img/combo-03.gif";
import "./index.css";

//Criar as listas com array
const listItems = [
  {
    title: "Combo 1",
    subtitle: "Cardio Kickboxing Blast",
    src: combo1,
    alt: "Descrição de imagem",
    value: "85,99",
  },
  {
    title: "Combo 2",
    subtitle: "Pilates Power Hour",
    src: combo2,
    alt: "Descrição de imagem",
    value: "115,99",
  },
  {
    title: "Combo 3",
    subtitle: "Cycling & Upper Body Sculp",
    src: combo3,
    alt: "Descrição de imagem",
    value: "145,99",
  },
];

function PlansAndPrices() {
  const [selectedCombo, setSeletedCombo] = useState(null);

  const handleOpenModal = (index) => {
    setSeletedCombo(index);
  };

  const handleCloseModal = () => {
    setSeletedCombo(null);
  };

  const handlePurchase = () => {
    alert(
      `Cadastro para o Combo ${
        selectedCombo + 1
      } realizado com sucesso, estraremos em contato em 24h
      `
    );
    handleCloseModal();
  };

  return (
    <div id="combos" className="plansAndPrices">
      {listItems.map(function (item, index) {
        return (
          <div>
            <div className="plansContainer">
              <Title className="title" title={item.title} />
              <ImagePlans src={item.src} alt={item.alt} />
              <Values className="values" value={item.value} />
            </div>
            <div className="modal">
              <Button
                className="buttonBuy"
                onClick={() => handleOpenModal(index)}
                text="Comprar"
              />
              <Modal
                onClose={handleCloseModal}
                isOpen={selectedCombo === index}
              >
                <Register />
                <Button
                  className="buttonRegister"
                  type="submit"
                  onClick={handlePurchase}
                  text="Cadastrar"
                />
              </Modal>
            </div>
            <hr class="separator" />
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
