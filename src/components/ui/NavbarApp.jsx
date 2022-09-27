import { Container, Navbar } from 'react-bootstrap';

export const NavbarApp = () => {
  return (
    <Navbar style={{ backgroundColor: '#ff6666' }} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white' }} >
          React Test App
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}