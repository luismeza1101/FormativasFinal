import NabBar from "../components/NabBar";
import { FaArrowRight, FaCommentDots } from "react-icons/fa";
import '../stylesheets/InfoCapacitacion.css'
import { useParams } from "react-router-dom";
import { capacitacionesPendientes } from "../data";
import { useState } from "react";
import ModalEvaFinal from "../components/ModalEvaFinal";

const InfoCapacitacion = () => {
    const [comentario, setComentario] = useState('');
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const { id } = useParams();
    const capacitacion = capacitacionesPendientes.find(item => item.id === id);

    if (!capacitacion) {
        return <p>Capacitación no encontrada</p>;
      }

    const handleEvaluacionFinal = () => {
        capacitacion.progreso != 100 ? setMostrarAviso(true) : setMostrarAviso(false);
    }

  return (
    <>
        <section className="info-capacitacion">
          <NabBar />
          <div className="info-capacitacion__container">
            <div className="info-capacitacion__content">
              <h4 className="info-capacitacion__title">{capacitacion.nombre}</h4>
              <p className="info-capacitacion__descripcion">
                {capacitacion.descripcion}
              </p>
              <div className="info-capacitacion__capacitador">
                <img src="../../public/imgs/Capacitadora.png" alt="Foto del capacitador" className="info-capacitacion__capacitador-img" />
                <h5 className="info-capacitacion__capacitador-nombre">{capacitacion.capacitador}</h5>
                <span className="info-capacitacion__capacitador-role">Capacitadora</span>
              </div>
              <div className="info-capacitacion__botones">
                <button className="info-capacitacion__boton">Materiales<FaArrowRight className="info-capacitacion__boton--icon"/></button>
                <button className="info-capacitacion__boton" onClick={handleEvaluacionFinal}>Evaluación Final<FaArrowRight className="info-capacitacion__boton--icon"/></button>
              </div>
              <div className="info-capacitacion__bar-progreso">
                <input type="range" min={0} max={100} className="info-capacitacion__bar-progreso-input" value={capacitacion.progreso}/>
                <p className="info-capacitacion__bar-progreso-porcentaje">{capacitacion.progreso == 100 ? 'Completado': `${capacitacion.progreso}%`}</p>
              </div>
              {capacitacion.progreso == 100 ? <button className="info-capacitacion__boton" style={{width: '35%'}}>Descargar constancia de capacitacion <FaArrowRight className="info-capacitacion__boton--icon"/></button>: null}
              <div className="info-capacitacion__comentarios">
                <span className="info-capacitacion__comentarios-title">Comentarios</span>
                <textarea className="info-capacitacion__comentarios-input" value={comentario} onChange={evt => setComentario(evt.target.value)}></textarea>
                <FaCommentDots className="info-capacitacion__comentarios-icon" />
                <button className="info-capacitacion__comentarios-boton" onClick={() => setComentario('')}>Enviar</button>
              </div>
            </div>
            <div className="info-capacitacion__image"></div>
          </div>
        </section>
        {mostrarAviso ? <ModalEvaFinal setMostrarAviso={setMostrarAviso}/> : null}
    </>
  );
}

export default InfoCapacitacion;
