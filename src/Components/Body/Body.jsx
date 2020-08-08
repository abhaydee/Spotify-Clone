import React from "react";
import "./Body.css";
import Header from "../Header/Header";
function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          className="body__image"
          src="https://i.scdn.co/image/ab67706f00000003afae879804953e376fb32fe0"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>BOHO + Chill</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
