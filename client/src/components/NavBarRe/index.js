import React, { Component } from "react";
import { 
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import WeatherWidget from '../weatherWidget/index';

class NavbarPage extends Component {

state = {
    isOpen: false
  };
  
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

// {/* <MDBNavbar color="#O32539" dark expand="md" >
//       <MDBNavbarBrand>
//         {/* <WeatherWidget /> */}
//       </MDBNavbarBrand>
//       <MDBNavbarToggler onClick={this.toggleCollapse} />
//       <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//         <MDBNavbarNav right>
//           <MDBNavItem>
//             <MDBNavLink to="#!">Home</MDBNavLink>
//           </MDBNavItem>
//           <MDBNavItem>
//             <MDBNavLink to="#!">Features</MDBNavLink>
//           </MDBNavItem>
//           <MDBNavItem>
//             <MDBNavLink to="#!">Pricing</MDBNavLink>
//           </MDBNavItem>
//         </MDBNavbarNav>
//       </MDBCollapse>
//     </MDBNavbar> */}

      <MDBNavbar expand="md" className="pb-4 pb-sm-4 z-depth-2" dark>
        <MDBNavbarBrand>
                <WeatherWidget />
        </MDBNavbarBrand>
       
        {/* Toggle Hamburger Menu */}
        <MDBNavbarToggler onClick={this.toggleCollapse} className="mt-4 mb-3" color="#1C768F" />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} className="mt-4" navbar>
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