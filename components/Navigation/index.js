import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import LanguageSelection from './LanguageSelection'

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-section">
            <div className="header-left-section">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="/demo/table-usage">Table Usage</Nav.Link>
            </div>
            <div className="header-right-section">
              <LanguageSelection />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
