import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hariom P. Shivhare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                <Link><button className="btn btn-primary mx-2 my-2">Home</button></Link>
                <Link><button className="btn btn-primary mx-2 my-2">GitHub</button></Link>
                <Link><button className="btn btn-primary mx-2 my-2">Contact</button></Link>
          </Navbar.Collapse>
        </Container>

      </Navbar>


    </>
  );
}

export default AppNavbar;
