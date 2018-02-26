import React from 'react';
import LoginPage from './loginPage/Container';
import HeaderContainer from './header/Container';
import BodyComponent from './body/Component';
import FooterComponent from './footer/Component';

function App() {
  return (
    <div>
      <HeaderContainer />
      <LoginPage />
      {/* <BodyComponent />
      <FooterComponent /> */}
    </div>
  );
}

export default App;
