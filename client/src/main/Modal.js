import React from "react";
import { FormGroup, FormControl, Button, Modal } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";

function ModalComponent(props) {
    const modalStyles = {
        color: "black",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        fontFamily: "'Raleway', sans-serif"
    };
    const headerStyles = {
        backgroundColor: "rgba(18, 51, 66, 1)",
        color: "#FAFAFA"
    };

    const bodyStyles = {
        backgroundColor: "rgba(18, 51, 66, 0.8)",
        color: "#FAFAFA"
    };

    const rowStyles = {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };

    const colStyles = {
        width: "50%",
        flex: "0 1 auto"
    };
    const inputStyles = {
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5px",
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
            <Modal.Header style={headerStyles} closeButton>
                <Modal.Title>Your Client Session:</Modal.Title>
            </Modal.Header>
            <Modal.Body style={bodyStyles}>
                <form onSubmit={props.handleSaveSubmit}>
                    <FormGroup>
                        <div style={rowStyles}>
                            <div style={colStyles}>
                                Name:
                                <FormControl
                                    style={inputStyles}
                                    value={props.inputs.name}
                                    onChange={props.handleChange}
                                    name="name"
                                    type="text"
                                />
                                Session Type:
                                <FormControl
                                    style={inputStyles}
                                    onChange={props.handleChange}
                                    value={props.inputs.sessionType}
                                    name="sessionType"
                                    type="text"
                                />
                                Session Location:
                                <FormControl
                                    style={inputStyles}
                                    onChange={props.handleChange}
                                    value={props.inputs.sessionLocation}
                                    name="sessionLocation"
                                    type="text"
                                />
                                Deposit:
                                <FormControl
                                    style={inputStyles}
                                    onChange={props.handleChange}
                                    value={props.inputs.deposit}
                                    name="deposit"
                                    type="number"
                                />
                                Quote:
                                <FormControl
                                    style={inputStyles}
                                    onChange={props.handleChange}
                                    value={props.inputs.quote}
                                    name="quote"
                                    type="number"
                                />
                            </div>

                            <div style={colStyles}>
                                Session Date & Time:
                                <Datetime
                                    style={inputStyles}
                                    onChange={props.handleDateChange}
                                    name="sessionDate"
                                    dateFormat={"ll"}
                                    value={props.inputs.sessionDate}
                                    input={false}
                                />
                            </div>
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
                        <Button type="submit" className="buttonClass">
                            Save!
                        </Button>
                        <Button
                            onClick={props.closeModal}
                            className="buttonClass">
                            Close
                        </Button>
                    </FormGroup>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;