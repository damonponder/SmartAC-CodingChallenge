import React, { Component } from 'react';
import './Facts.style.scss';
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import facts from '../../copies/facts.json'

const allFacts = facts.allFacts;
export default class Fact extends Component {
   constructor(props) {
       super(props);
    this.state = {
        sideDrawerOpen: false,
        facts: null
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
            {SideDrawer}
            
            </div>
            <div>
                <ul>
                {allFacts.map(s => (<li>{s}</li>))}
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
 