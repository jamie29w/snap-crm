import axios from "axios";
import moment from "moment";

const clientsUrl = "http://localhost:8900/clients/";

const LOAD_CLIENTS = "LOAD_CLIENTS";
const ADD_CLIENT = "ADD_CLIENT";
const DELETE_CLIENT = "DELETE_CLIENT";
const EDIT_CLIENT = "EDIT_CLIENT";

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
                client
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

export default function clients(prevClients = [], action) {
    let newClients = [...prevClients];
    switch (action.type) {
        case LOAD_CLIENTS:
            console.log(action.clients);
            return action.clients
                .map(client => {
                    client.sessionDate = moment(client.sessionDate).format(
                        "lll"
                    );
                    return client;
                })
                .reverse();
        case ADD_CLIENT:
            action.client.sessionDate = moment(
                action.client.sessionDate
            ).format("lll");
            return [action.client, ...newClients];
        case DELETE_CLIENT:
            return newClients.filter(client => {
                return client._id === action.id ? false : true;
            });
        case EDIT_CLIENT:
            return newClients.map(client => {
                if (client._id === action.id) {
                    action.editedClient.sessionDate = moment(
                        action.editedClient.sessionDate
                    ).format("lll");
                    return action.editedClient;
                } else return client;
            });
        default:
            return prevClients;
    }
}
