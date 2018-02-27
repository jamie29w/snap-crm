import axios from 'axios';

const clientsUrl = '/clients/';
const authUrl = '/auth/';

//ACTION VARS
const LOAD_CLIENTS = 'LOAD_CLIENTS';
const ADD_CLIENT = 'ADD_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';
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
export const signup = (creds, history) => {
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

export const singin = (creds, history) => {
  return dispatch => {
    axios.post(authUrl + 'login', creds).then(response => {
      console.log(response.data);
      let { token, user, success } = response.data;
      localStorage.setItem('token', token);
      dispatch(logon(success, user));
      history.push('/profile');
    });
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  };
};

export const verify = (history, pathname) => {
  return dispatch => {
    axios
      .get(clientsUrl + 'verify')
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

//CLIENT (AKA SESSION) ACTIONS
const loadClients = () => {
  return dispatch => {
    axios.get(clientsUrl).then(response => {
      dispatch({
        type: LOAD_CLIENTS,
        clients: response.data
      });
    });
  };
};

const addClient = client => {
  return dispatch => {
    axios.post(clientsUrl, client).then(response => {
      dispatch({
        type: ADD_CLIENT,
        client: response.data
      });
    });
  };
};

const deleteClient = id => {
  return dispatch => {
    axios.delete(clientsUrl + id).then(response => {
      dispatch({
        type: DELETE_CLIENT,
        id
      });
    });
  };
};

const editClient = (id, editedClient) => {
  return dispatch => {
    axios.put(clientsUrl + id, editedClient).then(response => {
      dispatch({
        type: EDIT_CLIENT,
        editedClient: response.data,
        id
      });
    });
  };
};

export const clientActions = {
  loadClients,
  addClient,
  deleteClient,
  editClient
};

//REDUCER
export default function clients(prevClients = [], action) {
  let newClients = [...prevClients];
  switch (action.type) {
    case LOAD_CLIENTS:
      return action.clients.reverse();

    case ADD_CLIENT:
      return [action.client, ...newClients];

    case DELETE_CLIENT:
      return newClients.filter(client => {
        return client._id !== action.id;
      });

    case EDIT_CLIENT:
      return newClients.map(client => {
        return client._id === action.id ? action.editedClient : client;
      });

    default:
      return prevClients;
  }
}
