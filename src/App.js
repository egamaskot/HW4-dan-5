import "./styles.css";
import Main from "./Main.js";
import Header from "./Header.js";
import React from "react";
import FormPlaylist from "./Form.js";
import Album from "./Homework-Five.js";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <div class="alert alert-danger" role="alert">
          A simple primary alert—check it out!
        </div> */}
        <Header />
        <div className="Main-Utama">
          <h2 className="selamatdatangakun">Selamat Datang, $Nama Akun</h2>
          <h3></h3>
          <br />
          <Main />
          <FormPlaylist />
        </div>
      </div>
    );
  }
}

export default App;
