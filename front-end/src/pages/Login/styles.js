import styled from 'styled-components';

export const Form = styled.div`

form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      height: 40px;
      margin: 0px 0px 15px;
      outline: none;
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.colors.primary.fontInputColor};
      border-radius: 10px;
      color: ${(props) => props.theme.colors.primary.fontInputColor};
      font-size: 15px;
      padding-left: 10px;
      transition: all 0.3s ease-in-out;

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

  button {
      background-color: ${(props) => props.theme.colors.primary.borderColor};
      color: #000000;
      height: 35px;
      width: ${(props) => props.theme.sizes.buttonSize};
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      margin-top: 10px;

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

  span{
    color: ${(props) => props
    .theme.colors.primary.disabledButtonBackground};
  }
}

  h1 {
    color: ${(props) => props.theme.colors.primary.borderColor};
    font-size: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const xablau = styled.div``;
