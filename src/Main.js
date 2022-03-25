import React from "react";
import Song from "./Song.js";

class Main extends React.Component {
  render() {
    let songList = [
      {
        title: "Hati-Hati di Jalan",
        artist: "Tulus",
        description: "Album : Manusia",
        image:
          "https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e"
      },
      {
        title: "Manusia",
        artist: "Tulus",
        description: "Album : Manusia",
        image:
          "https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e"
      },
      {
        title: "Gajah",
        artist: "Tulus",
        description: "Album : Bukan Manusia",
        image:
          "https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e"
      }
    ];
    return (
      <div>
        {songList.map((songItem) => {
          return (
            <Song
              title={songItem.title}
              artist={songItem.artist}
              description={songItem.description}
              image={songItem.image}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
