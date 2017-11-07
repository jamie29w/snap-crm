import React from "react";
import { Button } from "react-bootstrap";
import EditClientContainer from "./edit-client/Container";

function ClientRenderComponent(props) {
    const cardStyles = {
        backgroundColor: "rgba(223, 223, 229, .25)",
        width: "30%",
        minWidth: "250px",
        // flexGrow: "1",
        flexBasis: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "1em",
        textAlign: "left",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        padding: "2px 16px"
    };

    const nameStyles = {
        color: "rgba(250, 250, 250, 0.95)",
        fontFamily: "'Yellowtail', cursive",
        textShadow: "0 0 25px rgba(51, 51, 51, 0.98)"
    };

    const textStyles = {
        color: "inherit",
        fontFamily: "'Raleway', sans-serif",
        textShadow: "0 0 40px rgba(250, 250, 250, 0.95)"
    };

    return (
        <div style={cardStyles}>
            <h2 style={nameStyles}>{props.client.name}</h2>
            <h4 style={textStyles}>Session Type: {props.client.sessionType}</h4>
            <h4 style={textStyles}>Session Date: {props.client.sessionDate}</h4>
            <h4 style={textStyles}>
                <span style={{ width: "50%" }}>
                    Quote: ${props.client.quote}
                </span>
                <span style={{ width: "50%" }}>
                    {" "}
                    Paid: {props.client.paid ? "Yes" : "Not Yet"}
                </span>
            </h4>
            <h4 style={textStyles}>
                Special Requests/Notes: {props.client.specialRequests || "N/A"}
            </h4>

            <Button
                className="buttonClass"
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
