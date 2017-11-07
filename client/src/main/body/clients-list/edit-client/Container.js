import React from "react";
import EditClientComponent from "./Component";

class EditClientContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <EditClientComponent
                openModal={this.openModal}
                closeModal={this.closeModal}
                modalShow={this.state.showModal}
            />
        );
    }
}

export default EditClientContainer;
