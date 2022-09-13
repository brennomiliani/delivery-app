import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const ReducedNavBar = ({ userData, inAdminRoute, inSellerRoute }) => {
    const [showed, setShowed] = useState(false);
    
    const addNavBar = () => {
      setShowed(!showed);
    }

    return (
        <S.NavBarReduced >
            {
                showed
                ?  
                (<div className="showLinks" id="nav-menu">
                  <div>
        
                    {
                      !inSellerRoute && !inAdminRoute
                    && (
                      <Link
                        to="/customer/products"
                      
                        data-testid="customer_products__element-navbar-link-products"
                        onClick={ addNavBar }
                      >
                        Produtos
                      </Link>
                    )
                    }
                  </div>
                  <div>
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
                <div>
                  <div style={ {display: 'none'}}>
                    <span
                      data-testid="customer_products__element-navbar-user-full-name"
                    >
                      { userData.name }
                    </span>
                  </div>
        
                  <div>
        
                    <Link
                      to="/login"
                      data-testid="customer_products__element-navbar-link-logout"
                      onClick={ () => logout() }
                    >
                      Trocar User
                    </Link>
                  </div>
                </div>
                <div>
        
                    <Link
                    onClick={ addNavBar }
                    >
                        X
                    </Link>
                </div>
                </div>)
              : 
              (<div className='showLinks'>
                  <div>
        
                    <Link
                      onClick={ addNavBar }
                    >
                      Mais Opções
                    </Link>
                  </div>
                  <div className='container_user'>
                    <div className='container_name'>
                        <span
                        data-testid="customer_products__element-navbar-user-full-name"
                        >
                        { userData.name[0] }
                        </span>
                    </div>
                    <div>
            
                        <Link
                        to="/login"
                        data-testid="customer_products__element-navbar-link-logout"
                        onClick={ () => logout() }
                        >
                        Sair
                        </Link>
                    </div>
                  </div>
              </div>)
            }
      </S.NavBarReduced>
    )
}

export default ReducedNavBar;