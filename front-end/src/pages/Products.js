import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import NavBar from '../components/navBar';
// import mockProducts from '../mocks/mockProducts';
import { getShopCartFromLocal, getUserAcessFromLocal } from '../services/localStorage';
import { saveProducts, saveUser } from '../redux/actions';
import ShopCart from '../components/shopCart';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/customer/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const products = getShopCartFromLocal();
    dispatch(saveProducts(products));
  }, []);

  const getLastUser = () => {
    const user = getUserAcessFromLocal();
    if (user) return user;
    return '';
  };

  useEffect(() => {
    getProducts();
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

export default Products;
