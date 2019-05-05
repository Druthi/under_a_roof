
import React, { Component} from "react";
import Listings from "./Listings.jsx";
import styled from 'styled-components';

const Container = styled.div`
  margin: 4% 10%;
  background-color: cornflowerblue;
`;
class App extends Component{
  render(){
    return(
      <Container className="App">
        <h1> Hello, World! </h1>
        <Listings />
      </Container>
    );
  }
}

export default App;