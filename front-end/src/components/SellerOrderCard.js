import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../services/utils';

function SellerOrderCard(item) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = item;
  const styles = { backgroundColor: 'black ', width: '20%', color: 'white' };

  return (
    <Link to={ `orders/${id}` }>
      <div style={ styles }>
        <div>
          <h3>Pedido</h3>
          <h3 data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</h3>
        </div>
        <h3
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          { status }
        </h3>
        <div>
          <h3
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            { formatDate(saleDate) }
          </h3>
          <h3
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            { totalPrice }
          </h3>
        </div>
        <h3
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { deliveryAddress }
        </h3>
      </div>
    </Link>
  );
}

export default SellerOrderCard;
