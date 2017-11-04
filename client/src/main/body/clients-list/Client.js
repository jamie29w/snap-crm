import React from "react";

function ClientRenderComponent() {
    const cardStyles = {
        width: "30%",
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "1em",
        textAlign: "center"
    };

    return (
        <div style={cardStyles}>
            <h2>Client Name: Dummy</h2>
            <h3>Session Date: Date</h3>
            <h3>Session Type: Type</h3>
        </div>
    );
}

export default ClientRenderComponent;
