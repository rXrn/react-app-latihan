import { Halo } from "./assets/greetings/Halo";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { Container, Col, Row } from "react-bootstrap";
import { GuestBookList } from "./guest-book/GuestBookList";

export function App() {
  return (
    <Container fluid>
      <Header></Header>
      <Row>
        <Col>
          <h1>Test</h1>
        </Col>
        <Col sm="6" md="4">
          <Halo />
        </Col>
        <GuestBookList></GuestBookList>
      </Row>
      <Footer></Footer>
    </Container>
  );
}
