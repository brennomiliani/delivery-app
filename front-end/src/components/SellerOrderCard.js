import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, convertedValue } from '../services/utils';
import { OrderCard } from './shared/OrderCard';

function SellerOrderCard(item) {
  const { id, status, saleDate, totalPrice, deliveryAddress } = item;

  return (
    <Link to={ `orders/${id}` }>
      <OrderCard>
        <div className="order-container">
          <div className="container-id-card">
            <h3>Pedido</h3>
            <h3 data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</h3>
          </div>
          <div className="container-status-card">
            <h3
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              { status }
            </h3>
          </div>
          <div className="container-info-card">
            <h3
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              { formatDate(saleDate) }
            </h3>
            <h3
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              { convertedValue(totalPrice) }
            </h3>
            <h3
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              { deliveryAddress }
            </h3>
          </div>
        </div>
      </OrderCard>
    </Link>
  );
}

export default SellerOrderCard;
