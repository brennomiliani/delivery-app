import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAdress } from '../redux/actions';

function CardAdress() {
  const [sellers, setSellers] = useState([]);
  const dispatch = useDispatch();
  const [infoAdressSeller, setInfoAdress] = useState({ seller: '',
    adress: '',
    number: 0 });

  const getSellers = async () => {
    const { data } = await axios.get('http://localhost:3001/customer/sellers');
    if (data) {
      setSellers(data);
      setInfoAdress((prev) => ({ ...prev, seller: data[0].name }));
    }
  };

  const handleInput = ({ target: { name, value } }) => {
    setInfoAdress((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    getSellers();
  }, []);

  useEffect(() => {
    const { seller, adress, number } = infoAdressSeller;
    if (seller && adress && number) {
      const sellerId = sellers.find((s) => s.name === seller);
      dispatch(saveAdress({ ...infoAdressSeller, sellerId: sellerId.id }));
    }
  }, [infoAdressSeller]);

  return (
    <form className="container-account-balance">
      <div>
        <label htmlFor="seller">
          P.Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            name="seller"
            value={ infoAdressSeller.seller }
            onChange={ handleInput }
          >
            { sellers.length && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.name }>{seller.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="adress">
          Endereço
          <input
            name="adress"
            type="text"
            data-testid="customer_checkout__input-address"
            id="adress"
            value={ infoAdressSeller.adress }
            onChange={ handleInput }
          />
        </label>
      </div>

      <div>
        <label htmlFor="number">
          Número
          <input
            name="number"
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            value={ infoAdressSeller.number }
            onChange={ handleInput }
          />
        </label>
      </div>

    </form>
  );
}

export default CardAdress;
