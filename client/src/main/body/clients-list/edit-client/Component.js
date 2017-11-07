import React from "react";
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
            <Button onClick={props.openModal}>Edit</Button>
            <Modal
                style={modalStyles}
                show={props.modalShow}
                onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your Client Session:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <div style={colStyles}>
                            Name:
                            <FormControl style={rowStyles} type="text" />
                            Quote:
                            <FormControl style={rowStyles} type="text" />
                        </div>
                        <div style={colStyles}>
                            Session Type:
                            <FormControl style={rowStyles} type="text" />
                            Session Date:
                            <FormControl style={rowStyles} type="text" />
                        </div>
                        <div>
                            Special Requests:
                            <FormControl style={textAreaStyles} type="text" />
                        </div>
                        <Button style={{ marginLeft: "2.5%" }}>Save!</Button>
                    </FormGroup>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default EditClientComponent;
