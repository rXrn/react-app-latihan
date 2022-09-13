import { Container, Row, Col, Navbar } from "react-bootstrap";

export function Header() {
  return (
    <Row as="header">
      <Col xs="12" className="p-0">
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">React Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}
