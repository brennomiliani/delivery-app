import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAdress } from '../redux/actions';

function CardAdress() {
  const [sellers, setSellers] = useState([]);
  const dispatch = useDispatch();
  const [infoAdressSeller, setInfoAdress] = useState({ sellerId: '',
    deliveryAddress: '',
    deliveryNumber: '' });

  const getSellers = async () => {
    const { data } = await axios.get('http://localhost:3001/customer/sellers');
    if (data) {
      setSellers(data);
      setInfoAdress((prev) => ({ ...prev, sellerId: data[0].id }));
      dispatch(saveAdress({ sellerId: data[0].id }));
    }
  };

  const handleInput = ({ target: { name, value } }) => {
    setInfoAdress((prev) => ({ ...prev, [name]: value }));
    dispatch(saveAdress({ [name]: value }));
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <form className="container-account-balance">
      <div>
        <label htmlFor="seller">
          P.Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            defaultValue={ sellers[0] }
            name="seller"
            onChange={ (({ target }) => {
              setInfoAdress({
                ...infoAdressSeller,
                sellerId: Number(target.options[target.selectedIndex].value),
              });
              dispatch(saveAdress({
                sellerId: Number(target.options[target.selectedIndex].value),
              }));
            }
            ) }
          >
            { sellers.length && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{seller.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="address">
          Endereço
          <input
            name="deliveryAddress"
            type="text"
            data-testid="customer_checkout__input-address"
            id="address"
            value={ infoAdressSeller.deliveryAddress }
            onChange={ handleInput }
          />
        </label>
      </div>

      <div>
        <label htmlFor="number">
          Número
          <input
            name="deliveryNumber"
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            value={ infoAdressSeller.deliveryNumber }
            onChange={ handleInput }
          />
        </label>
      </div>

    </form>
  );
}

export default CardAdress;
