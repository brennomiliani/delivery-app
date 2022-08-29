import React from 'react';
import convertedValue from '../services/utils';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShopCart() {
    const [shopCartValue, setShopCartValue] = useState(convertedValue(0));
    const { shopCartValue } = useSelector(state => walletReducer);
    const history = useHistory();
  
    useEffect(() => {
      setShopCartValue(convertedValue(shopCartValue));
    }, [shopCartValue]);
    
  
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
