import { Link } from "react-router-dom"

const LoginForm = () => {
  return (
    <section className='client-form section-p1 section-m1'>
      <h2>ACCEDE A TU CUENTA</h2>
      <p>¡Lorem ipsum dolor sit amet, consectetur!</p>
      <form>
        <input placeholder='Nombre de usuario' />
        <input placeholder='Contraseña' />
        <div className="btn-container">
          <div>
            <Link to="/">¿Haz olvidado tu contraseña?</Link>
            <p>¿No tienes una cuenta? <Link to="/register">Regístrarse</Link></p>
          </div>
          <button type='submit' className="normal">Acceder</button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm