import styled, { keyframes, css } from 'styled-components';

// Cor e dimensões do container.
export const Container = styled.div`

  .meusReps {
    text-align: center;
    font-weight: 300;
    font-family: sanz;
    font-size: 35px;
    color: #0000CD;
  }

  max-width: 90%;
  background: #D3D3D3;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  padding: 10px;
  margin: 10px auto;
  height: 100%;

`;

// Características do form durante a mensagem de erro.
export const Form = styled.form`
  margin-top: 30px;
  display:flex;
  flex-direction: row;

  input{
    flex:1;
    border: 1px solid ${props => (props.error ? '#FF0000' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }

`;

// Utilizado para criar a animação do botão.
const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

// Características do botão.
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #4F4F4F;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading &&
    css`
      svg{
        animation: ${animate} 2s linear infinite;
      }
    `
  }

`;

// Características dos repositórios já incluídos.
export const List = styled.ul`
  list-style:none;
  margin-top: 20px;

  li{
    padding: 10px 0;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    & + li{
      border-top: 1px solid #eee;
    }

    a{
      color:#4F4F4F;
      text-decoration: none;
    }

  }

`;

// Características do ícone responsável por deletar.
export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
  background: transparent;
  color:#4F4F4F;
  border:0;
  padding: 8px 7px;
  outline:0;
  border-radius: 4px; 
`;



