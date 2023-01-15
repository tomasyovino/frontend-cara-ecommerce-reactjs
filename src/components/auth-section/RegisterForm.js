import { Link } from "react-router-dom";
import { publicRequest } from "../../api/request";
import { useNavigate } from "react-router";

const RegisterForm = ({ registeredUser, setRegisteredUser, fieldsAreEmpty, setFieldsAreEmpty, privacyPolicy, setPrivacyPolicy }) => {
  const navigate = useNavigate();

  const inputsHandler = (e) => {
    setRegisteredUser((prev) => {
      return { ...prev, [e.target.name]:e.target.value };
    });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      if(
        registeredUser.firstName !== "" &&
        registeredUser.lastName !== "" &&
        registeredUser.username !== "" &&
        registeredUser.email !== "" &&
        registeredUser.address !== "" &&
        registeredUser.password !== "" &&
        registeredUser.confirmPassword === registeredUser.password &&
        privacyPolicy
      ) {
        setFieldsAreEmpty(false);
        await publicRequest.post("auth/register", registeredUser);
        setRegisteredUser({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          address: "",
          password: "",
          confirmPassword: ""
        });
        navigate("/login", { replace: true })
      } else {
        setFieldsAreEmpty(true);
      };
    } catch (err) {
      console.log(err)
    };
  };

  return (
    <section className='client-form section-p1 section-m1'>
      <h2>CREA TU CUENTA</h2>
      <p>Únete para acceder a nuestras mejores ofertas</p>
      <form>
        <input name="firstName" placeholder='Nombre' onChange={inputsHandler} value={registeredUser.firstName} />
        <input name="lastName" placeholder='Apellido' onChange={inputsHandler} value={registeredUser.lastName} />
        <input name="username" placeholder='Nombre de usuario' onChange={inputsHandler} value={registeredUser.username} />
        <input name="email" placeholder='Email' onChange={inputsHandler} value={registeredUser.email} />
        <input name="address" placeholder='Dirección' onChange={inputsHandler} value={registeredUser.address} />
        <input name="password" type="password" placeholder='Contraseña' onChange={inputsHandler} value={registeredUser.password} />
        <input name="confirmPassword" type="password" placeholder='Confirmar contraseña' onChange={inputsHandler} value={registeredUser.confirmPassword} />
        { registeredUser.password !== registeredUser.confirmPassword ? <span>* Las contraseñas no coinciden</span> : null }
        <div>
          <input type="checkbox" />
          <label>Quiero recibir notificaciones sobre actualizaciones y nuevas ofertas.</label>
        </div>
        <div>
          <input type="checkbox" onClick={() => setPrivacyPolicy(!privacyPolicy)} />
          <label>Al crear una cuenta, doy mi consentimiento para el tratamiento de mis datos personales de conformidad con la <b>POLÍTICA DE PRIVACIDAD</b>.</label>
        </div>
        { !privacyPolicy && <span>* Para continuar debe aceptar nuestra POLÍTICA DE PRIVACIDAD</span> }
        { fieldsAreEmpty &&  <span>* Complete todos los campos de registro</span> }
        <div className="btn-container">
          <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
          <button type='submit' className="normal" onClick={registerHandler}>Regístrarse</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm