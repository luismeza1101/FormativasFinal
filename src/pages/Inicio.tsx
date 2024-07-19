import NabBar from "../components/NabBar";
import '../stylesheets/Inicio.css'; 

const Inicio = () => {
  return (
    <>
      <NabBar /> 
      <main className="inicio">
        <h1 className="inicio__title">Bienvenido a Certus!!</h1>
        <div className="inicio__modal modal">
          <div className="modal__info">
            <h2 className="modal__info-title">Mostrar capacitaciones pendientes?</h2>
            <div className="modal__buttons">
              <button className="modal__button">Sí</button>
              <button className="modal__button">No</button>
            </div>
            <p className="modal__info-text">Capacitaciones pendientes: 5</p>
          </div>
          <div className="modal__image image_modal"></div>
        </div>
      </main>
    </>
  )
}

export default Inicio;
