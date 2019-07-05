import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import logo from './navpugs.png';
  import avatar from './avatar.png';
import WeatherWidget from '../weatherWidget';
import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="navigatBar">
        <Navbar color="light" light expand="md" className="z-depth-2">
          <NavbarBrand href="/home/">
          {/* <img className="pug-logo" src={logo} alt="Logo" /> */}
          <NavItem>
                <NavLink href="/home/"><WeatherWidget></WeatherWidget></NavLink>
              </NavItem>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
        
            <Nav className="ml-auto d-flex" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="h4 gray-text">
                  Mah Pugs...
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/home">Find Pugs in my area</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/mypugs">See my Pugs</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a href="/create">Create a Pug!</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/home/"></NavLink>
              </NavItem>
              <NavbarBrand href="/home/"><img src={avatar} alt="Avatar" /></NavbarBrand>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="navbar-expand z-depth-2" style={{backgroundColor:"#022133 ", width:"100vw", height:"1em", }}></div>

      </div>
    );
  }
}

{/* A JSX comment */}
