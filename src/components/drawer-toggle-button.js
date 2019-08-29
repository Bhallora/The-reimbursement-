import React from 'react';
import './drawer-toggle-button.css';

const drawerToggleButton = props => (

    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
)
export default drawerToggleButton;