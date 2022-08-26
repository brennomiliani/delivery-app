import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import NavBar from '../components/navBar';
// import mockProducts from '../mocks/mockProducts';
import { getUserAcessFromLocal } from '../services/localStorage';
import { saveUser } from '../redux/actions';

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

  const getLastUser = () => {
    const user = getUserAcessFromLocal();
    if (user) return user;
    return '';
  };

  useEffect(() => {
    getProducts();
    dispatch(saveUser(getLastUser()));
  }, []);

  return (
    <div className="general-page">
      <NavBar />

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
