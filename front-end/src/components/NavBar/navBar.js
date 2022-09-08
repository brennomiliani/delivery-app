import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import usePath from '../../hooks/usePath';
import { saveUser } from '../../redux/actions';
import * as S from './styles';
import { getUserAcessFromLocal } from '../../services/localStorage';

function NavBar() {
  const dispatch = useDispatch();
  const [inSellerRoute, setInSellerRoute] = useState(false);
  const { pathname } = usePath();
  const [userData, setUserData] = useState({ name: '', token: '' });

  const getLastUser = () => {
    const user = getUserAcessFromLocal();
    if (user) {
      setUserData(user);
      return user;
    }
    return '';
  };

  const verifyRoute = () => {
    if (pathname.includes('/seller')) {
      setInSellerRoute(true);
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    dispatch(saveUser(getLastUser()));
    verifyRoute();
  }, []);

  return (
    <S.NavBar className="nav container">
      <div className="nav_menu" id="nav-menu">
        <div className="nav_list grid">
          <div className="nav-item">

            {
              !inSellerRoute
            && (
              <Link
                to="/customer/products"
                className="nav_item"
                data-testid="customer_products__element-navbar-link-products"
              >
                Produtos
              </Link>
            )
            }
          </div>
          <div className="nav-item">
            {
              inSellerRoute
                ? (
                  <Link
                    to="/seller/orders"
                    data-testid="customer_products__element-navbar-link-orders"
                  >
                    Pedidos
                  </Link>

                )
                : (
                  <Link
                    to="/customer/orders"
                    data-testid="customer_products__element-navbar-link-orders"
                  >
                    Meus Pedidos
                  </Link>
                )
            }
          </div>
        </div>
        <div className="nav_list grid">
          <div className="nav-item customer">
            <span
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { userData.name }
            </span>
          </div>

          <div className="nav-item">

            <Link
              className="exit"
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => logout() }
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </S.NavBar>
  );
}

export default NavBar;
