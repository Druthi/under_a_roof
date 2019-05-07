
import React, { Component} from "react";
import FacebookLogin from 'react-facebook-login';
import { navigate } from '@reach/router';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
padding: 16%;
text-align: center;
`;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    this.loginToFacebook = this.loginToFacebook.bind(this);
  }

  loginToFacebook(response) {
    console.log(response)
    var { name, userID, id } = response;
    axios({
      method:'post',
      url:'/addUser',
      data:{
        name,
        id,
        userID,
        profile_picture:response.picture.data.url
      },
      "Content-Type": "application/json"
    })
      .then((response)=> {
        this.props.getUser(response.data);
        navigate(`/`)
      });

  }
  render(){
    return(
      <Container>
        <FacebookLogin
          appId="2172293116219003"
          fields="name,email,picture"
          icon="fa-facebook"
          callback={this.loginToFacebook}
        />
      </Container>
    );
  }
}

export default Login;