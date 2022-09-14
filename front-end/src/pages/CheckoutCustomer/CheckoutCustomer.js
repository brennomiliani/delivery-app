import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/navBar';
import { getShopCartFromLocal } from '../../services/localStorage';
import { rmShopCart, saveProducts } from '../../redux/actions';
import TableProdCart from '../../components/table';
import * as S from './styles';
import { convertedValue } from '../../services/utils';
import CardAdress from '../../components/cardAdress';
import { Redirect } from 'react-router-dom';

function Checkout() {
  const [totalValue, setTotalValue] = useState(0);
  const [productsStor, setProductsStor] = useState([]);
  const [redirect, setRedirect] = useState(0);

  const { removedItem } = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const getProductsStored = () => {
    const products = getShopCartFromLocal();
    setProductsStor(products);
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
    // const saveCart = getProductsStored();

    // if (user.adressInfo.sellerId) {
    const { sellerId, deliveryAddress, deliveryNumber } = user.adressInfo;
    const objOrder = {
      userId: user.id,
      sellerId,
      totalPrice: totalValue,
      deliveryAddress,
      deliveryNumber,
      products: productsStor
        .map((item) => ({ productId: item.id, quantity: item.SaleProduct.quantity })),
    };
    const response = await axios.post(
      'http://localhost:3001/customer/checkout',
      objOrder,
      { headers: { Authorization: user.token } },
    );
    localStorage.removeItem('carrinho');
    dispatch(saveProducts([]));
    setRedirect(response.data.saleId);
    // navigate(`/customer/orders/${response.data.saleId}`);
    // history.push(`/customer/orders/${response.data.saleId}`);
    // }
  };
  if (redirect) {
    return <Redirect to={ `/customer/orders/${redirect}` } />;
  }

  return (
    <>
      <NavBar />
      <S.Checkout>
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

        <section>
          <h3>Detalhes e Endereço para Entrega</h3>
          <div className="end-order-container">

            <CardAdress />

            <button
              type="button"
              onClick={ () => saveOrder() }
              data-testid="customer_checkout__button-submit-order"
              className="button-general button--flex"
              disabled={ (totalValue <= 0) }
            >
              Finalizar Pedido
            </button>
          </div>
        </section>
      </S.Checkout>
    </>
  );
}

export default Checkout;
