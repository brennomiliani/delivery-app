import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import verifyValidation from '../validations/validateUser';

const INITIAL_STATE = {
  inputEmail: '',
  inputPassword: '',
};

function Login() {
  const history = useHistory();
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [buttonData, setButtonData] = useState(true);

  const handleInput = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    history.push('/products');
  };

  useEffect(() => {
    setButtonData(!verifyValidation(userData));
  }, [userData]);

  const { inputEmail, inputPassword } = userData;

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="inputEmail"
          placeholder="Digite seu E-mail"
          data-testid="common_login__input-email"
          value={ inputEmail }
          onChange={ handleInput }
          autoComplete="off"
        />
        <input
          type="password"
          name="inputPassword"
          placeholder="Digite sua Senha"
          data-testid="common_login__input-password"
          value={ inputPassword }
          onChange={ handleInput }
        />
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ buttonData }
          onClick={ handleClick }
        >
          Acessar
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
}

export default Login;
