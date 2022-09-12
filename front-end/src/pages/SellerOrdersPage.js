import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerOrderCard from '../components/SellerOrderCard';
import NavBar from '../components/NavBar/navBar';
import { getUserAcessFromLocal } from '../services/localStorage';
import { MainContainer } from '../components/shared/OrderCard';

function SellerOrdersPage() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const user = getUserAcessFromLocal();
    try {
      const response = await axios.get('http://localhost:3001/seller/orders', { headers: { Authorization: user.token } });
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // const style = { display: 'flex', height: '200px' };

  return (
    <div>
      <NavBar />
      { !orders.length
        ? <h3>Carregando...</h3>
        : (
          <section>
            <MainContainer>
              {orders.map((item, index) => (
                <SellerOrderCard key={ index } { ...item } />))}
            </MainContainer>
          </section>)}
    </div>
  );
}

export default SellerOrdersPage;
