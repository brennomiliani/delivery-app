import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rmShopCart } from '../redux/actions';
import { removeProductToLocal } from '../services/localStorage';
import { convertedValue } from '../services/utils';
import usePath from '../hooks/usePath';

function TableProdCart() {
  const [dataStor, setDataStor] = useState([]);
  const [inCheckout, setInCheckout] = useState(false);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pathname } = usePath();

  useEffect(() => {
    if (pathname.includes('/checkout')) {
      setInCheckout(true);
    }
  }, []);

  useEffect(() => {
    setDataStor(products);
  }, [products]);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Subtotal</th>
          { inCheckout
            && <th>Excluir</th>}
        </tr>
      </thead>
      <tbody>
        {dataStor
          .map(({ name, price, id, SaleProduct: { quantity } }, index) => (
            <tr key={ id }>
              <td
                data-testid={
                  inCheckout
                    ? `customer_checkout__element-order-table-item-number-${index}`
                    : `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index+1}
              </td>
              <td
                data-testid={
                  inCheckout
                    ? `customer_checkout__element-order-table-name-${index}`
                    : `customer_order_details__element-order-table-name-${index}`
                }
              >
                {name}
              </td>
              <td
                data-testid={
                  inCheckout
                    ? `customer_checkout__element-order-table-quantity-${index}`
                    : `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </td>
              <td
                data-testid={
                  inCheckout
                    ? `customer_checkout__element-order-table-unit-price-${index}`
                    : `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {convertedValue(price)}
              </td>
              <td
                data-testid={
                  inCheckout
                    ? `customer_checkout__element-order-table-sub-total-${index}`
                    : `customer_order_details__element-order-total-price-${index}`
                }
              >
                {convertedValue(Number(price) * Number(quantity))}
              </td>
              { inCheckout
                && (
                  <td
                    data-testid={ `customer_checkout__element-order-table-remove-
                  ${index}` }
                  >
                    <button
                      id={ id }
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      type="button"
                      onClick={ () => {
                        removeProductToLocal(id);
                        dispatch(rmShopCart(true));
                      } }
                    >
                      Excluir
                    </button>
                  </td>)}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableProdCart;
