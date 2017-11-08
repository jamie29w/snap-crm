import React from "react";
import ModalComponent from "../../../Modal";
import { Button } from "react-bootstrap";

function EditClientComponent(props) {
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
                closeModal={props.closeModal}
            />
        </div>
    );
}

export default EditClientComponent;
