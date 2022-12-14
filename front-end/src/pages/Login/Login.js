import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';
import verifyValidation from '../../validations/validateUser';
import { addAcessUserToLocal, getUserAcessFromLocal } from '../../services/localStorage';
import image from '../../images/image.png';

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
      addAcessUserToLocal({
        name: response.data.name,
        email: inputEmail,
        role: response.data.role,
        token: response.data.token });
      if (response.data.role === 'customer') return history.push('/customer/products');
      if (response.data.role === 'administrator') return history.push('/admin/manage');
      history.push('/seller/orders');
    } catch (error) {
      console.log(error);
      setUserData(INITIAL_STATE);
      setAlreadyCreated(true);
    }
  };

  const getLastUser = () => {
    const user = getUserAcessFromLocal();
    if (user) {
      if (user.role === 'customer') return history.push('/customer/products');
      if (user.role === 'administrator') return history.push('/admin/manage');
      history.push('/seller/orders');
    }
  };

  useEffect(() => {
    getLastUser();
  }, []);

  useEffect(() => {
    setButtonData(!verifyValidation(userData));
  }, [userData]);

  return (
    <div>
      <S.Form>
        <form>
          <img type="image" src={ image } alt="home Page" />
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
            Usu??rio n??o cadastrado!
          </span>
        </form>
      </S.Form>
    </div>
  );
}

export default Login;
