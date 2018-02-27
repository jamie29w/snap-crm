import axios from 'axios';

const clientsUrl = '/clients/';

//ACTION VARS
const LOAD_CLIENTS = 'LOAD_CLIENTS';
const ADD_CLIENT = 'ADD_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';

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
      console.log(response.data);
      console.log(`response.data is`);
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
function clientsReducer(prevClients = [], action) {
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

export default clientsReducer;
