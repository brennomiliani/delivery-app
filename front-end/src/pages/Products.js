import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const results = await axios.get('http://localhost:3001/register');
      setProducts(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="general-page">
      <div>
        <h1 className="main-title home-main-title">LogoAqui</h1>
      </div>
      <div>
        <h1 className="h1-title">Crie a sua conta!</h1>
      </div>

      { !products.length
      ? <h3 className='h3-title'>Carregando...</h3>
      :(<section>
        <div>
          { products.map((item, index) => (
            <Card  key={ index } {...item }/>))
          }
        </div>
      </section>)
      }
    </div>
  );
}

export default Products;
