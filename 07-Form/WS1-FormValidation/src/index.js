import "./index.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Item from "./components/Item.jsx";
// React
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="app">
      <h1>Sign up</h1>
      <form className="form__register">
        <input
          type="email"
          placeholder="example@email.com"
          onChange={handleChangeEmail}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
          value={password}
        />
        <input type="password" placeholder="Confirm-password" />
        <button onClick={handleSubmit} type="submit">
          Sign up with Email
        </button>
      </form>
    </div>
  );
}

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
