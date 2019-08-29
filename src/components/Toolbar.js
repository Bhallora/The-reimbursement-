import React from 'react';
import './Toolbar.css';
//import logo from './logo.png';
import DrawerToggleButton from './DrawerToggleButton';
const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>

                <div className="toolbar-logo">
                    <a href='./'>  PayMe </a>  </div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Log in </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>


    )
}
export default toolbar;