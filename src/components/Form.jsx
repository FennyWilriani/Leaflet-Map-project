import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Button, CardTitle } from 'reactstrap';
import { FormGroup, Input, Label } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';


export default function Form() {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
      <div>
        <Card className='search-form' style={{width: '20rem'}}>
            <CardHeader>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="me-auto">
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Share Your Location</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Your Places
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h4" >
                    Welcome to MapLet!
                </CardTitle>
                <FormGroup floating>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">
                Search Location
                </Label>
            </FormGroup>
                {' '}
            <Button>Submit</Button>
            </CardBody>
        </Card>
      </div>
    )
  }