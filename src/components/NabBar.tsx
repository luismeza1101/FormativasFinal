import { Link } from "react-router-dom";
import "../stylesheets/NavBar.css";

const NabBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"></div>
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
        <div className="navbar__usuario-photo"></div>
      </div>
    </nav>
  );
};

export default NabBar;
