import styled from 'styled-components';

export const ProductsTable = styled.table`
  width: 100%;
  height: 100%;

  border-radius: 8px;

  background-color: #ffffff;

  thead{
    border-radius: 8px;

    th.table-head-name{
      width: 60%;
    }
  }

  tbody{
    text-align: center;
    font-weight: bold;

    tr{
      row-gap: 10px;
    }

    td.index-table-item{
      width: 4%;
      height: 35px;
      background-color: #697623;
      border-radius: 8px;
    }

    td.name-table-item{
      background-color: #569715;
      padding: 5px;
      text-align: center;
      border-radius: 8px;
    }

    td.quantity-table-item{
      width: 10%;
      background-color: #6978;
      border-radius: 8px;
    }

    td.price-table-item{
      width: 10%;
      background-color: #3987;
      border-radius: 8px;
    }

    td.total-table-item{
      width: 10%;
      background-color: #032684;
      border-radius: 8px;
    }
  }
`;

export const abc = styled.div``;
