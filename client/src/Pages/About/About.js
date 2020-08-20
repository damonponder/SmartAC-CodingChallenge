import React, { Component } from 'react';
import './About.style.scss';
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import TexasSeal from '../../assets/tx-seal.png'
import TexasFlag from '../../assets/tx-flag.png'



export default class AboutTexas extends Component {
   constructor(props) {
       super(props);
    this.state = {
        sideDrawerOpen: false,
        

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
   
    render() {

        let sideDrawer;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer click={this.drawerCloseClickHandler}/>; 
    
        }

        return (
            <React.Fragment>
            <div style={{height:'100%'}}>
            
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            {SideDrawer}
            <div className='about-texas-seal'>
            <img className='about-image-texas-seal' src={TexasSeal}/>
            </div>
            <div className="about-h1">
            <h1>About Texas</h1>
            </div>
            <div className='lonestar-div'>
                <img className='lonestar-about' src={TexasFlag}/>
        <p className='lonestar-text-area' ></p>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
 