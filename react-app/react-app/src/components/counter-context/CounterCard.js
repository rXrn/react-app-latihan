import { Button } from "react-bootstrap";

import { Card, Col } from "react-bootstrap";
import CounterNumber from "./CounterNumber";
import { CounterButton } from "./CounterButton";

export function CounterCard(props) {
  return (
    <Col>
      <Card>
        <Card.Header>React Counter</Card.Header>
        <CounterNumber title="Ari" />
        <Card.Footer>
          <CounterButton />
        </Card.Footer>
      </Card>
    </Col>
  );
}
