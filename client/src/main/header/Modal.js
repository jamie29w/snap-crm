import React from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";

function ModalComponent(props) {
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
        marginRight: "5%",
        color: "black"
    };
    const textAreaStyles = {
        color: "black",
        minWidth: "95%",
        maxWidth: "95%",
        marginLeft: "2.5%",
        marginRight: "2.5%",
        marginBottom: "5px",
        height: "20vh"
    };
    return (
        <Modal show={props.show} onHide={props.onHide} style={modalStyles}>
            <Modal.Header closeButton>
                <Modal.Title>Your Client Session:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.handleAddSubmit}>
                    <FormGroup>
                        <div style={colStyles}>
                            Name:
                            <FormControl
                                style={rowStyles}
                                value={props.inputs.name}
                                onChange={props.handleChange}
                                name="name"
                                type="text"
                            />
                            Quote:
                            <FormControl
                                style={rowStyles}
                                onChange={props.handleChange}
                                value={props.inputs.quote}
                                name="quote"
                                type="number"
                            />
                        </div>
                        <div style={colStyles}>
                            Session Type:
                            <FormControl
                                style={rowStyles}
                                onChange={props.handleChange}
                                value={props.inputs.sessionType}
                                name="sessionType"
                                type="text"
                            />
                            Session Date:
                            <FormControl
                                style={rowStyles}
                                onChange={props.handleChange}
                                value={props.inputs.sessionDate}
                                name="sessionDate"
                                type="text"
                            />
                        </div>
                        <div>
                            Special Requests:
                            <FormControl
                                style={textAreaStyles}
                                onChange={props.handleChange}
                                value={props.inputs.specialRequests}
                                name="specialRequests"
                                type="text"
                                componentClass="textarea"
                            />
                        </div>
                        <Button type="submit" style={{ marginLeft: "2.5%" }}>
                            Save!
                        </Button>
                    </FormGroup>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;
