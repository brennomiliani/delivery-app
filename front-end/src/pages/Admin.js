import React, { useState } from 'react';
// import axios from 'axios';
import NavBar from '../components/NavBar/navBar';

const INITIAL_STATE = {
  email: '',
  password: '',
  type: '',
  name: '',
};

function Admin() {
  const userType = ['Vendedor'];
  const [userData, setUserData] = useState(INITIAL_STATE);
  // const [alreadyCreated, setAlreadyCreated] = useState(false);
  const { email, name, password } = userData;
  const handleInput = ({ target: { name: nameInput, value } }) => {
    setUserData((prev) => ({ ...prev, [nameInput]: value }));
  };
  return (
    <div className="general-page">
      <NavBar />
      <form>
        <input
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ handleInput }
          value={ name }
          name="name"
          placeholder="Nome Completo(mínimo 12 caracteres)"
        />
        <input
          type="text"
          data-testid="admin_manage__input-email"
          onChange={ handleInput }
          value={ email }
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ handleInput }
          value={ password }
          name="password"
          placeholder="Senha (mínimo 6 caracteres)"
        />
        <select
            data-testid="admin_manage__select-role"
            defaultValue={ userType[0] }
            name="type"
            // onChange={ }
        >
        { userType.length && userType.map((user, index) => (
            <option key={ index } value={ user }>{user}</option>
        ))}
        </select>
        {/* <span
          data-testid="common_login__element-invalid-email"
          style={ { display: !alreadyCreated && 'none' } }
        >
          Usuário não cadastrado!
        </span> */}
        <div className="section-btns">
          <button
            type="button"
            data-testid="admin_manage__button-register"
            className="button-general button--flex"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Admin;
