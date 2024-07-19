import CartaCapacitacion from "../components/CartaCapacitacion";
import NabBar from "../components/NabBar";
import "../stylesheets/Capacitaciones.css";

const Capacitaciones = () => {
  return (
      <section className="capacitaciones">
      <NabBar />
        <div className="capacitaciones__lista">
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
          <CartaCapacitacion />
        </div>
      </section>
  );
};

export default Capacitaciones;
