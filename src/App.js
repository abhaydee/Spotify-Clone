import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Utils/spotify";
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (token) {
      setToken(_token);
    }
    console.log("the token state", token);
  }, []);
  return (
    <div className="app">{token ? <h1>WE are logged in</h1> : <Login />}</div>
  );
}

export default App;
