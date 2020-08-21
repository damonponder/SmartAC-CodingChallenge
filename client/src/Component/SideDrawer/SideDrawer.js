import React from 'react'
import './SideDrawer.style.scss'

const sideDrawerButtons = props => (
    <nav className='side-drawer'>
        <ul>
            <li ><a className='close-button' onClick={props.click}>Close X</a></li>
            <li><a href='/'>Home</a></li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Facts'>Facts</a></li>
        </ul>
    </nav>
    );
export default sideDrawerButtons;