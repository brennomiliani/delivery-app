import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/navBar';
import usePath from '../hooks/usePath';
import { getUserAcessFromLocal } from '../services/localStorage';
import { convertedValue, sellerDate } from '../services/utils';

function SellerOrderDetail() {
  const [order, setOrder] = useState({
    status: '', saleDate: '', totalPrice: 0, products: [] });
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

  // const totalPrice = order.products.reduce((sum, item) => {
  //   const { price, SaleProduct: { quantity } } = item;
  //   const totalShopCart = Number(price) * Number(quantity);
  //   sum += totalShopCart;
  //   return sum;
  // }, 0);

  useEffect(() => {
    getOrderDetail();
  }, []);

  const { status, saleDate, products, totalPrice } = order;
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
          { sellerDate(saleDate) }
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          { status }
        </h3>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ disabledButton }
        >
          Preparar Pedido
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
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
        {/* <tfoot>
          <tr>
            <td data-testis="seller_order_details__element-order-total-price"></td>
          </tr>
        </tfoot> */}
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
