import styled from 'styled-components';

export const NavBarReduced = styled.nav`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  background: #282a36;
  height: 50px;
  padding: 5px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);

  div.showLinks {
    width: 90%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.container_user {
      width: 15%;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      div.container_name {
        /* width: 50px; */
        /* height: 40px; */
        padding: 5px 10px 5px 10px;
        /* margin-right: 20px; */
        text-align: center;
        border-radius: 100%;
        border: 1px solid yellow;
      }
    }
  }

  a { 
    text-decoration: none;
    transition: all .3s linear;
    color: white;
    text-underline-offset: 5px;
    
    
    :hover, :active {
      color: ${(props) => props.theme.colors.primary.borderColor};
      text-decoration: underline;
    }

  }

  div {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  background: #282a36;
  height: 50px;
  padding: 5px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);

  div.nav_menu {
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.nav_list {
      height: 100%;
      display: flex;
      align-items: center;

      div.nav-item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          margin: 0 2vw;
        }

      }
    }
    
  }

  a { 
    text-decoration: none;
    transition: all .3s linear;
    color: white;
    text-underline-offset: 5px;
    
    
    :hover, :active {
      color: ${(props) => props.theme.colors.primary.borderColor};
      text-decoration: underline;
    }

  }
  
  .exit {
    transition: all .3s ease-in-out;
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
    background: #50fa7b;
    border-radius: 4px;
    text-align: center;
    color: #000;
    font-weight: 400;
    padding: 10px 18px;
    font-size: 18px;
    border: 0;

    :hover {
      color: #000;
      text-decoration: none;
      background: rgba(80,250,123,.8);
    }

  }
  
`;

export const xablau = styled.div``;
