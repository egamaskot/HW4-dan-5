import Main from "./Main";
import React from "react";
import FormPlaylist from "./Form";
import Header from "./Header"

class PlaylistPage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="Main-Utama">
                    <h2 className="selamatdatangakun">Selamat Datang, $Nama Akun</h2>
                    <h3></h3>
                    <br />
                    <Main />
                    <FormPlaylist />
                </div>
            </div>   
        )
    }
}

export default PlaylistPage;
