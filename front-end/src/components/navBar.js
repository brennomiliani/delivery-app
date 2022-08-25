import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav container">
      <div className="nav_menu" id="nav-menu">
        <ul className="nav_list grid">
          <li className="nav_item" onClick={ addNavBar }>
            <Link to="/login" />
            Produtos
          </li>

          <li className="nav_item" onClick={ addNavBar }>
            <Link to="/account" />
            Pedidos
          </li>
        </ul>
        <ul className="nav_list grid">
          <li className="nav_item" onClick={ addNavBar }>
            <Link to="/wallet" />
            {}
          </li>

          <li className="nav_item" onClick={ addNavBar }>
            <Link to="/historic" />
            Sair
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
