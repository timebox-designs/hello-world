import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class AppNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Sarah Campbell</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="https://ca.linkedin.com/in/sarah-campbell-b9895081">LinkedIn</NavItem>
                        <NavItem href="mailto:sarahj.campb@gmail.com">Email</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;
