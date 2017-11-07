import React from "react";

function Footer(props) {
    const footerDivStyles = {
        backgroundColor: "rgba(18, 51, 66, 0.8)",
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
        bottom: "0px"
    };

    return (
        <div style={footerDivStyles}>
            <a className="linkStyles" href="">
                blah
            </a>
            <a className="linkStyles" href="">
                blah
            </a>
            <a className="linkStyles" href="">
                blah
            </a>
            <a className="linkStyles" href="">
                blah
            </a>
        </div>
    );
}

export default Footer;
