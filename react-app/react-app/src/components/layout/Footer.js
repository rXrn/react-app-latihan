import { Container, Row, Col, Navbar } from "react-bootstrap";

export function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Batal klik");
  };
  return (
    <Row as="footer">
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container fluid>
          <Navbar.Brand
            href="https://www.google.com"
            onClick={(e) => handleClick(e)}
          >
            React Footer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Row>
  );
}

<Col xs="12" className="p-0 text-center ">
  <Navbar bg="dark" variant="dark">
    <span className="text-white text-center">React Footer!</span>
  </Navbar>
</Col>;
