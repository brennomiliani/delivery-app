import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerOrderCard from '../components/SellerOrderCard';
import NavBar from '../components/navBar';
import { getUserAcessFromLocal } from '../services/localStorage';

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

  return (
    <div>
      <NavBar />
      { !orders.length
        ? <h3>Carregando...</h3>
        : (
          <section>
            <div>
              { orders.map((item, index) => (
                <SellerOrderCard key={ index } { ...item } />))}
            </div>
          </section>)}
    </div>
  );
}

export default SellerOrdersPage;
