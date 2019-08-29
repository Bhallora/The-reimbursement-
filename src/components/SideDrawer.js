import React from 'react';
import './SideDrawer.css';
import { NavLink, HashRouter } from 'react-router-dom';
//import { Provider}from 'react-redux';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <HashRouter>
            <nav className={drawerClasses}>


                <ul>
                    <li>
                        <NavLink exact to="/"> Home </NavLink>
                    </li>

                    <li>
                        <NavLink to="/components/view-Applications">View Applications</NavLink>
                    </li>
                    <li>
                        <NavLink to="/components/new-Entry"> New  Entry </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"> Log out </NavLink>
                    </li>
                </ul>
            </nav>
        </HashRouter>

    );
};
export default sideDrawer;