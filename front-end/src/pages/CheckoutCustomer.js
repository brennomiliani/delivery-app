import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import NavBar from '../components/navBar';
import { getShopCartFromLocal, getUserAcessFromLocal } from '../services/localStorage';
import { saveProducts, saveUser } from '../redux/actions';
import ShopCart from '../components/shopCart';

function Checkout() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProductsStored = () => {
    const products = getShopCartFromLocal();
    if (products) return products;
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
  }, [dispatch]);

  return (
    <div className="general-page">
      <NavBar />
      <ShopCart />
      { !products.length
        ? <h3 className="h3-title">Carregando...</h3>
        : (
          <section>
            <div>
              { products.map((item) => (
                <Card key={ item.id } { ...item } />))}
            </div>
          </section>)}
    </div>
  );
}

export default Checkout;
