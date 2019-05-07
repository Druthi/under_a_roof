
import React, { Component} from "react";
import FacebookLogin from 'react-facebook-login';
import { navigate } from '@reach/router';
import axios from 'axios';
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
      <div>
        <FacebookLogin
          appId="2172293116219003"
          fields="name,email,picture"
          icon="fa-facebook"
          callback={this.loginToFacebook}
        />
      </div>
    );
  }
}

export default Login;