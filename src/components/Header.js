import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Matrix</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" exact>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/importants">
            <Nav.Link>Importants</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/finished">
            <Nav.Link href="/finished">Finished</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
