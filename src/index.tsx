import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./components/Profile";

const HomePage = () => {
  return <div>
    Welcome Home
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
