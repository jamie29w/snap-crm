import React from "react";
import ModalComponent from "../Modal";
import { Button } from "react-bootstrap";

function HeaderComponent(props) {
    const headerDivStyles = {
        backgroundColor: "rgba(18, 51, 66, 0.8)",
        width: "100%",
        height: "35vh",
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around"
    };
    const containerStyles = {
        flexWrap: "nowrap",
        marginLeft: "auto",
        marginRight: "auto"
    };
    const snapStyle = {
        fontFamily: "'Yellowtail', cursive",
        fontSize: "6.6em",
        display: "inline",
        textShadow: "0 0 25px #FAFAFA",
        marginRight: "2px",
        color: "rgba(51, 51, 51, 0.98)"
    };
    const crmStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "300",
        fontSize: "6em",
        display: "inline",
        color: "#FAFAFA",
        marginLeft: "2px"
    };

    return (
        <div>
            <div style={headerDivStyles}>
                <div style={containerStyles}>
                    <h1 style={snapStyle}>Snap</h1>
                    <h1 style={crmStyle}>CRM</h1>
                </div>
                <div style={containerStyles}>
                    <Button
                        style={{ padding: "10px 15px", fontSize: "1.3em" }}
                        onClick={props.openModal}
                        className="buttonClass">
                        Add a Client
                    </Button>
                </div>
            </div>
            <ModalComponent
                show={props.modalShow}
                onHide={props.closeModal}
                handleChange={props.handleChange}
                handleSaveSubmit={props.handleSaveSubmit}
                inputs={props.inputs}
            />
        </div>
    );
}

export default HeaderComponent;
