import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
`;

export const CardProduct = styled.div`

  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  box-shadow: rgba(130, 130, 200, 0.35) 2px 2px 2px 5px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 15px 5px; */
  background-color: rgb(51, 51, 68);
  width: ${(props) => props.theme.sizes.buttonSize};
  border-radius: 20px;

    h3 {
        color: ${(props) => props.theme.colors.primary.borderColor};
        font-size: ${(props) => props.theme.sizes.h3fontSize};
        margin-bottom: 20px;
        text-align: center;
        padding: 10px;
        max-width: 90%;
        height: 40px;
    }

    p {
        color: ${(props) => props.theme.colors.primary.borderColor};
        font-size: ${(props) => props.theme.sizes.smallfontSize};
        text-align: center;
        padding: 10px;
        height: 40px;
    }

    button {
      background-color: ${(props) => props.theme.colors.primary.borderColor};
      color: #000000;
      height: 35px;
      width: 35px;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      margin-bottom: 10px;
      margin-top: 10px;
      border-radius: 8px;

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

    img {
      max-width: 90px;
      height: 100px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    input {
      max-width: ${(props) => props.theme.sizes.smallfontSize};;
      height: 40px;
      margin: 0px 0px 15px;
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.colors.primary.borderColor};
      border-radius: 10px;
      color: ${(props) => props.theme.colors.primary.fontInputColor};
      font-size: ${(props) => props.theme.sizes.smallfontSize};
      transition: all 0.3s ease-in-out;
      text-align: center;

      ::placeholder {
        color: ${(props) => props.theme.colors.primary.fontInputColor};
      }

      :hover {
        border: 2px solid ${(props) => props.theme.colors.primary.borderColor};
        color: ${(props) => props.theme.colors.primary.fontInputColor};
      }

      :focus{
        border: 2px solid ${(props) => props.theme.colors.primary.borderColor};
      }
    }

    span{
        color: ${(props) => props
    .theme.colors.primary.disabledButtonBackground};
    } 
`;
