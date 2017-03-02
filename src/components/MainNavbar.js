import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

class MainNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Sarah Campbell</Link>
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

export default MainNavbar;
