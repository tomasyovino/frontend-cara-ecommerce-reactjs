import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import {  ModalComponent } from "../"
import { userRequest } from '../../api/request';
import { logout } from '../../redux/apiCalls';

const ProfileData = ({ user, dispatch }) => {
  const [ updateUserModal, setUpdateUserModal ] = useState(false);
  const [ updatePasswordModal, setUpdatePasswordModal ] = useState(false);
  const [ fieldsAreEmpty, setFieldsAreEmpty ] = useState(false);
  const [ updateUser, setUpdateUser ] = useState({
    username: "",
    email: "",
    address: ""
  });
  const [ updatePassword, setUpdatePassword ] = useState({
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    setUpdateUser({
      username: user.username,
      email: user.email,
      address: user.address
    });
  }, [user.username, user.email, user.address])
  
  
  const logoutHandler = async () => {
    logout(dispatch)
  };

  const inputsHandler = (e, setState) => {
    setState((prev) => {
      return { ...prev, [e.target.name]:e.target.value };
    });
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      if(
        updateUser.username !== "" &&
        updateUser.email !== "" &&
        updateUser.address !== ""
      ) {
        setFieldsAreEmpty(false);
        await userRequest.put(`user/${user._id}`, updateUser);
        setUpdateUser({
          username: user.username,
          email: user.email,
          address: user.address
        });
        navigate("/", { replace: true });
      } else {
        setFieldsAreEmpty(true);
      };
    } catch (err) {
      console.log(err)
    };
  };

  const updatePasswordHandler = async (e) => {
    e.preventDefault(e);
    try {
      if(
        updatePassword.password !== "" &&
        updatePassword.confirmPassword !== "" &&
        updatePassword.password === updatePassword.confirmPassword
      ) {
        setFieldsAreEmpty(false);
        await userRequest.put(`user/${user._id}`, updatePassword);
        setUpdatePassword({
          password: "",
          confirmPassword: ""
        });
        navigate("/", { replace: true });
      } else {
        setFieldsAreEmpty(true);
      };
    } catch (err) {
      console.log(err)
    };
  };

  return (
    <div className='profile-data'>
      { user &&
          <div className='data-container'>
            <div className='user-data'>
              <div>
                <strong>Nombre:</strong>
                <span>{user.fullName}</span>
              </div>
              <div>
                <strong>Usuario:</strong>
                <span>{user.username}</span>
              </div>
              <div>
                <strong>Email:</strong>
                <span>{user.email}</span>
              </div>
              <div>
                <strong>Dirección:</strong>
                <span>{user.address}</span>
              </div>
            </div>
            <div className='updateUser-handlers'>
              <button className='normal' onClick={() => setUpdateUserModal(true)}>Editar</button>
              <button className='normal' onClick={() => setUpdatePasswordModal(true)}>Cambiar Contraseña</button>
              <button className='logout normal' onClick={() => logoutHandler()}>Salir</button>
            </div>

            {/* Update User Modal */}
            <ModalComponent
              isOpenModal={updateUserModal}
              setIsOpenModal={setUpdateUserModal}
            >
              <div className='modal_component'>
                <form autoComplete="off">
                  <div>
                    <label>Usuario: </label>
                    <input 
                      name='username'
                      value={updateUser.username}
                      onChange={(e) => inputsHandler(e, setUpdateUser)} 
                    />
                  </div>
                  <div>
                    <label>Email: </label>
                    <input 
                      name='email' 
                      value={updateUser.email}
                      onChange={(e) => inputsHandler(e, setUpdateUser)} 
                    />
                  </div>
                  <div>
                    <label>Dirección: </label>
                    <input 
                      name='address'
                      value={updateUser.address}
                      onChange={(e) => inputsHandler(e, setUpdateUser)} 
                    />
                  </div>
                  { fieldsAreEmpty &&  <span>* Complete todos los campos de registro</span> }
                </form>
                <div className='button_container'>
                  <button className='normal' onClick={() => setUpdateUserModal(false)}>Cancelar</button>
                  <button className='normal' onClick={updateUserHandler}>Actualizar</button>
                </div>
              </div>
            </ModalComponent>

            {/* Update Password Modal */}
            <ModalComponent
              isOpenModal={updatePasswordModal}
              setIsOpenModal={setUpdatePasswordModal}
            >
              <div className='modal_component'>
                <form autoComplete="off">
                  <div>
                    <label>Nueva Contraseña: </label>
                    <input 
                      name='password'
                      value={updatePassword.password}
                      onChange={(e) => inputsHandler(e, setUpdatePassword)}
                      type="password"
                    />
                  </div>
                  <div>
                    <label>Confirmar Contraseña: </label>
                    <input 
                      name='confirmPassword'
                      value={updatePassword.confirmPassword}
                      onChange={(e) => inputsHandler(e, setUpdatePassword)}
                      type="password"
                    />
                  </div>
                  { updatePassword.password !== updatePassword.confirmPassword ? <span>* Las contraseñas no coinciden</span> : null }
                  { fieldsAreEmpty &&  <span>* Complete todos los campos de registro</span> }
                </form>
                <div className='button_container'>
                  <button className='normal' onClick={() => setUpdatePasswordModal(false)}>Cancelar</button>
                  <button className='normal' onClick={updatePasswordHandler}>Actualizar</button>
                </div>
              </div>
            </ModalComponent>
          </div>
      }
    </div>
  );
};

export default ProfileData;