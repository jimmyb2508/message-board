import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { GoPin } from "react-icons/go";


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><GoPin /><i className="fas fa-paper-plane"></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/send">Create</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">View</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Message Board</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;