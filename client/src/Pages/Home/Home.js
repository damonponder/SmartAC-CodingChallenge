import React, { Component } from 'react';
import './Home.style.scss';
import { Link } from "react-router-dom";
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import TexasSeal from '../../assets/tx-seal.png'

export default class Home extends Component {
    constructor(props) {
        super(props);
    this.state = {
        sideDrawerOpen: false
    }
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    drawerCloseClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }
   
    render () {

        let sideDrawer;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer click={this.drawerCloseClickHandler}/>; 
    
        }

        return (
            <React.Fragment>
            <div style={{height:'100%'}}>
            
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            {sideDrawer}
            <div className='texas-seal-div'>
            <img className='image-texas-seal' src={TexasSeal}/>
            </div>
            <div className="nav-link">
            <Link to="/About" >
              Please Click the Link to Find out more About the Lone Star State
            </Link>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
  

