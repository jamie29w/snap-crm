import React from "react";
// import glamorous, { ThemeProvider } from "glamorous";
import ModalComponent from "./Modal";
// import backgroundUrl from "../../assets/cameras-wide.jpeg";
import { Button } from "react-bootstrap";

function HeaderComponent(props) {
    const headerDivStyles = {
        backgroundColor: "gray",
        // backgroundSize: "cover",
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
        marginRight: "2px"
    };
    const crmStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "300",
        fontSize: "6em",
        // fontStyle: "italic"
        display: "inline",
        color: "#FAFAFA",
        marginLeft: "2px"
    };

    const buttonStyles = {
        backgroundColor: "#FAFAFA",
        fontFamily: "'Raleway', sans-serif",
        fontSize: "1.4em"
    };

    return (
        <div>
            <div style={headerDivStyles}>
                <div style={containerStyles}>
                    <h1 style={snapStyle}>Snap</h1>
                    <h1 style={crmStyle}>CRM</h1>
                </div>
                <div style={containerStyles}>
                    <Button onClick={props.openModal} style={buttonStyles}>
                        Add a Client
                    </Button>
                </div>
            </div>
            <ModalComponent
                show={props.modalShow}
                onHide={props.closeModal}
                handleChange={props.handleChange}
                handleAddSubmit={props.handleAddSubmit}
                inputs={props.inputs}
            />
        </div>
    );
}

export default HeaderComponent;
