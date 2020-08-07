import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { StateProviderValue } from "./StateProvider";
const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = StateProviderValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, []);
  console.log("the user", user);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
