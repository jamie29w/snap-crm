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
    const spanStyle = {
        fontFamily: "'Yellowtail', cursive",
        fontSize: "4.3em",
        display: "inline"
    };
    const crmStyle = {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "300",
        fontSize: "4em",
        // fontStyle: "italic"
        display: "inline",
        color: "#FAFAFA"
    };

    return (
        <div>
            <div style={headerDivStyles}>
                <div style={containerStyle}>
                    <h1 style={spanStyle}>Snap </h1>
                    <h1 style={crmStyle}>CRM</h1>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
