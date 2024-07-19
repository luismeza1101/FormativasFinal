import CartaCapacitacion from "../components/CartaCapacitacion";
import NabBar from "../components/NabBar";
import { capacitacionesPendientes } from "../data";
import "../stylesheets/Capacitaciones.css";

const Capacitaciones = () => {
  return (
      <section className="capacitaciones">
        <NabBar />
        <div className="capacitaciones__lista">
          {capacitacionesPendientes.map( capacitacion => (
            <CartaCapacitacion key={capacitacion.id} nombre={capacitacion.nombre} capacitador={capacitacion.capacitador} duracion={capacitacion.duracion}  id={capacitacion.id} descripcion={capacitacion.descripcion} progreso={capacitacion.progreso}/>
          ))}
        </div>
      </section>
  );
};

export default Capacitaciones;
