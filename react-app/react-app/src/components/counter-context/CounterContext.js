import { Col, Row } from "react-bootstrap";
import { CounterProvider } from "../../context/counter-context";
import { CounterCard } from "./CounterCard";
export function CounterWithContext(props) {
  return (
    <>
      <Row>
        <Col>
          <h2>Counter Context</h2>
        </Col>
      </Row>
      <Row>
        <CounterProvider>
          <CounterCard />
        </CounterProvider>
      </Row>
    </>
  );
}
