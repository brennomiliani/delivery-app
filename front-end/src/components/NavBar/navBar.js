import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import usePath from '../../hooks/usePath';
import { saveUser } from '../../redux/actions';
import * as S from './styles';
import { getUserAcessFromLocal } from '../../services/localStorage';
import ReducedNavBar from './reducedNavBar';

function NavBar() {
  const dispatch = useDispatch();
  const [inSellerRoute, setInSellerRoute] = useState(false);
  const [inAdminRoute, setInAdminRoute] = useState(false);
  const { pathname } = usePath();
  const [userData, setUserData] = useState({ name: '', token: '' });
  const [reducedScreen, setReducedScreen] = useState(window.screen.width <  579 ? true : false);

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
    if (pathname.includes('/admin')) {
      setInAdminRoute(true);
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    dispatch(saveUser(getLastUser()));
    verifyRoute();
    if (window.screen.width <  579) {
      return setReducedScreen(true);
    }
    return setReducedScreen(false);
  }, []);

  if (reducedScreen) {
    const objInfos = { userData, inAdminRoute, inSellerRoute };
    return (
      <S.NavBarReduced>
        <ReducedNavBar {...objInfos }/>
      </S.NavBarReduced>)
  }

  return (
    <S.NavBar className="nav container">
      <div className="nav_menu" id="nav-menu">
        <div className="nav_list grid">
          <div className="nav-item">

            {
              !inSellerRoute && !inAdminRoute
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
              inSellerRoute || inAdminRoute
                ? (
                  <Link
                    to={ inSellerRoute ? "/seller/orders" : "/admin/manage"}
                    data-testid="customer_products__element-navbar-link-orders"
                  >
                    { inSellerRoute ? "Pedidos" : "Gerenciar Usuários" }
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
