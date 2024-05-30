import * as React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';


const MainStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-family: 'Covered By Your Grace', cursive;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const styles = {
  container: {
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: '20px',
    backgroundColor: '#334445',
    color: '#F5D547',
  },
};
const HomePage = () => {

return( 
  <div style={styles.container}>
  <p>No</p>
  </div>
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