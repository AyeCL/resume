import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavigationMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Ranmaya</Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
