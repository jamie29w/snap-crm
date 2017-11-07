import React from "react";
import HeaderComponent from "./Component";

import { clientActions } from "../../redux/clients";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            inputs: {
                name: "",
                quote: 0,
                sessionType: "",
                sessionDate: "",
                specialRequests: ""
            }
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            };
        });
        console.log(this.state.inputs);
    }

    handleSaveSubmit(e) {
        e.preventDefault();
        this.props.addClient(this.state.inputs);
    }

    render() {
        return (
            <HeaderComponent
                openModal={this.openModal}
                closeModal={this.closeModal}
                modalShow={this.state.showModal}
                handleChange={this.handleChange}
                handleSaveSubmit={this.handleSaveSubmit}
                inputs={this.state.inputs}
            />
        );
    }
}

const mapStateToProps = state => {
    return { clients: state.clients };
};

export default connect(mapStateToProps, clientActions)(HeaderContainer);
