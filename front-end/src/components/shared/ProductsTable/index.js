import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 450vh;
`;

export const ProductsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0px 10px;
  border-radius: 8px;

  background-color: #ffffff;

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
  }
`;
