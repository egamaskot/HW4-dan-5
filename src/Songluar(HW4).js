// import React from "react";
// import axios from "axios";
// import Song from "./Song.js";

// class SongLuarList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { daftar: [] };
//   }
//   componentDidMount() {
//     axios
//       .get(
//         "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
//       )
//       .then((res) => {
//         const daftar = res.data;
//         this.setState({ daftar });
//         console.log(daftar);
//         console.log(daftar.album.album_type);
//         console.log(daftar.album.disc_number);
//       });
//   }

//   // renderProducts() {
//   //   return this.state.daftar.map((daftar) => {
//   //     return (
//   //       <div>
//   //         <p>{daftar.album.album_type}</p>
//   //       </div>
//   //     );
//   //   });
//   // }

//   render() {
//     return (
//       <div className="album">
//         {/* <h4> Today's Pick </h4>
//         <p> aa </p> */}
//         {this.state.daftar.map((songItem) => {
//           return (
//             <Song
//               title={songItem.album.album_type}
//               artist={songItem.artists_name}
//               // description={songItem.description}
//               // image={songItem.image}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default SongLuarList;
