import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import { getShopCartFromLocal } from '../services/localStorage';
import { rmShopCart, saveProducts } from '../redux/actions';
import TableProdCart from '../components/table';
import { convertedValue } from '../services/utils';
import CardAdress from '../components/cardAdress';

function Checkout() {
  const [totalValue, setTotalValue] = useState(0);

  const { removedItem } = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const getProductsStored = () => {
    const products = getShopCartFromLocal();
    if (!products || !products.length) {
      return [];
    }
    const sumProd = products.reduce((sum, item) => {
      const { price, SaleProduct: { quantity } } = item;
      const totalShopCart = Number(price) * Number(quantity);
      sum += totalShopCart;
      return sum;
    }, 0);
    setTotalValue(sumProd);
    return products;
  };

  useEffect(() => {
    dispatch(saveProducts(getProductsStored()));
    dispatch(rmShopCart(false));
  }, [removedItem, dispatch]);

  const saveOrder = async () => {
    const saveCart = getProductsStored();

    if (saveCart.length && user.adressInfo.sellerId) {
      const { sellerId, adress, number } = user.adressInfo;
      const objOrder = {
        sellerId,
        totalPrice: totalValue,
        deliveryAddress: adress,
        deliveryNumber: number,
        products: saveCart
          .map((item) => ({ productId: item.id, quantity: item.SaleProduct.quantity })),
      };
      const response = await axios.post(
        'http://localhost:3001/customer/checkout',
        objOrder,
        { headers: { Authorization: user.token } },
      );
      localStorage.removeItem('carrinho');
      history.push(`/customer/orders/${response.data.saleId}`);
    }
  };

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
          { convertedValue(totalValue) }
        </span>
      </div>

      <CardAdress />

      <div className="section-btns">
        <button
          type="button"
          onClick={ () => saveOrder() }
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
