import React from 'react';
import { useSelector } from 'react-redux';
import { removeProductToLocal } from '../services/localStorage';
import convertedValue from '../services/utils';

const TableProdCart = () => {

    const { products } = useSelector(state => state.wallet);

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
          {products
            .map(({ name, price, id, qtd }) => (
              <tr key={ id }>
                <td>{id}</td>
                <td>{name}</td>
                <td>{qtd}</td>
                <td>{price}</td>
                <td>{convertedValue(Number(price) * Number(qtd))}</td>
                <td>
                  <button
                    id={ id }
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => removeProductToLocal(id) }
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