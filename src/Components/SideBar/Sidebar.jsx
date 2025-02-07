import React from "react";
import "./Sidebar.css";
import Sidebaroption from "../SideBarOption/Sidebaroption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { StateProviderValue } from "../../StateProvider";
function Sidebar() {
  const [{ playlists }, dispatch] = StateProviderValue();
  console.log("retrieving playlists", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />
      <Sidebaroption Icon={HomeIcon} title="Home" />
      <Sidebaroption Icon={SearchIcon} title="Search" />
      <Sidebaroption Icon={LibraryMusicIcon} title="Your Libary" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <Sidebaroption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
