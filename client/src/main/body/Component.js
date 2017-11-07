import React from "react";
import ClientsListContainer from "./clients-list/Container";
import backgroundUrl from "../../assets/camera-gear.jpg";

function BodyContainer() {
    const containerStyle = {
        background: `url(${backgroundUrl}) no-repeat center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",

        minHeight: "50vh",
        width: "100%"
    };

    return (
        <div style={containerStyle}>
            <ClientsListContainer />
        </div>
    );
}

export default BodyContainer;
