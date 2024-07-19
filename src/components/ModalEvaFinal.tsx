import '../stylesheets/ModalEvaFinal.css'

interface Props {
    setMostrarAviso: (aviso: boolean) => void
}

const ModalEvaFinal: React.FC<Props> = ({setMostrarAviso}) => {
  return (
    <div className="modal-evaluacion-overlay">
      <div className="modal-evaluacion">
        <img src="../../public/imgs/Logo.png" alt="Logo" className="modal-evaluacion__logo" />
        <p className="modal-evaluacion__aviso">
          Debe completar el 100% de la duración de la capacitación
        </p>
        <button className='modal-evaluacion__boton info-capacitacion__boton' onClick={() => setMostrarAviso(false)}>X</button>
      </div>
    </div>
  )
}

export default ModalEvaFinal
