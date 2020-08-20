import React from 'react'
import './SideDrawer.style.scss'

const SideDrawerButtons = props => (
    <nav className='side-drawer'>
        <ul>
            <li ><a className='close-button' onClick={props.click}>Close X</a></li>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Facts</a></li>
        </ul>
    </nav>
    );
export default SideDrawerButtons;