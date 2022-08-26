import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Card from '../components/card';
import NavBar from '../components/navBar';
import mockProducts from '../mocks/mockProducts';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
    //   const results = await axios.get('http://localhost:3001/register');
      const results = mockProducts;
      setProducts(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="general-page">
      <NavBar />

      { !products.length
        ? <h3 className="h3-title">Carregando...</h3>
        : (
          <section>
            <div>
              { products.map((item, index) => (
                <Card key={ index } { ...item } />))}
            </div>
          </section>)}
    </div>
  );
}

export default Products;
