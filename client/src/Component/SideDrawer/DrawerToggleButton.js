import React from 'react';
import './DrawerToggleButton.style.scss';



const DrawerToggleButton = props => (
    <button className='toggle-button' click={props.click}>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
        <div className='toggle-button_line'></div>
    </button>
);

export default DrawerToggleButton