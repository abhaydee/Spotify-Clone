import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { StateProviderValue } from "../../StateProvider";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = StateProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          className="body__image"
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs"></div>
    </div>
  );
}

export default Body;
