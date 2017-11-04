import React from "react";

class BodyContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        const containerStyle = {
            minHeight: "50vh",
            width: "100%"
        };
        const pStyles = {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "1em"
        };
        return (
            <div style={containerStyle}>
                <div>
                    <p style={pStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, suscipit, architecto! Vitae est,
                        maiores adipisci cum necessitatibus sed ut provident.
                        Iure laborum quaerat repellendus voluptatibus dolores
                        quibusdam magni fugit dolor.
                    </p>
                    <p style={pStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo, suscipit, architecto! Vitae est,
                        maiores adipisci cum necessitatibus sed ut provident.
                        Iure laborum quaerat repellendus voluptatibus dolores
                        quibusdam magni fugit dolor.
                    </p>
                </div>
            </div>
        );
    }
}

export default BodyContainer;
