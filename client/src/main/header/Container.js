import React from "react";
import HeaderComponent from "./Component";

import { clientActions } from "../../redux/clients";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            scrollHeight: 0,
            narrow: false,
            inputs: {
                name: "",
                quote: 0,
                quotePaid: false,
                deposit: 0,
                depositPaid: false,
                sessionType: "",
                sessionLocation: "",
                sessionDate: Date.now(),
                specialRequests: ""
            }
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    handleDateChange(mmtDT) {
        this.setState(prevState => {
            if (mmtDT !== "Invalid date") {
                return {
                    prevState,
                    inputs: {
                        ...prevState.inputs,
                        sessionDate: mmtDT._d
                    }
                };
            } else return prevState;
        });
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]:
                        e.target.type === "checkbox"
                            ? e.target.checked
                            : e.target.value
                }
            };
        });
    }

    handleSaveSubmit(e) {
        e.preventDefault();
        this.props.addClient(this.state.inputs);
        console.log(this.state);
        this.setState({
            showModal: false,
            inputs: {
                name: "",
                quote: 0,
                quotePaid: false,
                deposit: 0,
                depositPaid: false,
                sessionType: "",
                sessionLocation: "",
                sessionDate: Date.now(),
                specialRequests: ""
            }
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
        console.log(this.state);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
    }

    scrollState(percent) {
        this.setState(prevState => {
            return {
                ...prevState,
                scrollHeight: percent
            };
        });
    }

    handleScroll() {
        let winHeight = window.innerHeight;
        let body = document.body;
        let html = document.documentElement;
        let docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        let value = html.scrollTop;
        let max = docHeight - winHeight;
        let percent = value / max * 100;
        this.scrollState(percent);
    }

    handleResize() {
        let flexDir = window.innerWidth < 750 ? true : false;
        this.setState(prevState => {
            return {
                ...prevState,
                flexDir
            };
        });
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
                handleDateChange={this.handleDateChange}
                handleScroll={this.handleScroll}
                scrollHeight={this.state.scrollHeight}
                flexDir={this.state.flexDir}
            />
        );
    }
}

const mapStateToProps = state => {
    return { clients: state.clients };
};

export default connect(mapStateToProps, clientActions)(HeaderContainer);
