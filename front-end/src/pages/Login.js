import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import verifyValidation from '../validations/validateUser';

const INITIAL_STATE = {
  inputEmail: '',
  inputPassword: '',
};

function Login() {
  const history = useHistory();
  const [userData, setUserData] = useState(INITIAL_STATE);

  const handleInput = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    const { inputEmail, inputPassword } = userData;
    verifyValidation({ inputEmail, inputPassword });
    history.push('/products');
  };

  const { inputEmail, inputPassword } = userData;

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          data-testid="input-email"
          value={ inputEmail }
          onChange={ handleInput }
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua Senha"
          data-testid="input-password"
          value={ inputPassword }
          onChange={ handleInput }
        />
        <button
          type="submit"
          onClick={ handleClick }
        >
          Acessar
        </button>
        <button
          type="button"
          onClick={ () => history.push('/register') }
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}

export default Login;
