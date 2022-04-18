import React from "react";
import Halamanutama from "./HalamanUtama";
import Nav from "./Header"

class MainPage extends React.Component {
    render(){
        return(
            <div>
                <Nav />
                <Halamanutama />
            </div>   
        );
    }
}

export default MainPage;
