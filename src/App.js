import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Utils/spotify";
function App() {
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    console.log("the token", token);
  }, []);
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
