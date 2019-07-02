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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home/"><img src={logo} alt="Logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/weather/"><WeatherWidget></WeatherWidget></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Mah Pugs...
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Find Pugs in my area
                  </DropdownItem>
                  <DropdownItem>
                    See my Pugs
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Create a Pug!
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/home/">User avatar here</NavLink>
              </NavItem>
              <NavbarBrand href="/home/"><img src={avatar} alt="Avatar" /></NavbarBrand>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

{/* A JSX comment */}
