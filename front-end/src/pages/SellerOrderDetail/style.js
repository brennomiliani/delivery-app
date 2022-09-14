import styled from 'styled-components';

export const SellerOrderDetails = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 5vh auto;

  h1 {
    margin: 0 5vw;
  }

  main {
    width: 90%;
    min-height: 50vh;
    max-height: 100vh;
    margin: 10px auto;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #282a36;

    div.order-details {
      display: flex;
      justify-content: space-around;
      width: 100%;

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

    
  }
  table {
    color: black;
    width: 85vw;
  }
    
  }
`;
