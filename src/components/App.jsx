
import React, { Component} from "react";
import Listings from "./Listings.jsx";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Listings />
      </div>
    );
  }
}

export default App;