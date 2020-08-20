import React from 'react';
import './Toolbar.style.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import TxLogo from '../../assets/tx-logo.png';


const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
        <div className='toolbar-toggle-button'>
            <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className='toolbar_logo'>
            <img className='image-toolbar' src={TxLogo}/>
            </div>
        <div className='spacer'></div>
        <div className='toolbar_navigation-items'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Facts">Facts</a></li>
            </ul>
        </div>
    </nav>
</header>
);
export default Toolbar;