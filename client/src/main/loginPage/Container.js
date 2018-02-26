import React from 'react';
import LoginPageComponent from './Component';

class LoginPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        username: '',
        password: ''
      },
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginAttempt = this.loginAttempt.bind(this);
    this.signupAttempt = this.signupAttempt.bind(this);
  }

  loginAttempt(username, password) {
    console.log('loginAttempt run');
  }

  signupAttempt(username, password) {
    console.log('signupAttempt run');
  }

  handleChange(e) {
    e.persist();
    this.setState(prevState => {
      return {
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [e.target.name]:
            e.target.name === 'username'
              ? e.target.value.toLowerCase()
              : e.target.value
        }
      };
    });
    console.log(this.state.inputs);
  }

  render() {
    return (
      <LoginPageComponent
        handleChange={this.handleChange}
        inputs={this.state.inputs}
        loginAttempt={this.loginAttempt}
        signupAttempt={this.signupAttempt}
      />
    );
  }
}

export default LoginPageContainer;
