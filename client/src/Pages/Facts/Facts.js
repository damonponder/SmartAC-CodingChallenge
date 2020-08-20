import React, { Component } from 'react';
import './Facts.style.scss';
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import data from '../../copies/facts.json'

const allFacts = data.facts;
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

            <div className='texas-facts-title-div'>
            <h1 className='facts-title'>Fun Facts About Texas</h1>
            </div>
            <div className='texas-facts-list-div'>
                <ul className='facts-list'>
                {allFacts.map(s => (<li>{s}</li>))}
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
 