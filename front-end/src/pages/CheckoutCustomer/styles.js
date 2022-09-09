import styled from 'styled-components';

export const Checkout = styled.div`
  width: 90%;
  min-height: 50vh;
  max-height: 100vh;
  margin: 10vh auto;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  background: #282a36;
  

  div.end-order-container {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.primary.borderColor};
    border-radius: 3px;
    height: 12vh;
    font-size: 12px;
    
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;

      * {
        margin: 0 1vw;
      }

      label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        margin: 0;
        
        * {
          width: 100%;
          margin: 0;
        }

        input, select {
          margin-top: 5px;
          padding: 5px;
        }
      }

      div.address-container {
        width: 50%
      }

      div.number-container {
        width: 10%
      }
    }

    button {
      width: 200px;
      transition: all .3s ease-in-out;
      background: #50fa7b;
      border-radius: 4px;
      text-align: center;
      color: #000;
      padding: 10px 18px;
      font-size: 16px;

    :hover {
      color: #000;
      text-decoration: none;
      background: rgba(80,250,123,.8);
    }
    }
  }
  
`;

export const xablau = styled.div``;
