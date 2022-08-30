import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rmShopCart } from '../redux/actions';
import { removeProductToLocal } from '../services/localStorage';
import convertedValue from '../services/utils';

function TableProdCart() {
  const [dataStor, setDataStor] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {dataStor
          .map(({ name, price, id, qtd }, index) => (
            <tr key={ id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-
                ${index}` }
              >
                {id}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-
                ${index}` }
              >
                {qtd}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-
                ${index}` }
              >
                {price}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                {convertedValue(Number(price) * Number(qtd))}
              </td>
              <td>
                <button
                  id={ id }
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => {
                    removeProductToLocal(id);
                    dispatch(rmShopCart(true));
                  } }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableProdCart;
