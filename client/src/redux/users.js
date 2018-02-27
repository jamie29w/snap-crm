import axios from 'axios';

const authUrl = '/auth/';

//ACTION VARS
const LOGON = 'LOGON';
const LOGOUT = 'LOGOUT';
const HANDLE_AUTH_ERROR = 'HANDLE_AUTH_ERROR';

//EXPLAIN
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

//HELPER FUNCTIONS
const logon = (success, user) => {
  return {
    type: LOGON,
    success,
    user
  };
};

const handleAuthError = (key, errCode) => {
  return {
    type: HANDLE_AUTH_ERROR,
    key,
    errCode
  };
};

//AUTH ACTIONS
const signup = (creds, history) => {
  return dispatch => {
    axios
      .post(authUrl + 'signup/', creds)
      .then(response => {
        console.log(response.data);
        let { token, user, success } = response.data;
        localStorage.setItem('token', token);
        dispatch(logon(success, user));
        history.push('/profile');
      })
      .catch(err => {
        console.error(err);
        dispatch(handleAuthError('signup', err.response.status));
      });
  };
};

const signin = (creds, history) => {
  return dispatch => {
    axios.post(authUrl + 'login/', creds).then(response => {
      console.log(response.data);
      let { token, user, success } = response.data;
      localStorage.setItem('token', token);
      dispatch(logon(success, user));
      history.push('/profile');
    });
  };
};

const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  };
};

const verify = (history, pathname) => {
  return dispatch => {
    axios
      .get(authUrl + 'verify')
      .then(response => {
        let { success, user } = response.data;
        dispatch(logon(success, user));
        history.push(pathname);
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const authActions = {
  signup,
  signin,
  logout,
  verify
};

//DEFAULT STATE
let defaultState = {
  clients: [],
  user: {
    username: '',
    admin: false,
    _id: ''
  },
  authErrCode: {
    signup: '',
    signin: ''
  },
  isAuthenticated: false
};

//REDUCER
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGON:
      return {
        ...state,
        authErrCode: {
          signup: '',
          signin: ''
        },
        user: action.user,
        isAuthenticated: action.success
      };
    case HANDLE_AUTH_ERROR:
      return {
        ...state,
        authErrCode: {
          ...state.authErrCode,
          [action.key]: action.errCode
        }
      };
    case LOGOUT:
      return defaultState;
    default:
      return {
        ...state
      };
  }
};

export default authReducer;
