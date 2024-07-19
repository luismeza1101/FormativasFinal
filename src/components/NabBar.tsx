import { Link } from "react-router-dom";
import "../stylesheets/NavBar.css";

const NabBar = () => {
  return (
    <nav className="navbar">
      <img
        className="navbar__logo"
        src="../../public/imgs/Logo.png"
        alt="Logo de certus"
      />
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={"/inicio"} className="navbar__item--link">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={"/capacitaciones"} className="navbar__item--link">
            Capacitaciones
          </Link>
        </li>
      </ul>
      <div className="navbar__usuario">
        <h4 className="navbar__usuario-name">Pedro Navaja</h4>
        <span className="navbar__usuario-role">Profesor</span>
        <img
          className="navbar__usuario-photo"
          src="../../public/imgs/Profesor.jpeg"
          alt="Foto de profesor"
        />
      </div>
    </nav>
  );
};

export default NabBar;
