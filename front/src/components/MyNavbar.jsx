import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand href="#home"><h1>KENKÄKAUPPA</h1></Navbar.Brand>
        </LinkContainer>
        
        <Nav className="me-auto">
        <Nav.Link href="#home">Miehet</Nav.Link>
        <Nav.Link href="#home">Naiset</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Kirjautunut sisään: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
// useReducer