import react from "react";
import logoPutih from "../gambar/logo-putih.png"
import logoVertical from "../gambar/vertical.png"
import { Link } from "react-router-dom";

export default class Nav extends react.Component{
    render(){
        return (
            <div className="main-header"> 
                <div className="main-header-kiri">
                    <div className="main-header-logo">
                        <img
                            className="main-logoplaylist"
                            src={logoPutih}
                        />
                        <img 
                            className="main-vertikal" 
                            src={logoVertical} 
                        />
                    </div>
                    <div className="main-header-konten">
                        <Link to="/playlist">
                            <a className="main-webmusic">Web Music Player</a>
                        </Link>
                        
                        {/* <li className="main-genre">Genre</li>
                        <li className="main-makeplaylist">Make a Playlist</li> */}
                    </div>
                </div>
                
                <div className="main-header-kanan">
                    <Link to="/playlist">
                        <a className="main-tombol-login"
                        ><span className="main-spanlogin">Login</span></a
                        >
                    </Link>
                </div>
            </div>
        );
    }
}
