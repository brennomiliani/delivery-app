import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { saveProducts } from '../redux/actions';
// import TableProdCart from '../components/table';
import convertedValue from '../services/utils';
// import usePath from '../hooks/usePath';
// import NavBar from '../components/navBar';

function OrderDetailsCustomer() {
  const [totalValue, setTotalValue] = useState(convertedValue(0));
  // const [userData, setUserData] = useState({ name: '', token: '' });

  // const history = useHistory();
  const dispatch = useDispatch();
  // const { id } = usePath();

  // const getProductsOrder = async () => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:3001/customer/orders/${id}`);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };

  useEffect(() => {
    dispatch(saveProducts(getProductsOrder()));
    setTotalValue(0);
  }, [dispatch]);

  return (
    <div className="general-page">
      {/* <NavBar /> */}
      <h1>Detalhes do Pedido</h1>

      <div>
        <h3>
          Pedido:
          {}
        </h3>
        <h2>
          P.Vendedora:
          {}
        </h2>
        <h2>
          Data:
          {}
        </h2>
        <h2>
          Status:
          {}
        </h2>
        <button type="button">
          Marcar como entregue
        </button>
      </div>

      {/* <TableProdCart /> */}
      <div>
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          Total:
          {' '}
          { totalValue }
        </span>
      </div>
    </div>
  );
}

export default OrderDetailsCustomer;
