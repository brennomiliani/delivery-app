import React from 'react';
// import { useHistory } from 'react-router-dom';
// import convertedValue from '../services/utils';

function OrderCard() {
  // const history = useHistory();

  // const handleClick = ({ target }) => {
  //   const { idOrder } = target;
  //   history.push(`/seller/orders/${idOrder}`);
  // };

  return (
    <div>
      <div>
        <h3>Pedido</h3>
        <h3 data-testid={ `seller_orders__element-order-id-${id}` }>Olá</h3>
      </div>
      <h3 data-testid={ `seller_orders__element-delivery-status-${id}` }>Olá</h3>
      <div>
        <h3 data-testid={ `seller_orders__element-order-date-${id}` }>Olá</h3>
        <h3
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          Olá
        </h3>
      </div>
      <h3 data-testid={ `seller_orders__element-card-address-${id}` }>Olá</h3>
    </div>
  );
}

export default OrderCard;
