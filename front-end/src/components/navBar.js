import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import usePath from '../hooks/usePath';
import { saveUser } from '../redux/actions';
import { getUserAcessFromLocal } from '../services/localStorage';

function NavBar() {
  const dispatch = useDispatch();
  const [inSellerRoute, setInSellerRoute] = useState('false');
  // const [inAdminRoute, setInAdminRoute] = useState(false);
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
    // if (pathname.includes('/admin')) {
    //   setInAdminRoute(true);
    // }
  };

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    dispatch(saveUser(getLastUser()));
    verifyRoute();
  }, []);

  return (
    <nav className="nav container">
      <div className="nav_menu" id="nav-menu">
      <div className="nav_list grid">
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

          {
            inSellerRoute
              ? (
                <span className="nav_item">
                  <Link
                    to="/seller/orders"
                    data-testid="customer_products__element-navbar-link-orders"
                  >
                    Pedidos
                  </Link>
                </span>
              )
              : (
                <span className="nav_item">
                  <Link
                    to="/customer/orders"
                    data-testid="customer_products__element-navbar-link-orders"
                  >
                    Meus Pedidos
                  </Link>
                </span>
              )
          }
        </div>
        <div />
        <div className="nav_list grid">
          <span
            className="nav_item"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userData.name }
          </span>

          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
            className="nav_item"
          >
            Sair
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
