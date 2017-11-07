import React from "react";
import RenderComponent from "./RenderComponent";
import Client from "./Client";

import { clientActions } from "../../../redux/clients";
import { connect } from "react-redux";

class ClientsListContainer extends React.Component {
    constructor() {
        super();

        this.genClientsList = this.genClientsList.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount() {
        this.props.loadClients();
    }

    genClientsList() {
        return this.props.clients.map((client, i) => {
            return (
                <Client
                    client={client}
                    key={client.name + i}
                    id={client._id}
                    handleDeleteClick={this.handleDeleteClick}
                />
            );
        });
    }

    handleDeleteClick(id) {
        this.props.deleteClient(id);
    }

    render() {
        return <RenderComponent genClientsList={this.genClientsList} />;
    }
}

const mapStateToProps = state => {
    return { clients: state.clients };
};

export default connect(mapStateToProps, clientActions)(ClientsListContainer);
