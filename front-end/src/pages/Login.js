import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import verifyValidation from '../validations/validateUser';

const INITIAL_STATE = {
  inputEmail: '',
  inputPassword: '',
};

function Login() {
  const history = useHistory();
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [buttonData, setButtonData] = useState(true);
  const [alreadyCreated, setAlreadyCreated] = useState(false);

  const handleInput = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const { inputEmail, inputPassword } = userData;

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email: inputEmail, password: inputPassword });
      console.log(response);
      history.push('/seller/orders');
    } catch (error) {
      setAlreadyCreated(true);
      setUserData(INITIAL_STATE);
    }
  };

  useEffect(() => {
    setButtonData(!verifyValidation(userData));
  }, [userData]);

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
          type="button"
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
        <span
          data-testid="common_login__element-invalid_email"
          style={ { display: !alreadyCreated && 'none' } }
        >
          Usuário não cadastrado!
        </span>
      </form>
    </div>
  );
}

export default Login;
