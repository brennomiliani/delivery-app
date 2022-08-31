import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import usePath from '../hooks/usePath';
import { getUserAcessFromLocal } from '../services/localStorage';

function SellerOrderDetail() {
  const [order, setOrder] = useState();
  const { id } = usePath();

  const getOrderDetail = async () => {
    const user = getUserAcessFromLocal();
    try {
      const response = await axios.get(`http://localhost:3001/seller/orders/${id}`, { headers: { Authorization: user.token } });
      setOrder(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderDetail();
  });

  const { status, saleDate, totalPrice } = order;

  return (
    <div>
      <NavBar />
      <section>
        <h2>Detalhes do Pedido</h2>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${id}`}
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { saleDate }
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { status }
        </h3>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          onClick
        >
          Preparar Pedido
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          onClick
        >
          Saiu para Entrega
        </button>
      </section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
      <footer>
        <h3>{ totalPrice }</h3>
      </footer>
    </div>
  );
}

export default SellerOrderDetail;
