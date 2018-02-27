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
    let isAuthenticated = this.props.authReducer.isAuthenticated;
    console.log(`App isAuthenticated is`);
    console.log(isAuthenticated);
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute path="/profile" component={BodyComponent} />
          <Route
            component={FooterComponent}
            style={
              this.props.isAuthenticated || localStorage.getItem('token')
                ? { display: 'inherit' }
                : { display: 'none' }
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps, authActions)(App));

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
