import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import convertedValue from '../services/utils';

function ProdCart(product) {
  const { name, price, qtd, id, index } = product;
 
  return (
    <div>
      <span>{ index }</span>
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <p
        className="card_description"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { convertedValue(Number(price)) }
      </p>
      <div>
        <button
          type="button"
          className="button--small button-color-general"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          disabled={ (valueAdd <= 0) }
          onClick={ () => {
            setValueAdd((valueAdd - 1));
            handleProductRedux((valueAdd - 1));
          } }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valueAdd }
          onChange={ (e) => {
            if(e.target.value >= 0) { 
              setValueAdd(e.target.value);
              handleProductRedux(e.target.value);
            }
          } }
        />
        <button
          type="button"
          className="button--small"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => {
            setValueAdd((valueAdd + 1));
            handleProductRedux((valueAdd + 1));
          } }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProdCart;
