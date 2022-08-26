import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import verifyValidation from '../validations/validateUser';
import { addAcessUserToLocal } from '../services/localStorage';

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
      if (response.data.role === 'customer') return history.push('/customer/products');
      if (response.data.role === 'administrator') return history.push('/admin/manage');
      addAcessUserToLocal({
        name: response.data.name,
        email: inputEmail,
        role: response.data.role,
        token: response.data.token });
      history.push('/seller/orders');
    } catch (error) {
      setUserData(INITIAL_STATE);
      setAlreadyCreated(true);
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
          data-testid="common_login__element-invalid-email"
          style={ { display: !alreadyCreated && 'none' } }
        >
          Usuário não cadastrado!
        </span>
      </form>
    </div>
  );
}

export default Login;
