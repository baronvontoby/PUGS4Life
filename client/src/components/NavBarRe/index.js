import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBHamburgerToggler, MDBNavbarToggler, MDBIcon
} from "mdbreact";
import WeatherWidget from '../weatherWidget/index';

class NavbarPage extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

state = {
    collapse1: false,
    collapseID: ''
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

render() {
  return (
      <MDBNavbar color="#O32539" expand="md" className="pb-4 pb-sm-4 z-depth-2">
        <MDBNavbarBrand>
                <WeatherWidget />
        </MDBNavbarBrand>
        <div className="menu-cover" style={{backgroundColor: "#O32539", height: "10%", width: "10%"}}></div>
        {/* Toggle Hamburger Menu */}
        <MDBHamburgerToggler className="mt-4 mb-3" color="#1C768F" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar className="mt-4">
              <MDBNavbarNav right>
                <MDBNavItem className="pt-2">
                  <MDBNavLink to="/home">Search PUGs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pt-2">
                  <MDBNavLink to="/create">Create a PUG</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/mypugs" className="text-center mx-1 pt-2"><MDBIcon icon="user" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;