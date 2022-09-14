import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerOrderCard from '../components/CustomerOrderCard';
import NavBar from '../components/NavBar/navBar';
import { getUserAcessFromLocal } from '../services/localStorage';

function CustomerOrdersPage() {
  const [customerOrders, setCustomerOrders] = useState([]);

  const getAllCustomerOrders = async () => {
    const user = getUserAcessFromLocal();
    try {
      const response = await axios.get('http://localhost:3001/customer/orders', { headers: { Authorization: user.token } });
      setCustomerOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCustomerOrders();
  }, []);

  return (
    <div>
      <NavBar />
      { !customerOrders.length
        ? <h3>Carregando...</h3>
        : (
          <section>
            <div>
              { customerOrders.map((item, index) => (
                <CustomerOrderCard key={ index } { ...item } />))}
            </div>
          </section>)}
    </div>
  );
}

export default CustomerOrdersPage;
//
