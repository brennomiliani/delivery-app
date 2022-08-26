import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
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
            data-testid="customer_products__element-navbar-user-fdiv -name"
          >
            Lilian Admin
          </span>

          <span className="nav_item">
            <Link to="/" data-testid="customer_products__element-navbar-link-logout" />
            Sair
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
