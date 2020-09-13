import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

#banner {
  display: flex;
  height: 150px;
  padding: 20px;
  padding-top: 30px;
  margin-left: 1.5%;
}

.titulo {
  color: #000000;
  text-align: center;
  font-weight: 300;
  font-size: 35px;
  font-family: sanz;
}

 *{
   margin: 0;
   padding: 0;
   outline:0;
   box-sizing: border-box;
 }

 html, body, #root{
   min-height: 100%;
 }

 body{
   background: #6C7B8B;
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
 }

 body, input, button{
   color: #222;
   font-size: 16px;
   font-family: Arial, Helvetica, sans-serif;
 }

 button{
   cursor: pointer;
 }

 .desenvolvedor {
  color: #000000;
  font-style: italic;
  font-family: sanz;
  font-size: 30px;
  text-align: center;
}

.instituicao {
  color: #000000;
  font-style: italic;
  font-family: sanz;
  font-size: 30px;
  padding: 10px;
  text-align: center;
}

`;