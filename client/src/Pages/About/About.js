import React, { Component } from 'react';
import './About.style.scss';
import Toolbar from '../../Component/ToolBar/Toolbar';
import SideDrawer from '../../Component/SideDrawer/SideDrawer';
import TexasSeal from '../../assets/tx-seal.png'
import TexasFlag from '../../assets/tx-flag.png'
import TexasMap from '../../assets/tx-map.jpg'


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
            {sideDrawer}
            <div className='about-texas-seal'>
            <img className='about-image-texas-seal' src={TexasSeal}/>
            </div>
            <div className="about-h1">
            <h1>About Texas</h1>
            </div>
            <div className='lonestar-about-div-2'>
            <p className='lonestar-text-1' >Texas is a state in the South Central Region of the United States. It is the second largest U.S. state by both area (after Alaska) and population (after California). 
            Texas shares borders with the states of Louisiana to the east, Arkansas to the northeast, 
            Oklahoma to the north, New Mexico to the west, and the Mexican states of Chihuahua, Coahuila, Nuevo León, and Tamaulipas to the southwest, and has a coastline with the Gulf of Mexico to the southeast.</p>
            <img className='lonestar-about-image' src={TexasFlag}></img>
            <p className='lonestar-text-2'>Houston is the most populous city in Texas and the fourth largest in the U.S., while 
            San Antonio is the second-most populous in the state and seventh largest in the U.S. 
            Dallas–Fort Worth and Greater Houston are the fourth and fifth largest metropolitan 
            statistical areas in the country, respectively. Other major cities include Austin, the 
            second-most populous state capital in the U.S., and El Paso. Texas is nicknamed the 
            "Lone Star State" for its former status as an independent republic, and as a reminder of the 
            state's struggle for independence from Mexico. The "Lone Star" can be found on the Texas state 
            flag and on the Texas state seal.[11] The origin of Texas's name is from the word táyshaʼ, 
            which means "friends" in the Caddo language.[12]</p>
            </div>
            <div className='lonestar-about-div-3'>
            <p className='lonestar-text-3' >Texas is a state in the South Central Region of the United States. It is the second largest U.S. state by both area (after Alaska) and population (after California). 
            Texas shares borders with the states of Louisiana to the east, Arkansas to the northeast, 
            Oklahoma to the north, New Mexico to the west, and the Mexican states of Chihuahua, Coahuila, Nuevo León, and Tamaulipas to the southwest, and has a coastline with the Gulf of Mexico to the southeast.</p>
            <img className='lonestar-about-image-2' src={TexasMap}></img>
            <p className='lonestar-text-4'>Houston is the most populous city in Texas and the fourth largest in the U.S., while 
            San Antonio is the second-most populous in the state and seventh largest in the U.S. 
            Dallas–Fort Worth and Greater Houston are the fourth and fifth largest metropolitan 
            statistical areas in the country, respectively. Other major cities include Austin, the 
            second-most populous state capital in the U.S., and El Paso. Texas is nicknamed the 
            "Lone Star State" for its former status as an independent republic, and as a reminder of the 
            state's struggle for independence from Mexico. The "Lone Star" can be found on the Texas state 
            flag and on the Texas state seal.[11] The origin of Texas's name is from the word táyshaʼ, 
            which means "friends" in the Caddo language.[12]</p>
            </div>
            </div>
            </React.Fragment>
        )
    }
}