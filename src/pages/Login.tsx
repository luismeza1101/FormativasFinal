import { FaArrowRight } from "react-icons/fa";
import "../stylesheets/Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (email && contraseña) {
      setMensaje("Inicio de sesión correcto");
      setEmail("");
      setContraseña("");
      navigate("/inicio");
    } else {
      setMensaje("Por favor, completa todos los campos");
    }
  };

  useEffect(() => {
    setTimeout(() => setMensaje(""), 1000);
  }, [mensaje]);

  return (
    <div className="login">
      <div className="login__logo"></div>
      <form className="login__form" onSubmit={handleLogin}>
        <h3 className="login__title">Bienvenido de nuevo!!</h3>
        <input
          className="login__input login__input--email"
          type="email"
          placeholder="Email"
          onChange={(evt) => setEmail(evt.target.value)}
          value={email}
        />
        <input
          className="login__input login__input--password"
          type="password"
          placeholder="Contraseña"
          onChange={(evt) => setContraseña(evt.target.value)}
          value={contraseña}
        />
        <p className="login__mensaje">{mensaje}</p>

        <button className="login__button" type="submit">
          Iniciar sesión
          <FaArrowRight className="login__icon" />
        </button>
      </form>
    </div>
  );
};

export default Login;
