import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { convertedValue } from '../../services/utils';
import { ShoppCart } from './styles';

function ShopCart() {
  const [shopCartValue, setShopCartValue] = useState(0);
  const { products } = useSelector((state) => state.wallet);
  const history = useHistory();

  useEffect(() => {
    if (products.length) {
      const sumProdu = products.reduce((sum, item) => {
        const { price, SaleProduct: { quantity } } = item;
        const totalShopCart = Number(price) * Number(quantity);
        sum += totalShopCart;
        return sum;
      }, 0);
      return setShopCartValue(sumProdu);
    }
    return setShopCartValue(0);
  }, [products]);

  return (
    <ShoppCart>
      <button
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        type="button"
        disabled={ shopCartValue === 0 }
      >
        Ver carrinho:
        {' '}
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {convertedValue(shopCartValue)}
        </p>
      </button>
    </ShoppCart>
  );
}

export default ShopCart;
