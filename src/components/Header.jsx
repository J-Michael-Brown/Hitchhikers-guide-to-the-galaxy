import React from "react";

function Header(props) {
  let headerStyles = {
    borderStyle: 'solid',
    borderColor: 'red',
    textAlign: 'center'
  }
  return (
    <div style={headerStyles}>
    <h1>Don't Panic</h1>
    </div>
  );
}

export default Header;
