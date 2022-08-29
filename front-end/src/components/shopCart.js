import React from 'react';
// import { useHistory } from 'react-router-dom';
import convertedValue from '../services/utils';

function ShopCart() {
  // const history = useHistory();
  const { id, status, date, price, address } = orders;

  // const handleClick = ({ target }) => {
  //   const { idOrder } = target;
  //   history.push(`/seller/orders/${idOrder}`);
  // };

  return (
    <div>
      <div>
        <h3>Pedido</h3>
        <h3 data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</h3>
      </div>
      <h3 data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</h3>
      <div>
        <h3 data-testid={ `seller_orders__element-order-date-${id}` }>{ date }</h3>
        <h3
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          { convertedValue(Number(price)) }
        </h3>
      </div>
      <h3 data-testid={ `seller_orders__element-card-address-${id}` }>{ address }</h3>
    </div>
  );
}

export default ShopCart;
