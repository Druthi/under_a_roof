
import React, { Component} from "react";
import Listings from "./Listings.jsx";
import styled from 'styled-components';
import { Router, Link } from "@reach/router";
import Login from './Login.jsx';

const Container = styled.div`
  margin: 4% 10%;
  background-color: cornflowerblue;
`;

class App extends Component{
  render(){
    return(
      <Container className="App">
       <Link to="/">Home</Link> <Link to="/login">Login</Link>
        <h1> Hello, World! </h1>
        <Router>
          <Listings path="/" />
          <Login path="/login" />
        </Router>
      </Container>
    );
  }
}

export default App;