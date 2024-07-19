import NabBar from "../components/NabBar";
import { FaArrowRight, FaCommentDots } from "react-icons/fa";
import '../stylesheets/InfoCapacitacion.css'

const InfoCapacitacion = () => {
  return (
    <section className="info-capacitacion">
      <NabBar />
      <div className="info-capacitacion__container">
        <div className="info-capacitacion__content">
          <h4 className="info-capacitacion__title">Nombre de Capacitación</h4>
          <p className="info-capacitacion__descripcion">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure eius repellat cum tenetur, maxime excepturi cupiditate itaque voluptatibus sint, laudantium voluptatem ullam tempora recusandae neque nesciunt maiores officiis praesentium!
          </p>
          <div className="info-capacitacion__capacitador">
            <img src="../../public/imgs/Capacitadora.png" alt="Foto del capacitador" className="info-capacitacion__capacitador-img" />
            <h5 className="info-capacitacion__capacitador-nombre">Hanna Morales</h5>
            <span className="info-capacitacion__capacitador-role">Capacitadora</span>
          </div>
          <div className="info-capacitacion__botones">
            <button className="info-capacitacion__boton">Materiales<FaArrowRight className="info-capacitacion__boton--icon"/></button>
            <button className="info-capacitacion__boton">Evaluación Final<FaArrowRight className="info-capacitacion__boton--icon"/></button>
          </div>
          <div className="info-capacitacion__bar-progreso">
            <input type="range" min={0} max={100} className="info-capacitacion__bar-progreso-input" />
            <p className="info-capacitacion__bar-progreso-porcentaje">50%</p>
          </div>
          <div className="info-capacitacion__comentarios">
            <span className="info-capacitacion__comentarios-title">Comentarios</span>
            <textarea className="info-capacitacion__comentarios-input"></textarea>
            <FaCommentDots className="info-capacitacion__comentarios-icon" />
            <button className="info-capacitacion__comentarios-boton">Enviar</button>
          </div>
        </div>
        <div className="info-capacitacion__image"></div>
      </div>
    </section>
  );
}

export default InfoCapacitacion;
