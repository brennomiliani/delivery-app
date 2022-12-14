import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rmShopCart } from '../redux/actions';
import { removeProductToLocal } from '../services/localStorage';
import { convertedValue } from '../services/utils';
import usePath from '../hooks/usePath';
import { ProductsTable } from './shared/ProductsTable';

const CHECKOUT_PREFIX = 'customer_checkout__element-order-table';

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
    <ProductsTable>
      <thead>
        <tr>
          <th className="table-head">Item</th>
          <th className="table-head-name">Descrição</th>
          <th className="table-head">Quantidade</th>
          <th className="table-head">Valor unitário</th>
          <th className='table-head-name'>Subtotal</th>
          { inCheckout
            && <th className='remove-table-item'>Excluir</th>}
        </tr>
      </thead>
      <tbody>
        {dataStor
          .map(({ name, price, id, SaleProduct: { quantity } }, index) => (
            <tr key={ id }>
              <td
                className="index-table-item"
                data-testid={
                  inCheckout
                    ? `${CHECKOUT_PREFIX}-item-number-${index}`
                    : `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                className="name-table-item"
                data-testid={
                  inCheckout
                    ? `${CHECKOUT_PREFIX}-name-${index}`
                    : `customer_order_details__element-order-table-name-${index}`
                }
              >
                {name}
              </td>
              <td
              className="quantity-table-item"
                data-testid={
                  inCheckout
                    ? `${CHECKOUT_PREFIX}-quantity-${index}`
                    : `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </td>
              <td
                className="price-table-item"
                data-testid={
                  inCheckout
                    ? `${CHECKOUT_PREFIX}-unit-price-${index}`
                    : `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {convertedValue(price)}
              </td>
              <td
                className="total-table-item"
                data-testid={
                  inCheckout
                    ? `${CHECKOUT_PREFIX}-sub-total-${index}`
                    : `customer_order_details__element-order-total-price-${index}`
                }
              >
                {convertedValue(Number(price) * Number(quantity))}
              </td>
              { inCheckout
                && (
                  <td
                  className='remove-table-item'
                    data-testid={ `${CHECKOUT_PREFIX}-remove-
                  ${index}` }
                  >
                    <button
                      id={ id }
                      data-testid={
                        `${CHECKOUT_PREFIX}-remove-${index}`
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
    </ProductsTable>
  );
}

export default TableProdCart;
