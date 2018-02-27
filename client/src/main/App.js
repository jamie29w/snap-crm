import React from 'react';
import LoginPage from './loginPage/Container';
import HeaderContainer from './header/Container';
import BodyComponent from './body/Component';
import FooterComponent from './footer/Component';
import ProtectedRoute from './ProtectedRoute.js';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../redux/users';

class App extends React.Component {
  componentDidMount() {
    let history = this.props.history;
    this.props.verify(history, history.location.pathname);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route component={LoginPage} />
          <ProtectedRoute path="/profile" component={BodyComponent} />
          <Route component={FooterComponent} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, authActions)(App));

// function App() {
//   return (
//     <div>
//       <HeaderContainer />
//       <LoginPage />
//       {/* <BodyComponent />
//       <FooterComponent /> */}
//     </div>
//   );
// }
//
// export default App;
