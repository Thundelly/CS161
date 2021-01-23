import React from 'react';
import { Navbar, Icon, Nav, Dropdown } from 'rsuite';


const NavBar = ({ onClick, ...props }) => {

    return (
        <Navbar { ...props }>
            <Navbar.Body>
                <Nav>
                    <Nav.Item
                        icon={ <Icon icon="home" /> }
                        onClick={ () => onClick(1) }>Home</Nav.Item>
                    <Dropdown title="Notes">
                        <Dropdown.Item>Company</Dropdown.Item>
                        <Dropdown.Item>Team</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="About">
                        <Dropdown.Item>Company</Dropdown.Item>
                        <Dropdown.Item>Team</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown>

                    <Dropdown title="About Class">
                        <Dropdown.Item>Class Schedule</Dropdown.Item>
                        <Dropdown.Item>Grading</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavBar;