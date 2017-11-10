import React from "react";
import { Button } from "react-bootstrap";
import EditClientContainer from "./edit-client/Container";

function ClientRenderComponent(props) {
    const cardStyles = {
        backgroundColor: "rgba(223, 223, 229, .7)",
        width: "30%",
        minWidth: "250px",
        flexBasis: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        fontSize: "1em",
        textAlign: "left",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        padding: "2px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };

    const nameStyles = {
        color: "rgba(250, 250, 250, 0.95)",
        fontFamily: "'Yellowtail', cursive",
        textShadow: "0 0 25px rgba(51, 51, 51, 0.98)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    };

    const keyStyles = {
        color: "inherit",
        fontFamily: "'Raleway', sans-serif",
        fontSize: "1.3em",
        maxHeight: "100px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    };
    const altKeyStyles = {
        ...keyStyles,
        display: "flex",
        justifyContent: "space-between"
    };

    const valueStyles = {
        ...keyStyles,
        fontSize: ".8em"
    };

    return (
        <div style={cardStyles}>
            <div>
                <h2 style={nameStyles}>{props.client.name}</h2>
                <div style={keyStyles}>
                    Session Type:{" "}
                    <span style={valueStyles}>{props.client.sessionType}</span>
                </div>
                <div style={keyStyles}>
                    Session Date:{" "}
                    <span style={valueStyles}>{props.client.sessionDate}</span>
                </div>
                <div style={altKeyStyles}>
                    <span style={{ width: "50%" }}>
                        Quote:{" "}
                        <span style={valueStyles}>${props.client.quote}</span>
                    </span>
                    <span style={{ width: "50%" }}>
                        {" "}
                        Paid:{" "}
                        <span style={valueStyles}>
                            {props.client.paid ? "Yes" : "Not Yet"}
                        </span>
                    </span>
                </div>
                <div style={keyStyles}>Special Requests/Notes:</div>
                <div style={keyStyles}>
                    <span style={valueStyles}>
                        {props.client.specialRequests || "N/A"}
                    </span>
                </div>
            </div>

            <div>
                <Button
                    className="buttonClass"
                    onClick={() => {
                        props.handleDeleteClick(props.client._id);
                    }}>
                    Delete
                </Button>
                <EditClientContainer
                    client={props.client}
                    id={props.client._id}
                />
            </div>
        </div>
    );
}

export default ClientRenderComponent;
