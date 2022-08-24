import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { convertedValue } from '../services/utils';

const Card = (product) => {
  const  { name, price, url_image, id, index } = product;
  const [valueAdd, setValueAdd] = useState(0);
  const history = useHistory();

  const saveStock = (path) => {
    return history.push(path);
  }

  return (
    <div className="card_data">
        <h3 className="card_title" data-testId={`customer_products__element-card-title-${index}`}>{ name }</h3>
        <p className="card_description" data-testid={`customer_products__img-card-bg-image-${index}`}>{ url_image }</p>
        <p className="card_description" data-testid={`customer_products__element-card-price-${index}`}>{ convertedValue(Number(price)) }</p>
        <div>
          <button className="button--small button-color-general"
            data-testid={`customer_products__button-card-rm-item-${index}`}
            onClick={() => setValueAdd((valueAdd - 1))}>
            -
          </button>
          <input type='text'>{ valueAdd }</input>
          <button className="button--small"
            data-testid={`customer_products__button-card-add-item-${index}`}
            onClick={() => setValueAdd((valueAdd - 1))}>
            +
          </button>
        </div>
    </div>
  )
}

export default Card;