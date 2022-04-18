import "./styles.css";
import PlaylistPage from "./PlaylistPage/index"
import MainPage from "./Main/index"
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component = {MainPage}/>
          <Route path="/playlist"  component = {PlaylistPage}/>
        </Switch>
      </Router>
         
     );
  }
}

export default App;
