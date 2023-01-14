import { Link } from "react-router-dom"
import { login } from "../../redux/apiCalls";

const LoginForm = ({ dispatch, username, password, setUsername, setPassword, isFetching, error }) => {

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <section className='client-form section-p1 section-m1'>
      <h2>ACCEDE A TU CUENTA</h2>
      <p>¡Lorem ipsum dolor sit amet, consectetur!</p>
      <form>
        <input placeholder='Nombre de usuario' onChange={(e) => setUsername(e.target.value)} />
        { error && <span>El usuario/email es incorrecto...</span> }
        <input placeholder='Contraseña' type="password" onChange={(e) => setPassword(e.target.value)} />
        { error && <span>La contraseña es incorrecta...</span> }
        <div className="btn-container">
          <div>
            <Link to="/">¿Haz olvidado tu contraseña?</Link>
            <p>¿No tienes una cuenta? <Link to="/register">Regístrarse</Link></p>
          </div>
          <button 
            type='submit' 
            className="normal" 
            onClick={handleLogin} 
            disabled={isFetching}
          >Acceder</button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm