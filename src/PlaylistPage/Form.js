import React from "react";

class FormPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jikaSubmit: false
    };
  }
  tekanSubmit() {
    this.setState({ jikaSubmit: true });
  }
  tekanClose() {
    this.setState({ jikaSubmit: false });
  }

  render() {
    let popUp;
    if (this.state.jikaSubmit) {
      popUp = (
        <h3>Playlist telah ditambahkan</h3>
        // <div className="modal">
        //   <div className="modal-dalam">
        //     <div className="modal-header">
        //       <h2>Playlist Added</h2>
        //     </div>
        //     <div className="modal-penjelasan">
        //       <h1>Selamat, Playlist sudah ditambahkan</h1>
        //     </div>
        //     <button
        //       className="back-to-home-button"
        //       onClick={() => {
        //         this.tekanClose();
        //       }}
        //     >
        //       Back to Home
        //     </button>
        //   </div>
        // </div>
      );
    }

    return (
      <div className="form-luar">
        <div className="kotak-form">
          <form>
            <p>Playlist Title</p>
            <input />
            <br />
            <p>Description</p>
            <textarea />
            <br />
            <br />
            {/* <div
              className="clickbuttonform"
              onClick={() => {
                this.tekanSubmit();
              }}
            >
              <input
                className="tombol-Add-Playlist"
                type="submit"
                value="Add Playlist"
              />
            </div> */}
            <button
              className="clickButtonForm"
              onClick={() => {this.tekanSubmit();
              }}
              type = 'submit'>
              Add Playlist
            </button>
          </form>
          {popUp} 
        </div>
      </div>
    );
  }
}

export default FormPlaylist;
