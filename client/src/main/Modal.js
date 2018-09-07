import React from "react"
import {
    FormGroup,
    FormControl,
    Button,
    Modal,
    ToggleButton
} from "react-bootstrap"
import Datetime from "react-datetime"

function ModalComponent(props) {
    const bodyStyles = {
        backgroundColor: "rgba(18, 51, 66, 0.8)",
        color: "#FAFAFA",
        minWidth: "275px"
    }
    const checkboxDiv = {
        width: "25%"
    }
    const checkboxStyles = {
        margin: "0% 25%"
    }
    const colStyles = {
        width: "50%",
        minWidth: "250px",
        flex: "1 1 auto",
        margin: "5px 0px"
    }
    const headerStyles = {
        backgroundColor: "rgba(18, 51, 66, 1)",
        color: "#FAFAFA"
    }
    const inputStyles = {
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5px",
        color: "black",
        flex: "1 1 auto"
    }
    const modalStyles = {
        color: "black",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        fontFamily: "'Raleway', sans-serif"
    }
    const paidInputStyles = {
        width: "100%",
        marginLeft: "5%"
    }
    const paidRow = {
        display: "flex",
        width: "100%"
    }
    const rowStyles = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
    const shortInputStyles = {
        width: "88%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5px",
        color: "black"
    }
    const textAreaStyles = {
        color: "black",
        minWidth: "95%",
        maxWidth: "95%",
        marginLeft: "2.5%",
        marginRight: "2.5%",
        marginBottom: "5px",
        height: "20vh"
    }
    

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
                                <div style={paidRow}>
                                    <div style={checkboxDiv}>
                                        Paid:
                                        <ToggleButton
                                            style={checkboxStyles}
                                            onChange={props.handleChange}
                                            checked={
                                                props.inputs.depositPaid ===
                                                true
                                            }
                                            name="depositPaid"
                                            type="checkbox"
                                            value={
                                                props.inputs.depositPaid ||
                                                false
                                            }
                                        />
                                    </div>
                                    <div style={paidInputStyles}>
                                        Deposit:
                                        <FormControl
                                            style={shortInputStyles}
                                            onChange={props.handleChange}
                                            value={props.inputs.deposit}
                                            name="deposit"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <div style={paidRow}>
                                    <div style={checkboxDiv}>
                                        Paid:
                                        <ToggleButton
                                            style={checkboxStyles}
                                            onChange={props.handleChange}
                                            checked={
                                                props.inputs.quotePaid === true
                                            }
                                            name="quotePaid"
                                            type="checkbox"
                                            value={
                                                props.inputs.quotePaid || false
                                            }
                                        />
                                    </div>
                                    <div style={paidInputStyles}>
                                        Quote:
                                        <FormControl
                                            style={shortInputStyles}
                                            onChange={props.handleChange}
                                            value={props.inputs.quote}
                                            name="quote"
                                            type="number"
                                        />
                                    </div>
                                </div>
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
    )
}

export default ModalComponent
