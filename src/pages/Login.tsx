import { FaArrowRight } from "react-icons/fa";
import '../stylesheets/Login.css'

const Login = () => {
  return (
    <div className="login">
      <img className="login__logo" src="../../public/imgs/Logo.png" alt="Logo certus" />
      <form className="login__form" action="">
        <h3 className="login__title">Bienvenido de nuevo!!</h3>
        <input className="login__input login__input--email" type="email" placeholder="Email"/>
        <input className="login__input login__input--password" type="password" placeholder="Contraseña"/>
        <p className="login__mensaje"></p>
        <button className="login__button" type="submit">
          Iniciar sesión<FaArrowRight className="login__icon" />
        </button>
      </form>
    </div>
  )
}

export default Login;
