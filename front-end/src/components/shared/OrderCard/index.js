import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
`;

export const OrderCard = styled.div`
  div.order-container{
    display: flex;
    width: ${(props) => props.theme.sizes.cardSize};
    height: 130px;
    margin: 20px;

    flex-direction: row;
    align-items: center;
    gap: 7px;
    outline: none;
    border-radius: 8px;
    padding: 5px;
    text-decoration: none;
    box-shadow: rgba(130, 130, 200, 0.35) 2px 2px 2px 5px;

    background-color: ${(props) => props.theme.colors.primary.orderCardBackground};

    div.container-id-card{
      display: flex;
      width: 100px;
      height: 95%;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      text-decoration: none;

      background-color: ${(props) => props.theme.colors.primary.borderColor};
      color: #000000;
    }

    div.container-status-card{
      display: flex;
      width: 150px;
      height: 50%;

      flex-direction: column;
      align-self: flex-start;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      background-color: #90020280;
      color: ${(props) => props.theme.colors.primary.activeButtonBackground};
    }

    div.container-info-card{
      display: flex;
      width: 250px;
      height: 95%;

      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      padding: 5px;
      border-radius: 8px;

      background-color: transparent;
      color: ${(props) => props.theme.colors.primary.activeButtonBackground};
    }

    :hover{
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
      border: 1px solid ${(props) => props.theme.colors.primary.hoverButtonBackground};
      }
  }
`;
