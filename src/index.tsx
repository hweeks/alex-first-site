import React from "react";
import ReactDOM from "react-dom/client";

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