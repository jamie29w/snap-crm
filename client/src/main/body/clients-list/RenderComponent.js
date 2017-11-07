import React from "react";
import Client from "./Client";

function ClientRenderComponent(props) {
    const containerStyles = {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    };

    return <div style={containerStyles}>{props.genClientsList()}</div>;
}

export default ClientRenderComponent;
