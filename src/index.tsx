import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';



const StyleType = createGlobalStyle`
${reset}

html {
  box-sizing: border-box;
  font-family: 'Montserrat', regular;
}
*{
  box-sizing: inherit;
}
`;
const HomePage = () => {

return( 
  "no"
)

}

const homeNode = document.getElementById("home");

window.onload = ()=> {
  if (!homeNode) {
    return
  }
  const root = ReactDOM.createRoot(homeNode)
  root.render(<HomePage />)
}