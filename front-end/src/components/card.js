import React, { useState } from 'react';
import convertedValue from '../services/utils';

function Card(product) {
  const { name, price, url_image: urlImg, index } = product;
  const [valueAdd, setValueAdd] = useState(0);

  return (
    <div className="card_data">
      <h3
        className="card_title"
        data-testId={ `customer_products__element-card-title-${index}` }
      >
        { name }
      </h3>
      <p
        className="card_description"
        data-testid={ `customer_products__img-card-bg-image-${index}` }
      >
        { urlImg }
      </p>
      <p
        className="card_description"
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { convertedValue(Number(price)) }
      </p>
      <div>
        <button
          type="button"
          className="button--small button-color-general"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          onClick={ () => setValueAdd((valueAdd - 1)) }
        >
          -
        </button>
        <p
          type="text"
          data-testid={ `customer_products__input-card-quantity-${index}` }
        >
          { valueAdd }
        </p>
        <button
          type="button"
          className="button--small"
          data-testid={ `customer_products__button-card-add-item-${index}` }
          onClick={ () => setValueAdd((valueAdd + 1)) }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
