import React from "react";
import ClientsListContainer from "./clients-list/Container";

function BodyContainer() {
    const containerStyle = {
        minHeight: "50vh",
        width: "100%"
    };

    return (
        <div style={containerStyle}>
            <ClientsListContainer />
        </div>
    );
}

export default BodyContainer;
