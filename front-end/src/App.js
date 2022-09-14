import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Register from './pages/Register';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import SellerOrdersPage from './pages/SellerOrdersPage';
import SellerOrderDetail from './pages/SellerOrderDetail';
import CustomerOrdersPage from './pages/CustomerOrdersPage';
import Checkout from './pages/CheckoutCustomer/CheckoutCustomer';
import OrderDetailsCustomer from './pages/OrdDetailsCustomer/OrdDetailsCustomer';
import Admin from './pages/Admin';
import './App.css';
import  { lightTheme, darkTheme } from './assets/styles/themes/Default';
import GlobalStyles from './assets/styles/Global';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="toggle_theme">
          <button onClick={themeToggler}>Trocar tema</button>
      </div>
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />

        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route
          path="/customer/orders/:id"
          render={ (props) => (<OrderDetailsCustomer { ...props } />) }
        />
        <Route path="/customer/orders" component={ CustomerOrdersPage } />

        <Route path="/seller/orders/:id" component={ SellerOrderDetail } />
        <Route path="/seller/orders" component={ SellerOrdersPage } />
        <Route path="/admin/manage" component={ Admin } />
      </Switch>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
//
