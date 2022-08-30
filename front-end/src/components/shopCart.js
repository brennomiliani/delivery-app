import React, { useEffect, useState } from 'react';
import convertedValue from '../services/utils';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShopCart() {
    const [shopCartValue, setShopCartValue] = useState(convertedValue(0));
    const { products } = useSelector(state => state.wallet);
    const history = useHistory();
  
    useEffect(() => {
      if(products.length) {
        const sum = () => {
          return products.reduce((sum, item) => {
            const { price, qtd } = item;
            const totalShopCart = Number(price) * Number(qtd);
            sum += totalShopCart;
            return sum;
          }, 0);
        }
        return setShopCartValue(convertedValue(sum()));
      }
      return setShopCartValue(convertedValue(0));
    }, [products]);
    
  
    return (
      <div className='container-account-balance'>
        <button onClick={ () => history.push('/customer/orders')}
          type='button'
          data-testid='customer_products__button-cart'>
          Ver carrinho: { shopCartValue }
        </button>
      </div>
    )
}

export default ShopCart;
