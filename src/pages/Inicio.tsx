import NabBar from "../components/NabBar";
import '../stylesheets/Inicio.css'; 
import { Link } from "react-router-dom";
import { capacitacionesPendientes } from "../data";

const Inicio = () => {

  return (
      <main className="inicio">
      <NabBar /> 
        <h1 className="inicio__title">Bienvenido a Certus!!</h1>
        <div className="inicio__modal modal">
          <div className="modal__info">
            <h2 className="modal__info-title">Mostrar capacitaciones pendientes?</h2>
            <div className="modal__buttons">
              <Link to={'/capacitaciones'}><button className="modal__button">Si</button></Link>
              <Link to={'/'}><button className="modal__button">No</button></Link>
            </div>
            <p className="modal__info-text">Capacitaciones pendientes: {capacitacionesPendientes.length}</p>
          </div>
          <div className="modal__image image_modal"></div>
        </div>
      </main>
  )
}

export default Inicio;
