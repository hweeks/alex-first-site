import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./components/Profile";
import styled from "styled-components";
import glacialnormal from "./components/assets/GlacialIndifference-Regular.otf";

const HomePage = () => {
  return <div>
    Home
  </div>
}

const homeNode = document.getElementById("home");

window.onload = ()=> {
  if (!homeNode) {
    return
  }
  const root = ReactDOM.createRoot(homeNode)
  root.render(<HomePage />)
}