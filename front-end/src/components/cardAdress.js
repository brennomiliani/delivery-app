import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import convertedValue from '../services/utils';

function CardAdress() {
  const [shopCartValue, setShopCartValue] = useState(convertedValue(0));
  const [sellers, setSellers] = useState([]);
  const [infoAdressSeller, setInfoAdress] = useState({ seller: '', adress: '', number: 0});

  const { products } = useSelector((state) => state.wallet);
  const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setInfoAdress((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (products.length) {
      const sumProdu = () => products.reduce((sum, item) => {
        const { price, qtd } = item;
        const totalShopCart = Number(price) * Number(qtd);
        sum += totalShopCart;
        return sum;
      }, 0);
      return setShopCartValue(convertedValue(sumProdu()));
    }
    return setShopCartValue(convertedValue(0));
  }, [products]);

  return (
    <form className="container-account-balance">
      <label htmlFor="seller">
        P.Vendedora Responsável
      </label>
      <select
        data-testid="customer_checkout__select-seller"
        id="seller"
        name="seller"
        value={ infoAdressSeller.seller }
        onChange={ handleInput }
        >
        { sellers.map((seller) => (
            <option key={ seller } value={ seller }>{seller}</option>
        ))}
      </select>

      <label htmlFor="adress">
        Endereço
      </label>
        <input
            name="adress"
            type="text"
            data-testid="customer_checkout__input-address"
            id="adress"
            value={ infoAdressSeller.adress }
            onChange={ handleInput }
        />

      <label htmlFor="number">
          Número
      </label>
        <input
            name="number"
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            value={ infoAdressSeller.number }
            onChange={ handleInput }
        />
    </form>
  );
}

export default CardAdress;
