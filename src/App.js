import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { StateProviderValue } from "./StateProvider";
const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = StateProviderValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log("the playlists", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("0GB9chRwz1EI9MkT3BjfbO").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);
  console.log("the user", user);
  console.log("the token", token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
