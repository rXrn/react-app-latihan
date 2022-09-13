import { Col, Row } from "react-bootstrap";
import ClickButton from "./ClickButton";
import HoverButton from "./HoverButton";
import { Component } from "react";

export class DemoHoc extends Component {
  render() {
    return (
      <>
        <Row className="my-3 mx-3 d-flex justify-content-center">
          <Col>
            <HoverButton name="Ari" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ClickButton name="Putra" />
          </Col>
        </Row>
      </>
    );
  }
}
