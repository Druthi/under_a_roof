
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
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false,
      user:{}
    }
    this.getUser = this.getUser.bind(this);
  }

  getUser(user){
    this.setState({
      loggedIn:true,
      user
    })
  }
  render(){
    return(
      <Container className="App">
       <Link to="/">Home</Link> <Link to="/login">Login</Link>
        <h1> Hello, World! </h1>
        <Router>
          <Listings path="/" />
          <Login getUser={this.getUser} path="/login" />
        </Router>
      </Container>
    );
  }
}

export default App;