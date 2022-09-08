import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../redux/actions';
import TableProdCart from '../components/table';
import { convertedValue, formatDate } from '../services/utils';
import usePath from '../hooks/usePath';
import NavBar from '../components/navBar';
import { getUserAcessFromLocal } from '../services/localStorage';

function OrderDetailsCustomer() {
  const [totalValue, setTotalValue] = useState(0);
  // const [user, setUser] = useState({ token: ''});
  const [newStatus, setNewStatus] = useState('Pendente');
  const [dataOrder, setDataOrder] = useState({ seller: { name: '' },
    saleDate: '',
    id: '',
    status: '' });
  // const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { id } = usePath();

  const getProductsOrder = async (userInfo) => {
    try {
      const result = await axios.get(`http://localhost:3001/customer/orders/${id}`, { headers: { Authorization: userInfo.token } });
      if (result) {
        setDataOrder(result.data);
        setTotalValue(0);
        dispatch(saveProducts(result.data.products));
        const sumProd = result.data.products.reduce((sum, item) => {
          const { price, SaleProduct: { quantity } } = item;
          const totalShopCart = Number(price) * Number(quantity);
          sum += totalShopCart;
          return sum;
        }, 0);
        setTotalValue(sumProd);
        setNewStatus(result.data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async ({ target }) => {
    const userData = getUserAcessFromLocal();
    const { name } = target;
    await axios.patch(`http://localhost:3001/seller/orders/${id}`, { status: name }, { headers: { Authorization: userData.token } });
    setNewStatus(name);
  };

  useEffect(() => {
    const user = getUserAcessFromLocal();
    // setUser(user ? user : { token: ''});
    getProductsOrder(user);
  }, []);


  const prefix = 'customer_order_details';

  return (
    <div className="general-page">
      <NavBar />
      <h1>Detalhes do Pedido</h1>

      <div>
        <h3
          data-testid={
            `customer_order_details__element-order-details-label-order-id-${id}`
          }
        >
          Pedido:
          { id }
        </h3>
        <h2
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vendedora:
          { dataOrder.seller.name }
        </h2>
        <h2 data-testid="customer_order_details__element-order-details-label-order-date">
          Data:
          { formatDate(dataOrder.saleDate) }
        </h2>
        <h2
          data-testid={ `${prefix}__element-order-details-label-delivery-status` }
        >
          { newStatus }
        </h2>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          name="Entregue"
          onClick={ handleStatus }
          disabled={ dataOrder.status !== 'Em Trânsito' }
        >
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
// aiai
