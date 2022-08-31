import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import convertedValue from '../services/utils';

function ShopCart() {
  const [shopCartValue, setShopCartValue] = useState(0);
  const { products } = useSelector((state) => state.wallet);
  const history = useHistory();

  useEffect(() => {
    if (products.length) {
      const sumProdu = () => products.reduce((sum, item) => {
        const { price, qtd } = item;
        const totalShopCart = Number(price) * Number(qtd);
        sum += totalShopCart;
        return sum;
      }, 0);
      return setShopCartValue(sumProdu());
    }
    return setShopCartValue(0);
  }, [products]);

  return (
    <div className="container-account-balance">
      <button
        onClick={ () => history.push('/customer/checkout') }
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ shopCartValue === 0 }
      >
        Ver carrinho:
        {' '}
        { convertedValue(shopCartValue) }
      </button>
    </div>
  );
}

export default ShopCart;
