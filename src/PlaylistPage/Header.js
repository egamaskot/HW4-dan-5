import React from "react";
import logo from "../gambar/logo-putih.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <aside>
        <div className="main">
          <Link to="/">
            <img
              className="logoplaylist"
              src={logo}
              alt="Logo playlist"
            />
          </Link>
          <div className="container-main">
            <div className="header-konten">
              <a className="tombol login" href="https://g8lc8c.csb.app/">
                <span className="spanlogin">Login</span>
              </a>
              <br />
              <a className="tombol upgrade" href="https://g8lc8c.csb.app/">
                <span className="spanlogin">Upgrade Premium</span>
              </a>
            </div>
            <div className="header-menu">
              <a className="playlist" >
                Home
              </a>
              <a className="playlist" >
                Search
              </a>
              <a className="playlist" >
                Your Playlist
              </a>
              <a className="playlist" >
                Make a Playlist
              </a>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Header;
