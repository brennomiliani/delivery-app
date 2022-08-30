import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/navBar';
import { getShopCartFromLocal, getUserAcessFromLocal } from '../services/localStorage';
import { rmShopCart, saveProducts, saveUser } from '../redux/actions';
import TableProdCart from '../components/table';
import convertedValue from '../services/utils';
import CardAdress from '../components/cardAdress';

function Checkout() {
  const [totalValue, setTotalValue] = useState(convertedValue(0));
  const { removedItem } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getProductsStored = () => {
    const products = getShopCartFromLocal();
    if (products.length) {
      const sumProd = products.reduce((sum, item) => {
        const { price, qtd } = item;
        const totalShopCart = Number(price) * Number(qtd);
        sum += totalShopCart;
        return sum;
      }, 0);
      setTotalValue(convertedValue(sumProd));
      return products;
    }
    return [];
  };

  const getLastUser = () => {
    const user = getUserAcessFromLocal();
    if (user) return user;
    return '';
  };

  useEffect(() => {
    dispatch(saveProducts(getProductsStored()));
    dispatch(saveUser(getLastUser()));
    dispatch(rmShopCart(false));
  }, [removedItem, dispatch]);

  return (
    <div className="general-page">
      <NavBar />
      <TableProdCart />
      <div>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total:
          {' '}
          { totalValue }
        </span>
      </div>

      {/* <CardAdress /> */}

      <div className="section-btns">
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          className="button-general button--flex"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default Checkout;
