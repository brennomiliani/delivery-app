import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import verifyValidation from '../validations/validateUser';
import { saveUser } from '../redux/actions/index';

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
    try {
      await axios.post('http://localhost:3001/register', userData);
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setAlreadyCreated(true);
    }
  };

  useEffect(() => {
    setIsDisabled(!verifyValidation(userData));
  }, [userData]);

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
      </section>

      <span
        data-testid="common_register__element-invalid_register"
        style={ { display: !alreadyCreated && 'none' } }
      >
        O usuário já possui cadastro!
      </span>

      <div className="section-btns">
        <button
          type="button"
          data-testid="common_register__button-register"
          className="button-general button--flex"
          onClick={ handleClick }
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default SignIn;
