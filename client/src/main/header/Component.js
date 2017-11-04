import React from "react";
// import glamorous, { ThemeProvider } from "glamorous";
import backgroundUrl from "../../assets/cameras-wide.jpeg";

function HeaderComponent(props) {
    const headerDivStyles = {
        backgroundColor: "gray",
        // backgroundSize: "cover",
        width: "100%",
        height: "40vh",
        display: "flex",
        alignItems: "center"
    };
    const containerStyle = {
        flexWrap: "nowrap",
        marginLeft: "auto",
        marginRight: "auto"
    };
    const snapStyle = {
        fontFamily: "'Yellowtail', cursive",
        fontSize: "4.3em",
        display: "inline",
        textShadow: "0 0 25px #FAFAFA",
        marginRight: "2px"
    };
    const crmStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "300",
        fontSize: "4em",
        // fontStyle: "italic"
        display: "inline",
        color: "#FAFAFA",
        marginLeft: "2px"
    };

    return (
        <div>
            <div style={headerDivStyles}>
                <div style={containerStyle}>
                    <h1 style={snapStyle}>Snap</h1>
                    <h1 style={crmStyle}>CRM</h1>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
