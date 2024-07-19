import { FaArrowRight } from "react-icons/fa";
import "../stylesheets/CartaCapacitacion.css";
import { Capacitaciones } from "../types";
import { Link } from "react-router-dom";

const CartaCapacitacion: React.FC<Capacitaciones> = ({
  nombre,
  capacitador,
  duracion,
  id,
}) => {
  return (
    <div className="carta-capacitacion">
      <div className="carta-capacitacion__info">
        <h4 className="carta-capacitacion__nombre">{nombre}</h4>
        <h5 className="carta-capacitacion__capacitador">
          <span>Nombre Capacitador:</span> <br /> {capacitador}
        </h5>
        <h6 className="carta-capacitacion__duracion">Duración: {duracion}</h6>
        <Link to={`/capacitaciones/${id}`} className="carta-capacitacion__link">
          <button className="carta-capacitacion__boton">
            Inscribirse{" "}
            <FaArrowRight className="carta-capacitacion__boton--icon" />
          </button>
        </Link>
      </div>
      <div className="carta-capacitacion__imagen"></div>
    </div>
  );
};

export default CartaCapacitacion;
