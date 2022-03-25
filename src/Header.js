import React from "react";
import logo from "../gambar/logo-putih.png";

class Header extends React.Component {
  render() {
    return (
      <aside>
        <div className="main">
          <img
            className="logoplaylist"
            href="https://7m4l7f.csb.app/"
            src={logo}
            alt="Logo playlist"
          />
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
              <a className="playlist" href="https://x2yprs.csb.app/">
                Home
              </a>
              <a className="playlist" href="https://x2yprs.csb.app/">
                Search
              </a>
              <a className="playlist" href="https://x2yprs.csb.app/">
                Your Playlist
              </a>
              <a className="playlist" href="https://x2yprs.csb.app/">
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
