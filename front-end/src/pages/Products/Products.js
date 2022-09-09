import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '../../components/card';
import NavBar from '../../components/navBar';
// import mockProducts from '../mocks/mockProducts';
import { getShopCartFromLocal } from '../../services/localStorage';
import { saveProducts } from '../../redux/actions';
import ShopCart from '../../components/shopCart';
import { Main } from './styles';

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
    <div>
      <NavBar />
      <ShopCart />
      { !products.length
        ? <h3 className="h3-title">Carregando...</h3>
        : (
          <section>
            <Main>
              { products.map((item) => (
                <Card key={ item.id } { ...item } />))}
            </Main>
          </section>)}
    </div>
  );
}

export default Products;
