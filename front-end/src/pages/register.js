import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { saveUser } from '../redux/actions/index';

const INITIAL_STATE = {
  inputName: '',
  inputEmail: '',
  inputPassword: '',
};

function SignIn() {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    dispatch(saveUser(userData.inputEmail));
  };

  const { inputName, inputEmail, inputPassword } = userData;

  return (
    <div className="general-page">
      <div>
        <h1 className="main-title home-main-title">LogoAqui</h1>
      </div>
      <div>
        <h1 className="h1-title">Crie a sua conta!</h1>
      </div>

      <section>
        <input
          type="text"
          onChange={ handleInput }
          value={ inputName }
          name="inputName"
          placeholder="Nome (mínimo 6 caracteres)"
        />
        <input
          type="text"
          onChange={ handleInput }
          value={ inputEmail }
          name="inputEmail"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={ handleInput }
          value={ inputPassword }
          name="inputPassword"
          placeholder="Senha (mínimo 6 caracteres)"
        />
      </section>

      <div className="section-btns">
        <button
          type="button"
          className="button-general button--flex"
          onClick={ handleClick }
        >
          Cadastrar
        </button>
        {/* <button
              type="button"
              className='button-general button--flex'
              // onClick={ () => history.push('/') }
          >
          Voltar
          </button> */}
      </div>
    </div>
  );
}

export default SignIn;
