import React from "react";
import { Button } from "react-bootstrap";
import EditClientContainer from "./edit-client/Container";

function ClientRenderComponent(props) {
    const cardStyles = {
        width: "30%",
        minWidth: "250px",
        // flexGrow: "1",
        flexBasis: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "1em",
        textAlign: "left"
    };

    return (
        <div style={cardStyles}>
            <h2>Client Name: {props.client.name}</h2>
            <h3>Session Type: {props.client.sessionType}</h3>
            <h3>Session Date: {props.client.sessionDate}</h3>
            <h3>
                <span style={{ width: "50%" }}>
                    Quote: ${props.client.quote}
                </span>
                <span style={{ width: "50%" }}>
                    {" "}
                    Paid: {props.client.paid ? "Yes" : "Not Yet"}
                </span>
            </h3>
            <h3>
                Special Requests/Notes: {props.client.specialRequests || "N/A"}
            </h3>

            <Button
                style={{
                    display: "inline-block",
                    margin: "5px"
                }}
                onClick={() => {
                    props.handleDeleteClick(props.client._id);
                }}>
                Delete
            </Button>
            <EditClientContainer />
        </div>
    );
}

export default ClientRenderComponent;
