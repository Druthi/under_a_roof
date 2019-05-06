
import React, { Component} from "react";
import FacebookLogin from 'react-facebook-login';
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    this.loginToFacebook = this.loginToFacebook.bind(this);
  }

  loginToFacebook(response) {
    console.log(response)
  }
  render(){
    return(
      <div>
       <FacebookLogin
    appId="2172293116219003"
    autoLoad={true}
    fields="name,email,picture"
    icon="fa-facebook"
    callback={this.loginToFacebook}
    />,

      </div>
    );
  }
}

export default Login;