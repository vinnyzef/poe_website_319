import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, Outlet } from "react-router-dom"

export default function PoeNav() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Poe</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/creators"}>Creators</Link>
            </Nav.Link>
            <Nav.Link>Tickets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
