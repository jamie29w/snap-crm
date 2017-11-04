import React from "react";
import ClientRenderComponent from "./RenderComponent";
import Client from "./Client";

class ClientsListContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <ClientRenderComponent />;
    }
}

export default ClientsListContainer;
