import React from 'react';

const ProfileData = ({ user }) => {
  return (
    <div className='profile-data'>
      <div className='data-container'>
        <div className='user-data'>
          <div>
            <strong>Nombre:</strong>
            <span>{user.name}</span>
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
          <button className='normal'>Editar</button>
          <button className='normal'>Cambiar Contraseña</button>
          <button className='logout normal'>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;