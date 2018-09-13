import React from "react";
import { Button } from "react-bootstrap";
import EditClientContainer from "./edit-client/Container";
import moment from "moment";

function ClientRenderComponent(props) {
    const cardStyles = {
        backgroundColor: "rgba(223, 223, 229, 0.9)",
        width: "30%",
        minWidth: "250px",
        maxWidth: "300px",
        flex: "1 0 auto",
        margin: "15px 2.5%",
        fontSize: "1em",
        textAlign: "left",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        padding: "2px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5px"
    };

    const nameStyles = {
        color: "rgba(250, 250, 250, 0.95)",
        fontFamily: "'Yellowtail', cursive",
        textShadow: "0 0 25px rgba(51, 51, 51, 0.98)"
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
        marginLeft: "15px",
        fontSize: ".8em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    };

    const unpaid = {
        ...valueStyles,
        color: "rgba(227, 4, 89, .95)"
    };

    const buttonContainer = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    };

    return (
        <div style={cardStyles}>
            <div>
                <h2 style={nameStyles}>{props.client.name}</h2>
                <div style={keyStyles}>
                    Session Date:{" "}
                    <div style={valueStyles}>
                        {moment(props.client.sessionDate).format("lll")}
                    </div>
                </div>
                <div style={altKeyStyles}>
                    <div style={{ width: "50%" }}>
                        <div>Type:</div>
                        <div style={valueStyles}>
                            {props.client.sessionType}
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div>Location:</div>
                        <div style={valueStyles}>
                            {props.client.sessionLocation || "TBD"}
                        </div>
                    </div>
                </div>

                <div style={altKeyStyles}>
                    <div style={{ width: "50%" }}>
                        <div>Quote:</div>
                        <div
                            style={
                                props.client.quotePaid ? valueStyles : unpaid
                            }>
                            ${props.client.quote || 0}
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div>Deposit:</div>
                        <div
                            style={
                                props.client.depositPaid ? valueStyles : unpaid
                            }>
                            ${props.client.deposit || 0}
                        </div>
                    </div>
                </div>

                <div style={keyStyles}>Special Requests/Notes:</div>
                <div style={keyStyles}>
                    <div style={valueStyles}>
                        {props.client.specialRequests || "N/A"}
                    </div>
                </div>
            </div>

            <div style={buttonContainer}>
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
