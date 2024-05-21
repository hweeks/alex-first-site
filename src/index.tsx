import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./components/Profile";

const HomePage = () => {
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <h1>Welcome to the Trial of: </h1>
    <Profile />
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
