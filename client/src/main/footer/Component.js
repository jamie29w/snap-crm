//depcrecated - not currently being used\\

import React from 'react';

function Footer(props) {
  const footerDivStyles = {
    backgroundColor: 'rgba(18, 51, 66, 0.8)',
    width: '100%',
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    bottom: '0px',
    fontStyle: 'italic'
  };

  return (
    <div style={footerDivStyles}>
      <a className="linkStyles" href="">
        your
      </a>
      <a className="linkStyles" href="">
        custom
      </a>
      <a className="linkStyles" href="">
        links
      </a>
      <a className="linkStyles" href="">
        here
      </a>
    </div>
  );
}

export default Footer;
