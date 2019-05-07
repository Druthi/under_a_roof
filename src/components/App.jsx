
import React, { Component} from "react";
import Listings from "./Listings.jsx";
import styled from 'styled-components';
import { Router, Link } from "@reach/router";
import Login from './Login.jsx';

const Container = styled.div`
  background-color: #403544;
  min-height: 1000px;
`;
const Navbar = styled.div`
  padding: 1%;
  background-color: #3a253a;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;
const User = styled.span`
  float: right;
  color: #f7f7f7;
  margin-right: 5%;
`;
const LinkSpan = styled.span`
color: #f7f7f7;
margin-left: 22px;
`;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false,
      user:{}
    }
    this.getUser = this.getUser.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  getUser(user){
    this.setState({
      loggedIn:true,
      user
    })
  }
  addToList(anime) {
    let id = anime.id;
    let user = this.state.user;
    let ids = user.anime_ids.split(',');
    ids.push(id);
    user.anime_ids = ids.join(',');
    console.log(user, id, anime)
    this.setState({
      user
    });
  }
  render(){
    return(
      <Container className="App">
       <Navbar>
        <Link to="/"><LinkSpan>Home</LinkSpan></Link> <Link to="/login"><LinkSpan>Login</LinkSpan></Link>
        <User>{this.state.user.name}</User>
       </Navbar>
        <Router>
          <Listings user={this.state.user} addToList={this.addToList} loggedIn={this.state.loggedIn} path="/" />
          <Login getUser={this.getUser} path="/login" />
        </Router>
      </Container>
    );
  }
}

export default App;