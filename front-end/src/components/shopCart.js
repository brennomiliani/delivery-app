import React, { useEffect, useState } from 'react';
import convertedValue from '../services/utils';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShopCart() {
    const [shopCartValue, setShopCartValue] = useState(convertedValue(0));
    const shopCart = useSelector(state => state.wallet);
    const history = useHistory();
  
    useEffect(() => {
      if(shopCart.length) return setShopCartValue(convertedValue(shopCartValue));
      return setShopCartValue(convertedValue(0));
    }, [shopCart]);
    
  
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
