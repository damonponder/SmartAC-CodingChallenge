import React, { Component } from 'react';
import './Facts.style.scss';
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import facts from '../../copies/facts.json'


export default class Fact extends Component {
   constructor(props) {
       super(props);
    this.state = {
        sideDrawerOpen: false,
        facts: []
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
    factdatalist = () => { facts.map( 
        this.setState({facts})
        );

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
            {SideDrawer}
            
            </div>
            <div>
                <ul>
                    <li>{this.factdatalist}</li>
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
 