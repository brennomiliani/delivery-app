import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './Login/styles';
import verifyValidation from '../validations/validateUser';
import { saveUser } from '../redux/actions/index';
import { addAcessUserToLocal } from '../services/localStorage';

const INITIAL_STATE = {
  inputName: '',
  inputEmail: '',
  inputPassword: '',
};

function SignIn() {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [isDisabled, setIsDisabled] = useState(true);
  const [alreadyCreated, setAlreadyCreated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    dispatch(saveUser(userData.inputEmail));
    const { inputEmail, inputName, inputPassword } = userData;
    try {
      const result = await axios.post('http://localhost:3001/register', { name: inputName, email: inputEmail, password: inputPassword });
      const objUser = {
        name: inputName,
        email: inputEmail,
        role: result.data.role,
        token: result.data.token };
      addAcessUserToLocal(objUser);
      history.push('/customer/products');
    } catch (error) {
      setAlreadyCreated(true);
      setUserData(INITIAL_STATE);
    }
  };

  useEffect(() => {
    setIsDisabled(!verifyValidation(userData));
  }, [userData]);

  const { inputName, inputEmail, inputPassword } = userData;

  return (
    <div className="general-page">
      <S.Form>
        <form>
          <h1 className="h1-title">Crie a sua conta!</h1>
          <input
            type="text"
            data-testid="common_register__input-name"
            onChange={ handleInput }
            value={ inputName }
            name="inputName"
            placeholder="Nome Completo(mínimo 12 caracteres)"
          />
          <input
            type="text"
            data-testid="common_register__input-email"
            onChange={ handleInput }
            value={ inputEmail }
            name="inputEmail"
            placeholder="Email"
          />
          <input
            type="password"
            data-testid="common_register__input-password"
            onChange={ handleInput }
            value={ inputPassword }
            name="inputPassword"
            placeholder="Senha (mínimo 6 caracteres)"
          />
          <button
            type="button"
            data-testid="common_register__button-register"
            className="button-general button--flex"
            onClick={ handleClick }
            disabled={ isDisabled }
          >
            Cadastrar
          </button>
          <span
            data-testid="common_register__element-invalid_register"
            style={ { display: !alreadyCreated && 'none' } }
          >
            O usuário já possui cadastro!
          </span>
        </form>
      </S.Form>
    </div>
  );
}

export default SignIn;
