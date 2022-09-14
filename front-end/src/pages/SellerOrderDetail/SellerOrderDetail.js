import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/navBar';
import usePath from '../../hooks/usePath';
import { getUserAcessFromLocal } from '../../services/localStorage';
import { convertedValue, formatDate } from '../../services/utils';
import { ProductsTable } from '../../components/shared/ProductsTable';
import * as S from './style'

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
      setNewStatus(response.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async ({ target }) => {
    const user = getUserAcessFromLocal();
    const { name } = target;
    await axios.patch(`http://localhost:3001/seller/orders/${id}`, { status: name }, { headers: { Authorization: user.token } });
    setNewStatus(name);
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  const { saleDate, products, totalPrice } = order;

  return (
    <div>
    <NavBar />
    <S.SellerOrderDetails>
      <h1>Detalhes do Pedido</h1>
      <main>
        <div className='order-details'>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          { `Pedido ${id}`}
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { `Data: ${formatDate(saleDate)}` }
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
          disabled={ newStatus === 'Preparando' }
        >
          Preparar Pedido
        </button>
        <button
          type="button"
          name="Em Trânsito"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ handleStatus }
          disabled={ newStatus !== 'Preparando' }
        >
          Saiu para Entrega
        </button>
        </div>
      <ProductsTable>
        <thead>
          <tr>
            <th className="table-head">Item</th>
            <th className="table-head-name">Descrição</th>
            <th className="table-head">Quantidade</th>
            <th className="table-head">Valor unitário</th>
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
                className="index-table-item"
              >
                {index + 1 }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
                className="name-table-item"
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
                className="quantity-table-item"
              >
                { product.SaleProduct.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
                className="price-table-item"
              >
                { convertedValue(product.price) }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
                className="total-table-item"
              >
                {convertedValue(
                  (+product.SaleProduct.quantity) * (+product.price),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </ProductsTable>
      <h3
        data-testid="seller_order_details__element-order-total-price"
      >
        { convertedValue(totalPrice) }
      </h3>
      </main>
    </S.SellerOrderDetails>
    </div>
  );
}

export default SellerOrderDetail;
//
