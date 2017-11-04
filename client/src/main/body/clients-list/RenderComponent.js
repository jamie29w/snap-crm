import React from "react";
import Client from "./Client";

function ClientRenderComponent() {
    const containerStyles = {
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    };

    return (
        <div style={containerStyles}>
            <Client />
            <Client />
            <Client />
        </div>
    );
}

export default ClientRenderComponent;
