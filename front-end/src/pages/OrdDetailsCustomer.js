import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts } from '../redux/actions';
import TableProdCart from '../components/table';
import { convertedValue, formatDate } from '../services/utils';
import usePath from '../hooks/usePath';
import NavBar from '../components/navBar';

function OrderDetailsCustomer() {
  const [totalValue, setTotalValue] = useState(0);
  const [dataOrder, setDataOrder] = useState({ seller: { name: '' },
    saleDate: '',
    id: '',
    status: '' });
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { id } = usePath();

  const getProductsOrder = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/customer/orders/${id}`, { headers: { Authorization: user.token } });
      if (result) {
        setDataOrder(result.data);
        console.log(result.data);
        setTotalValue(0);
        dispatch(saveProducts(result.data.products));
        const sumProd = result.data.products.reduce((sum, item) => {
          const { price, SaleProduct: { quantity } } = item;
          const totalShopCart = Number(price) * Number(quantity);
          sum += totalShopCart;
          return sum;
        }, 0);
        setTotalValue(sumProd);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsOrder();
  }, []);

  return (
    <div className="general-page">
      <NavBar />
      <h1>Detalhes do Pedido</h1>

      <div>
        <h3>
          Pedido:
          { dataOrder.id }
        </h3>
        <h2>
          P.Vendedora:
          { dataOrder.seller.name }
        </h2>
        <h2>
          Data:
          { formatDate(dataOrder.saleDate) }
        </h2>
        <h2>
          Status:
          { dataOrder.status }
        </h2>
        <button type="button">
          Marcar como entregue
        </button>
      </div>

      <TableProdCart />
      <div>
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          Total:
          {' '}
          { convertedValue(totalValue) }
        </span>
      </div>
    </div>
  );
}

export default OrderDetailsCustomer;
