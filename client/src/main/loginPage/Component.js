import React from 'react';
import backgroundUrl from '../../assets/camera-gear.jpg';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default function LoginPageComponent(props) {
  const bodyStyles = {
    background: `url(${backgroundUrl}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
    paddingTop: '45vh',
    paddingLeft: '2.5%',
    paddingRight: '2.5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const inputStyles = {
    minWidth: '300px',
    width: '20%',
    marginBottom: '5vh'
  };

  const buttonBox = {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '300px',
    width: '20%',
    marginBottom: '5vh'
  };

  return (
    <div style={bodyStyles}>
      <FormGroup>
        <FormControl style={inputStyles} type="text" placeholder="username" />
        <FormControl style={inputStyles} type="text" placeholder="password" />
        <div style={buttonBox}>
          <Button className="loginButtonClass">Login</Button>
          <Button className="signupButtonClass">Signup</Button>
        </div>
      </FormGroup>
    </div>
  );
}
