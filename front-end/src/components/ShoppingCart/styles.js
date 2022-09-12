import styled from 'styled-components';

export const ShoppCart = styled.div`
    button {
     
      display: flex;  
      align-items: center;
      justify-content: center;
      margin: 20px;
      padding: 10px;
      box-shadow: rgba(130, 130, 200, 0.35) 2px 2px 2px 5px;
      border-radius: 20px;
      background-color: ${(props) => props.theme.colors.primary.colorBright};
      color: #000000;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s ease-in-out;

      :disabled{
        background-color: ${(props) => props
    .theme.colors.primary.disabledButtonBackground};
        color: #ffffff;
        cursor: not-allowed;
      }

      :hover{
        background-color: ${(props) => props.theme.colors.primary.hoverButtonBackground};
        color: #000000;
      }

      :active{
        background-color: ${(props) => props
    .theme.colors.primary.activeButtonBackground};;
        color: #ffffff;
      }
    }
`;
