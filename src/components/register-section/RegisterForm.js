import { Link } from "react-router-dom"

const RegisterForm = () => {
  return (
    <section className='client-form section-p1 section-m1'>
      <h2>CREA TU CUENTA</h2>
      <p>Únete para acceder a nuestras mejores ofertas</p>
      <form>
        <input placeholder='Nombre de usuario' />
        <input placeholder='Email' />
        <input placeholder='Contraseña' />
        <input placeholder='Confirmar contraseña' />
        <div>
          <input type="checkbox" />
          <label>Quiero recibir notificaciones sobre actualizaciones y nuevas ofertas.</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Al crear una cuenta, doy mi consentimiento para el tratamiento de mis datos personales de conformidad con la <b>POLÍTICA DE PRIVACIDAD</b>.</label>
        </div>
        <div className="btn-container">
          <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
          <button type='submit' className="normal">Regístrarse</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm