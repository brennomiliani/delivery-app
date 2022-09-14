import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 450vh;
`;

export const ProductsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0px 10px;
  border-radius: 8px;
  color: #000000;
  background-color: #ffffff;

  button {
      width: 200px;
      transition: all .3s ease-in-out;
      background: #50fa7b;
      border-radius: 4px;
      text-align: center;
      color: #000;
      padding: 10px 18px;
      font-size: 16px;
      border: none;
      margin-bottom: 10px;

    :hover {
      color: #000;
      text-decoration: none;
      background: rgba(80,250,123,.8);
    }
    }

  thead{
    border-radius: 8px;

    th.table-head{
      border-right: 1px solid #000000;
    }

    th.table-head-name{
      height: 30px;
      width: 60%;
      border-right: 1px solid #000000;
    }
  }

  tbody{
    text-align: center;
    font-weight: bold;

    td.index-table-item{
      height: 45px;
      width: 4%;

      border-radius: 8px 0px 0px 8px;

      background-color: ${(props) => props.theme.colors.primary.borderColor};
    }

    td.name-table-item{
      text-align: center;

      background-color: ${(props) => props.theme.colors.primary.activeButtonBackground};;
    }

    td.quantity-table-item{
      width: 10%;

      background-color: ${(props) => props.theme.colors.primary.disabledButtonBackground};
    }

    td.price-table-item{
      width: 10%;

      background-color: ${(props) => props.theme.colors.primary.greyTableCell};
      color: #FFFFFF;
    }

    td.total-table-item{
      width: 10%;

      border-radius: 0px 8px 8px 0px;

      background-color: #000000;
      color: #FFFFFF;
    }

    td.remove-table-item{

      button {
        background-color: rgba(255, 100, 0, 0.5);
        height: 35px;
        border: 1px solid rgb(255, 0, 0);
        box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 2px 0px;
        border-radius: 8px 8px 8px 8px;
        padding: 10px 20px;
      }
    }
  }
  
`;
