import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardProduct } from '../pages/Products/styles';
import { addToShopCart, editShopCart, rmShopCart } from '../redux/actions';
import { convertedValue } from '../services/utils';

function Card(product) {
  const { name, price, url_image: urlImage, id } = product;
  const [valueAdd, setValueAdd] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.wallet);
  const { products: productsStored } = useSelector((state) => state.products);

  const handleProductRedux = (value) => {
    const objProd = { id, name, price, SaleProduct: { quantity: value } };
    const findProd = products.find((item) => Number(item.id) === id);

    if (!findProd) {
      dispatch(addToShopCart(objProd));
      return;
    }
    dispatch(editShopCart(objProd));
    dispatch(rmShopCart(true));
  };

  useEffect(() => {
    const findProd = productsStored.find((item) => item.id === Number(id));
    if (findProd) {
      setValueAdd(findProd.SaleProduct.quantity);
      handleProductRedux(findProd.SaleProduct.quantity);
    }
  }, [id, productsStored]);

  return (
    <CardProduct>
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { convertedValue(Number(price)) }
      </p>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          disabled={ (valueAdd <= 0) }
          onClick={ () => {
            setValueAdd((valueAdd - 1));
            handleProductRedux((valueAdd - 1));
          } }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valueAdd }
          onChange={ (e) => {
            if (e.target.value >= 0) {
              setValueAdd(e.target.value);
              handleProductRedux(e.target.value);
            }
          } }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => {
            setValueAdd((valueAdd + 1));
            handleProductRedux((valueAdd + 1));
          } }
        >
          +
        </button>
      </div>
    </CardProduct>
  );
}

export default Card;
