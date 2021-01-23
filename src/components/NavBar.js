import React from 'react';
import { Navbar, Icon, Nav, Dropdown } from 'rsuite';


const NavBar = ({ onClick, ...props }) => {

    return (
        <Navbar { ...props }>
            <Navbar.Body>
                <Nav>
                    <Nav.Item
                        icon={ <Icon icon="home" /> }
                        onClick={ () => onClick('home') }>Home</Nav.Item>
                    <Dropdown title="Notes / HW">
                        <Dropdown.Item
                            onClick={ () => onClick('notes-solutions') }>Notes / Solutions</Dropdown.Item>
                        <Dropdown.Item
                            onClick={ () => onClick('assignments') }>Assignments</Dropdown.Item>
                    </Dropdown>

                    <Dropdown title="About Class">
                        <Dropdown.Item
                            onClick={ () => onClick('class-schedule') }>Class Schedule</Dropdown.Item>
                        <Dropdown.Item
                            onClick={ () => onClick('test-schedule') }>Test Schedule / Times</Dropdown.Item>
                    </Dropdown>

                    <Nav.Item
                        onClick={ () => onClick('piazza') }>Piazza</Nav.Item>

                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavBar;