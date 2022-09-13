import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { SayHello } from "./SayHello";
import { InputName } from "./InputName";

export class Halo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "World",
    };
    this.setName = this.setName.bind(this);
  }

  setName(nama) {
    this.setState({ nama });
  }

  render() {
    return (
      <Row>
        <Col>
          <SayHello nama={this.state.nama} />
          <InputName nama={this.state.nama} action={this.setName} />
        </Col>
      </Row>
    );
  }
}
