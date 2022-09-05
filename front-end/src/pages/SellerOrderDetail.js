import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/navBar';
import usePath from '../hooks/usePath';
import { getUserAcessFromLocal } from '../services/localStorage';
import { convertedValue, formatDate } from '../services/utils';

function SellerOrderDetail() {
  const [order, setOrder] = useState({
    status: '', saleDate: '', totalPrice: 0, products: [] });
  const [newStatus, setNewStatus] = useState('Pendente');
  const { id } = usePath();

  const getOrderDetail = async () => {
    const user = getUserAcessFromLocal();
    try {
      const response = await axios.get(`http://localhost:3001/seller/orders/${id}`, { headers: { Authorization: user.token } });
      console.log(response.data);
      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async ({ target }) => {
    const { name } = target;
    await axios.patch(`http://localhost:3001/seller/orders/${id}`, { headers: { Authorization: user.token } });
    setNewStatus(name);
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  const { saleDate, products, totalPrice } = order;
  const disabledButton = false;

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
          { formatDate(saleDate) }
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { newStatus }
        </h3>
        <button
          type="button"
          name="Preparando"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ handleStatus }
          disabled={ disabledButton }
        >
          Preparar Pedido
        </button>
        <button
          type="button"
          name="Em Trânsito"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ handleStatus }
          disabled
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
          {products.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1 }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                { product.SaleProduct.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                { product.price }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                {convertedValue(
                  (+product.SaleProduct.quantity) * (+product.price),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3
        data-testid="seller_order_details__element-order-total-price"
      >
        Total:
        { totalPrice }
      </h3>
    </div>
  );
}

export default SellerOrderDetail;
//
