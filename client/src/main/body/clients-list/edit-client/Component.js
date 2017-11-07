import React from "react";
import ModalComponent from "../../../Modal";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";

function EditClientComponent(props) {
    const modalStyles = {
        color: "black"
    };
    const colStyles = {
        position: "relative",
        top: "0",
        width: "50%",
        display: "inline-block"
    };
    const rowStyles = {
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%"
    };
    const textAreaStyles = {
        minWidth: "95%",
        maxWidth: "95%",
        marginLeft: "2.5%",
        marginRight: "2.5%",
        marginBottom: "5px",
        height: "20vh"
    };
    return (
        <div
            style={{
                display: "inline-block",
                marginLeft: "5px",
                marginRight: "5px"
            }}>
            <Button className="buttonClass" onClick={props.openModal}>
                Edit
            </Button>
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

export default EditClientComponent;
