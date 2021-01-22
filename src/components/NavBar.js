import React from 'react';
import { Navbar, Icon, Nav, Dropdown } from 'rsuite';


const NavBar = props => {
    return (
        <Navbar>
            <Navbar.Header>
                <a href="#"
                    style={ { padding: "18px 20px", display: "inline-block" } }>RSUITE</a>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item icon={ <Icon icon="home" /> } >Home</Nav.Item>
                    <Nav.Item>News</Nav.Item>
                    <Nav.Item>Products</Nav.Item>
                    <Dropdown title="About">
                        <Dropdown.Item>Company</Dropdown.Item>
                        <Dropdown.Item>Team</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={ <Icon icon="cog" /> } >Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavBar;