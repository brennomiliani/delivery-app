import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function NavBar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <nav className="nav container">
      <div className="nav_menu" id="nav-menu">
        <div className="nav_list grid">
          <span className="nav_item">
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            />
            Produtos
          </span>

          <span className="nav_item">
            <Link
              to="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            />
            Meus pedidos
          </span>
        </div>
        <div />
        <div className="nav_list grid">
          <span
            className="nav_item"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user ? user.name : ''}
          </span>

          <button
            type="button"
            onClick={ () => logout() }
            className="nav_item"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
