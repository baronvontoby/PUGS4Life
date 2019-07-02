import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBJumbotron, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import CreateForm from '../../components/CreateForm';
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
import './CreatePug.css';

class CreatePug extends React.Component {
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
        return <div className="create-background">
        <div>
        {/* Navbar */}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Jumbotron */}
        <MDBJumbotron className="p-0">
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
          />
        </MDBJumbotron>
      </div>
            {/* Input Form */}
            <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm={12} className="text-center">
                    <h2>Create a PUG!</h2>
                </MDBCol>
            </MDBRow>
            <CreateForm />
                <MDBRow>
                    <MDBCol sm={12} className="text-center">
                        <MDBBtn className="createBtn create-color mx-auto">Create</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        
         
    }
}

export default CreatePug;