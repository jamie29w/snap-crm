import React from 'react';
import { authActions } from '../../redux/users';
import LoginPageComponent from './Component';
import { connect } from 'react-redux';

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
    this.signinAttempt = this.signinAttempt.bind(this);
    this.signupAttempt = this.signupAttempt.bind(this);
  }

  clearInputs() {
    this.setState({
      inputs: {
        username: '',
        password: ''
      }
    });
  }

  signinAttempt() {
    this.props.signin(this.state.inputs, this.props.history);
    this.clearInputs();
  }

  signupAttempt() {
    this.props.signup(this.state.inputs, this.props.history);
    this.clearInputs();
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
    let authErrCode = this.props.authReducer.authErrCode.signin;
    let errMsg = '';
    if (authErrCode < 500 && authErrCode > 399) {
      errMsg = 'Invalid Username or Password. Please try again.';
    } else if (authErrCode > 499) {
      errMsg = 'Server error';
    }
    return (
      <LoginPageComponent
        handleChange={this.handleChange}
        inputs={this.state.inputs}
        signinAttempt={this.signinAttempt}
        signupAttempt={this.signupAttempt}
        errMsg={errMsg}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, authActions)(LoginPageContainer);
