import React from "react";
import EditClientComponent from "./Component";
import { clientActions } from "../../../../redux/clients";
import { connect } from "react-redux";

class EditClientContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            inputs: {
                name: this.props.client.name,
                quote: this.props.client.quote,
                quotePaid: this.props.client.quotePaid,
                deposit: this.props.client.deposit,
                depositPaid: this.props.client.depositPaid,
                sessionType: this.props.client.sessionType,
                sessionDate: this.props.client.sessionDate,
                specialRequests: this.props.client.specialRequests
            }
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        console.log(this.props);
        this.setState({ showModal: true });
    }

    handleDateChange(mmtDT) {
        console.log(mmtDT);
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    sessionDate: mmtDT._d
                }
            };
        });
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
        this.props.editClient(this.props.id, this.state.inputs);
        this.setState({ showModal: false });
    }

    render() {
        return (
            <EditClientComponent
                openModal={this.openModal}
                closeModal={this.closeModal}
                modalShow={this.state.showModal}
                handleChange={this.handleChange}
                handleSaveSubmit={this.handleSaveSubmit}
                inputs={this.state.inputs}
                handleDateChange={this.handleDateChange}
            />
        );
    }
}

export default connect(null, clientActions)(EditClientContainer);
