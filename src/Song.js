import React from "react";

class Song extends React.Component {
  render() {
    return (
      <div className="song-kotak">
        <img
          className="song-image"
          alt={this.props.title}
          src={this.props.image}
        />
        <div className="song-isi">
          <h2 className="song-title">{this.props.title}</h2>
          <h3 className="song-artist">{this.props.artist}</h3>
          <p className="song-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default Song;
