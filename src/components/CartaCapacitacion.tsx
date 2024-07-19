import { FaArrowRight } from "react-icons/fa";
import "../stylesheets/CartaCapacitacion.css";

const CartaCapacitacion = () => {
  return (
    <div className="carta-capacitacion">
      <div className="carta-capacitacion__info">
        <h4 className="carta-capacitacion__nombre">Nombre capacitación</h4>
        <h5 className="carta-capacitacion__capacitador">
          Nombre Capacitador: <br /> Nombre
        </h5>
        <h6 className="carta-capacitacion__duracion">Duración: Tiempo</h6>
        <button className="carta-capacitacion__boton">
          Inscribirse{" "}
          <FaArrowRight className="carta-capacitacion__boton--icon" />
        </button>
      </div>
      <div className="carta-capacitacion__imagen"></div>
    </div>
  );
};

export default CartaCapacitacion;
