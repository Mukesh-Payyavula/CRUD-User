import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Navbar.css';


const Header = () => {
  return (
    <div>
      <Navbar >
        <Container>
          <Navbar.Brand as={Link} to="/">CRUD</Navbar.Brand>
          <Nav >
            <Nav.Link  as={Link} to="/" className='nav-link'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user" className='nav-link'>Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
