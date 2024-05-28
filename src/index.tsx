import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Profile } from "./components/Profile";
import styled from "styled-components";
import glacialnormal from "./components/assets/GlacialIndifference-Regular.otf";
>>>>>>> 4f18e3a (Added fonts)
=======
import { Header } from "./components/Header";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
>>>>>>> 3ba74a3 (Complete restart of site, added in bounding box,)



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
<<<<<<< HEAD
  return <div>
    Home
  </div>
=======
return( 
  "no"
)
>>>>>>> 3ba74a3 (Complete restart of site, added in bounding box,)
}

const homeNode = document.getElementById("home");

window.onload = ()=> {
  if (!homeNode) {
    return
  }
  const root = ReactDOM.createRoot(homeNode)
  root.render(<HomePage />)
}