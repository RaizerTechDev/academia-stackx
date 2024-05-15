import { useState } from "react";
import Button from "../button";
import Title from "../title";
import Subtitle from "../subtitle";
import ImagePlans from "../imagePlans";
import Modal from "../modal";
import Values from "../values";
import combo1 from "../../img/combo-01.gif";
import combo2 from "../../img/combo-02.gif";
import combo3 from "../../img/combo-03.gif";
import "./index.css";

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
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    combo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Adicionando o combo selecionado aos dados do formulário
    const comboSelected = listItems[selectedCombo].title; // Obtém o título do combo selecionado
    const updatedFormData = { ...formData, combo: comboSelected };

    const response = await fetch(
      "https://api.sheetmonkey.io/form/uM1Q7XZyF85NbpeU6wSwFB",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      }
    );

    if (response.ok) {
      //Chamando handlePurchase se o envio for bem-sucedido
      handlePurchase();
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed:", response.status);
    }
  };

  const handleOpenModal = (index) => {
    setSelectedCombo(index);
  };

  const handleCloseModal = () => {
    setSelectedCombo(null);
  };

  const handlePurchase = () => {
    alert(
      `Cadastro para o Combo ${
        selectedCombo + 1
      } realizado com sucesso, estaremos em contato em 24h`
    );
    handleCloseModal();
  };

  return (
    <div id="combos" className="plansAndPrices">
      {listItems.map(function (item, index) {
        return (
          <div key={index}>
            <div className="plansContainer">
              <Title className="title" title={item.title} />
              <Subtitle className="subtitle" subtitle={item.subtitle} />
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
                <div className="registerContainer">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="registerInput"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required="required"
                      placeholder="Digite seu nome"
                    />
                    <input
                      className="registerInput"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Digite seu e-mail"
                    />

                    <input
                      className="registerInput"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Digite seu número de telefone (com DDD)"
                    />

                    <Button
                      className="buttonRegister"
                      type="submit"
                      handlePurchase={handlePurchase}
                      text="Cadastrar"
                    />
                  </form>
                </div>
              </Modal>
            </div>
            <hr className="separator" />
          </div>
        );
      })}
    </div>
  );
}

export default PlansAndPrices;
