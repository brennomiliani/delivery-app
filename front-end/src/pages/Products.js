import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import NavBar from '../components/NavBar/navBar';
// import mockProducts from '../mocks/mockProducts';
import { getShopCartFromLocal } from '../services/localStorage';
import { saveProducts } from '../redux/actions';
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

  const getProductsStored = () => {
    const productsStored = getShopCartFromLocal();
    if (productsStored) return productsStored;
    return [];
  };

  useEffect(() => {
    getProducts();
    dispatch(saveProducts(getProductsStored()));
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
