import React from "react";
import {Navbar, Nav} from "react-bootstrap";

function Navigation() {
return (
<Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/quiz">Quiz</Nav.Link>
      <Nav.Link href="/view-scores">View Scores</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default Navigation;