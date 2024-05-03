import "./index.css";

function ImagePlans(props) {
  // Usando propriedades para passar a informação de src e descrição da imagem.
  return <img className="imagePlans" src={props.src} alt={props.alt} />;
}
export default ImagePlans;
