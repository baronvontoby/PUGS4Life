import React, { Component } from "react";
import { 
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBBtn } from "mdbreact";
import WeatherWidget from '../weatherWidget/index';
import './style.css';


class NavbarPage extends Component {

state = {
    isOpen: false
  };
  
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  this.handleClick = this.handleClick.bind(this);

}
handleClick() {
  console.log('Click happened');
  localStorage.clear();
  window.location = "/";
}



render() {
  return (

      <MDBNavbar expand="md" className="pb-4 pb-sm-4 z-depth-2" dark>
        <MDBNavbarBrand>
                <WeatherWidget />
        </MDBNavbarBrand>
       
        {/* Toggle Hamburger Menu */}
        <MDBNavbarToggler onClick={this.toggleCollapse} className="mt-4 mb-3" color="#1C768F" />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} className="mt-4" navbar>
              <MDBNavbarNav right>

                <MDBNavItem className="pt-2 text-color">
                  <MDBNavLink to="/home">Search PUGs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pt-2">
                  <MDBNavLink to="/create">Create a PUG</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/mypugs" className="text-center mx-1 pt-2"><MDBIcon icon="user" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink className="mx-1 p-0">
                  <MDBBtn onClick={this.handleClick} className="rounded-pill btn-sm logoutbtn" ><i className="far fa-2x fa-sign-out"></i></MDBBtn>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default NavbarPage;