//Since adding shrinking animation to header, it is not responsive to mobile
//screen width. Also, Visible: All Clients button is not functional yet.

import React from "react";
import ModalComponent from "../Modal";
import { Button } from "react-bootstrap";

function HeaderComponent(props) {
    const headerDivStyles = {
        backgroundColor: "rgba(18, 51, 66, 0.8)",
        width: "100%",
        height: "20vh",
        minHeight: "170px",
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        transition: "all ease-in-out 0.5s",
        position: "fixed",
        flexWrap: "no-wrap"
    };

    const shortHeaderDivStyles = {
        ...headerDivStyles,
        height: "10vh",
        minHeight: "85px"
    };

    const containerStyles = {
        flexWrap: "nowrap",
        margin: "20px",
        transition: "all ease-in-out 0.5s"
    };

    const shortContainerStyles = {
        ...containerStyles,
        margin: "10px"
    };

    const snapStyles = {
        fontFamily: "'Yellowtail', cursive",
        fontSize: "6.6em",
        display: "inline",
        textShadow: "0 0 25px #FAFAFA",
        marginRight: "2px",
        color: "rgba(51, 51, 51, 0.98)",
        transition: "all ease-in-out 0.5s"
    };

    const shortSnapStyles = {
        ...snapStyles,
        fontSize: "4.4em"
    };

    const crmStyles = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "300",
        fontSize: "6em",
        display: "inline",
        color: "#FAFAFA",
        marginLeft: "2px",
        transition: "all ease-in-out 0.5s"
    };

    const shortCrmStyles = {
        ...crmStyles,
        fontSize: "4em"
    };

    const buttonStyles = {
        padding: "10px 15px",
        fontSize: "1.3em",
        transition: "all ease-in-out 0.5s"
    };

    const shortButtonStyles = {
        ...buttonStyles,
        fontSize: "1em"
    };

    return (
        <div>
            <div
                style={
                    props.scrollHeight < 5
                        ? headerDivStyles
                        : shortHeaderDivStyles
                }>
                <div
                    style={
                        props.scrollHeight < 5
                            ? containerStyles
                            : shortContainerStyles
                    }>
                    <h1
                        style={
                            props.scrollHeight < 5
                                ? snapStyles
                                : shortSnapStyles
                        }>
                        Snap
                    </h1>
                    <h1
                        style={
                            props.scrollHeight < 5 ? crmStyles : shortCrmStyles
                        }>
                        CRM
                    </h1>
                </div>
                <div
                    style={
                        props.scrollHeight < 5
                            ? containerStyles
                            : shortContainerStyles
                    }>
                    <Button
                        style={
                            props.scrollHeight < 5
                                ? buttonStyles
                                : shortButtonStyles
                        }
                        className="buttonClass">
                        Visible: All Clients
                    </Button>
                    <Button
                        style={
                            props.scrollHeight < 5
                                ? buttonStyles
                                : shortButtonStyles
                        }
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
                closeModal={props.closeModal}
                handleDateChange={props.handleDateChange}
            />
        </div>
    );
}

export default HeaderComponent;
